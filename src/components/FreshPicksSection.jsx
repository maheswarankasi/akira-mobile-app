import React, { useState, useMemo } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TouchableOpacity, 
  FlatList 
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import { products } from '../data/data';
import { addToCart, updateQuantity } from '../store/cartSlice';
import { normalize } from '../utils/responsive';

// --- Category Tabs Data ---
const TABS = [
  { id: 'all', labelKey: 'tab_all', icon: 'leaf', color: '#058A46' },
  { id: 'cat_vegetables', labelKey: 'tab_vegetables', icon: 'carrot', color: '#F59E0B' },
  { id: 'cat_fruits', labelKey: 'tab_fruits', icon: 'food-apple', color: '#EF4444' },
  { id: 'cat_millets', labelKey: 'tab_millets', icon: 'barley', color: '#D97706' },
];

// --- Single Product Card (With exact Cart Logic) ---
const ProductCard = ({ product, lang }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  // Redux Cart State
  const cartItem = useSelector((state) => 
    state.cart.items.find((item) => item.product.id === product.id)
  );
  const cartQuantity = cartItem ? cartItem.quantity : 0;

  const getLocalText = (textObj) => {
    if (!textObj) return '';
    if (typeof textObj === 'string') return textObj;
    return textObj[lang] || textObj.en || '';
  };

  const productName = getLocalText(product.name);
  const subtitle = getLocalText(product.subtitle);
  const imageUrl = product.images?.[0] || product.imageURL;
  const variant = product.variants?.[0] || {};
  
  const handleProductClick = () => {
    navigation.navigate("ProductDetailsScreen", { productId: product.id });
  };

  // Cart Handlers
  const handleAdd = () => dispatch(addToCart({ product, quantity: 1 }));
  const handleIncrement = () => dispatch(updateQuantity({ productId: product.id, quantity: cartQuantity + 1 }));
  const handleDecrement = () => dispatch(updateQuantity({ productId: product.id, quantity: cartQuantity - 1 }));

  return (
    <View style={styles.productCard}>
      <TouchableOpacity activeOpacity={0.9} onPress={handleProductClick} style={styles.imageWrapper}>
        <Image source={{ uri: imageUrl }} style={styles.productImage} resizeMode="contain" />
        
        {/* Overlapping ADD / Qty Button */}
        <View style={styles.addBtnContainer}>
          {cartQuantity === 0 ? (
            <TouchableOpacity style={styles.addBtnOutline} onPress={handleAdd} activeOpacity={0.8}>
              <Text style={styles.addBtnText}>ADD</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.qtyContainer}>
              <TouchableOpacity style={styles.qtyBtn} onPress={handleDecrement} activeOpacity={0.7}>
                <Ionicons name="remove" size={normalize(14)} color="#FFF" />
              </TouchableOpacity>
              <Text style={styles.qtyText}>{cartQuantity}</Text>
              <TouchableOpacity style={styles.qtyBtn} onPress={handleIncrement} activeOpacity={0.7}>
                <Ionicons name="add" size={normalize(14)} color="#FFF" />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.9} onPress={handleProductClick} style={styles.productDetails}>
        <Text style={styles.productWeight}>{getLocalText(variant.weight)}</Text>
        <Text style={styles.productName} numberOfLines={2}>{productName}</Text>
        
        {variant.discountPercent ? (
          <Text style={styles.productDiscount}>{variant.discountPercent}% OFF</Text>
        ) : <Text style={styles.productDiscount}> </Text>}

        <View style={styles.priceRow}>
          <Text style={styles.productPrice}>₹{variant.price}</Text>
          {variant.mrp ? <Text style={styles.productMrp}>₹{variant.mrp}</Text> : null}
        </View>

        <Text style={styles.productDesc} numberOfLines={2}>{subtitle}</Text>
      </TouchableOpacity>

      {/* AI Nutritional Info Banner */}
      <TouchableOpacity 
        style={styles.aiBanner} 
        activeOpacity={0.7} 
        onPress={() => navigation.navigate("ProductDetailsScreen", { productId: product.id, initialTab: 'ai_nutri_info' })}
      >
        <MaterialCommunityIcons name="magic-staff" size={normalize(14)} color="#058A46" />
        <Text style={styles.aiBannerText}>{lang === 'ta' ? "AI ஊட்டச்சத்து" : "AI Nutritional Info"}</Text>
        <Ionicons name="chevron-forward" size={normalize(12)} color="#058A46" style={{ marginLeft: 'auto' }} />
      </TouchableOpacity>
    </View>
  );
};

// --- Main Fresh Picks Component ---
export default function FreshPicksSection() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.includes('ta') ? 'ta' : 'en';
  const navigation = useNavigation();

  const [selectedTab, setSelectedTab] = useState('all');

  // Filter 4 products based on selected tab
  const displayProducts = useMemo(() => {
    let filtered = [];
    if (selectedTab === 'all') {
      // 4 different products from data
      filtered = products.slice(0, 4); 
    } else {
      filtered = products.filter(p => p.categoryId === selectedTab).slice(0, 4);
    }
    return filtered;
  }, [selectedTab]);

  // Dynamic button text calculation
  const getButtonText = () => {
    if (selectedTab === 'all') {
      return t("view_all"); 
    }
    const tabObj = TABS.find(tObj => tObj.id === selectedTab);
    const categoryName = tabObj ? t(tabObj.labelKey) : '';
    return `${t("view_all")} ${categoryName}`;
  };

  return (
    <View style={styles.container}>
      
      {/* Title & Subtitle */}
      <View style={styles.headerTitleContainer}>
        {/* Placeholder for "Fresh Picks for you" image/logo */}
        <Text style={styles.logoText}>
          <Text style={styles.logoFresh}>Fresh </Text>
          <Text style={styles.logoPicks}>Picks{"\n"}for you</Text>
        </Text>
        <Text style={styles.subtitle}>{t("fresh_picks_subtitle")}</Text>
      </View>

      {/* Category Tabs */}
      <View style={styles.tabsContainer}>
        <FlatList 
          data={TABS}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            const isSelected = selectedTab === item.id;
            return (
              <TouchableOpacity 
                style={[styles.tabItem, isSelected && styles.tabItemSelected]}
                onPress={() => setSelectedTab(item.id)}
                activeOpacity={0.8}
              >
                <View style={[styles.tabIconBg, isSelected && styles.tabIconBgSelected]}>
                  <MaterialCommunityIcons 
                    name={item.icon} 
                    size={normalize(28)} 
                    color={isSelected ? '#058A46' : item.color} 
                  />
                </View>
                <Text style={[styles.tabText, isSelected && styles.tabTextSelected]}>
                  {t(item.labelKey)}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      {/* Products Grid (2x2) */}
      <View style={styles.productsGrid}>
        {displayProducts.map((product) => (
          <View key={product.id} style={styles.cardWrapper}>
             <ProductCard product={product} lang={lang} />
          </View>
        ))}
      </View>

      {/* View All Button */}
      {/* View All Button */}
      <TouchableOpacity 
        style={styles.viewAllBtn}
        onPress={() => {
          // 'All' டேபில் இருந்தால் null அனுப்புவோம் (முதல் tab ஆக செட் ஆகும்)
          // குறிப்பிட்ட Category-ல் இருந்தால் அதன் ID-யை அனுப்புவோம்
          const targetCategory = selectedTab === 'all' ? null : selectedTab;
          
          navigation.navigate("AllCategoriesScreen", { 
            initialCategory: targetCategory 
          });
        }}
        activeOpacity={0.8}
      >
        <Text style={styles.viewAllBtnText}>{getButtonText()}</Text>
        <Ionicons name="chevron-forward" size={normalize(18)} color="#058A46" />
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: normalize(16),
    backgroundColor: '#FFF',
    marginTop: normalize(8),
  },
  headerTitleContainer: {
    alignItems: 'center',
    paddingHorizontal: normalize(16),
    marginBottom: normalize(16),
  },
  logoText: {
    textAlign: 'center',
    lineHeight: normalize(26),
  },
  logoFresh: {
    fontSize: normalize(28),
    fontWeight: '900',
    color: '#FF204E',
    fontStyle: 'italic',
  },
  logoPicks: {
    fontSize: normalize(16),
    fontWeight: 'bold',
    color: '#058A46',
  },
  subtitle: {
    fontSize: normalize(12),
    color: '#6B7280',
    textAlign: 'center',
    marginTop: normalize(8),
  },
  
  // Tabs
  tabsContainer: {
    marginBottom: normalize(16),
  },
  tabItem: {
    alignItems: 'center',
    marginLeft: normalize(16),
    marginRight: normalize(8),
    borderBottomWidth: 3,
    borderBottomColor: 'transparent',
    paddingBottom: normalize(8),
  },
  tabItemSelected: {
    borderBottomColor: '#FF204E', // Red bottom border for selected
  },
  tabIconBg: {
    width: normalize(60),
    height: normalize(60),
    borderRadius: normalize(12),
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: normalize(8),
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  tabIconBgSelected: {
    borderColor: '#FF204E', // Red border for icon box
    backgroundColor: '#FFF',
  },
  tabText: {
    fontSize: normalize(12),
    color: '#4B5563',
    fontWeight: '600',
  },
  tabTextSelected: {
    color: '#FF204E',
  },

  // Grid
  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: normalize(12),
    justifyContent: 'space-between',
  },
  cardWrapper: {
    width: '48%', // Allows 2 cards per row
    marginBottom: normalize(16),
  },

  // View All Button
  viewAllBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0FDF4', // Light green
    borderWidth: 1,
    borderColor: '#A7F3D0',
    borderRadius: normalize(8),
    paddingVertical: normalize(12),
    marginHorizontal: normalize(16),
    marginTop: normalize(8),
  },
  viewAllBtnText: {
    color: '#058A46',
    fontSize: normalize(14),
    fontWeight: 'bold',
    marginRight: normalize(4),
  },

  // --- Product Card Styles (Reused & Adjusted) ---
  productCard: {
    backgroundColor: '#FFF',
    borderRadius: normalize(8),
    borderWidth: 1,
    borderColor: '#E5E7EB',
    overflow: 'hidden',
  },
  imageWrapper: {
    backgroundColor: '#F9FAFB',
    height: normalize(140),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  productImage: { width: '80%', height: '80%' },
  addBtnContainer: {
    position: 'absolute',
    bottom: normalize(-12),
    right: normalize(8),
    zIndex: 10,
  },
  addBtnOutline: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#058A46',
    borderRadius: normalize(6),
    paddingHorizontal: normalize(16),
    paddingVertical: normalize(6),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: normalize(2),
    elevation: 2,
  },
  addBtnText: { color: '#058A46', fontWeight: 'bold', fontSize: normalize(12) },
  qtyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#058A46',
    borderRadius: normalize(6),
    height: normalize(28),
    paddingHorizontal: normalize(4),
  },
  qtyBtn: { paddingHorizontal: normalize(6), height: '100%', justifyContent: 'center' },
  qtyText: { color: '#FFF', fontWeight: 'bold', fontSize: normalize(12), minWidth: normalize(16), textAlign: 'center' },
  productDetails: {
    paddingHorizontal: normalize(10),
    paddingTop: normalize(18), 
    paddingBottom: normalize(10),
  },
  productWeight: { fontSize: normalize(10), color: '#6B7280', marginBottom: normalize(2) },
  productName: { fontSize: normalize(12), fontWeight: '700', color: '#111827', marginBottom: normalize(4), minHeight: normalize(32) },
  productDiscount: { fontSize: normalize(10), color: '#FF3B30', fontWeight: 'bold', marginBottom: normalize(2) },
  priceRow: { flexDirection: 'row', alignItems: 'baseline', marginBottom: normalize(4) },
  productPrice: { fontSize: normalize(16), fontWeight: 'bold', color: '#111827' },
  productMrp: { fontSize: normalize(11), color: '#9CA3AF', textDecorationLine: 'line-through', marginLeft: normalize(6) },
  productDesc: { fontSize: normalize(10), color: '#9CA3AF', minHeight: normalize(26) },
  aiBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
    paddingVertical: normalize(8),
    paddingHorizontal: normalize(10),
  },
  aiBannerText: { color: '#058A46', fontSize: normalize(10), fontWeight: '600', marginLeft: normalize(4) },
});