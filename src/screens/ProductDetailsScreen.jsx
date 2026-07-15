import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  Share,
  Platform,
  SafeAreaView
} from 'react-native';
import { Ionicons, MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

// உங்களது உண்மையான டேட்டா ஃபைல்
import { products } from '../data/data'; 

const { width } = Dimensions.get('window');

export default function ProductDetailsScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  
  // 1. HomeScreen-ல் இருந்து வரும் productId-ஐ எடுக்கிறோம்
  const { productId } = route.params || {};

  // 2. data.js-ல் இருந்து அந்த குறிப்பிட்ட Product-ஐ தேடி எடுக்கிறோம்
  const product = products.find((p) => p.id === productId);

  // --- States ---
  const [activeImage, setActiveImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [activeTab, setActiveTab] = useState('product_info'); 
  const [cartQuantity, setCartQuantity] = useState(1);
  const [expandedSection, setExpandedSection] = useState('nutritional'); 
  const [expandedAiSection, setExpandedAiSection] = useState('benefits'); 

  // --- 3. Fallback & Dynamic Data Mapping ---
  // Product கிடைக்கவில்லை என்றால் Error காட்டலாம்
  if (!product) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Product not found!</Text>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={{color: '#FFF'}}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // Dynamic values (டேட்டாவில் இருந்தால் அதை எடுக்கும், இல்லை என்றால் Default காட்டும்)
  const productName = product.name?.en || product.name || 'Unknown Product';
  const productImages = product.images?.length > 0 ? product.images : [product.imageURL];
  
  // Variants டேட்டாவில் இல்லையென்றால், ஒரு Dummy Variant-ஐ உருவாக்குகிறோம்
  const variants = product.variants || [
    { 
      id: 'v1', 
      weight: product.weight || '1 kg', 
      price: product.price || 165, 
      mrp: product.mrp || 180, 
      discount: '10% OFF', 
      unitPrice: `₹${product.price || 165}/kg` 
    }
  ];

  // Badges & Features (API-ல் வரவில்லை என்றால் டிசைனுக்காக இந்த Default Data)
  const badges = product.badges || [
    { icon: 'leaf', text: 'Heritage Grain' },
    { icon: 'lightning-bolt', text: 'Stamina Booster' },
    { icon: 'water', text: 'Low Glycemic Index' }
  ];
  
  const features = product.features || [
    { icon: 'leaf', title: '100%\nNatural' },
    { icon: 'truck-fast', title: 'Fast\nDelivery' },
    { icon: 'tractor', title: 'Farm\nFresh' },
    { icon: 'snowflake', title: 'No\nCold Storage' }
  ];

  // Related products (தற்போதைய Category-ஐ வைத்து Filter செய்யலாம், இப்போதைக்கு Random 2)
  const relatedProducts = products.filter(p => p.id !== productId).slice(0, 2);

  // --- Handlers ---
  const handleScroll = (event) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    setActiveImage(Math.round(index));
  };

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Check out ${productName} on Pure & Natural! Get it for just ₹${variants[0].price}.`,
      });
    } catch (error) {
      console.log('Error sharing:', error.message);
    }
  };

  const renderAccordion = (title, id, currentExpanded, setExpanded, children) => {
    const isExpanded = currentExpanded === id;
    return (
      <View style={styles.accordionContainer}>
        <TouchableOpacity 
          style={styles.accordionHeader} 
          onPress={() => setExpanded(isExpanded ? null : id)}
          activeOpacity={0.7}
        >
          <Text style={styles.accordionTitle}>{title}</Text>
          <Ionicons name={isExpanded ? "chevron-up" : "chevron-down"} size={20} color="#6B7280" />
        </TouchableOpacity>
        {isExpanded && <View style={styles.accordionContent}>{children}</View>}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      
      {/* Top Header */}
      <View style={styles.floatingHeader}>
        <TouchableOpacity style={styles.iconButton} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-down" size={24} color="#111827" />
        </TouchableOpacity>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconButton} onPress={() => console.log('Search clicked')}>
            <Ionicons name="search-outline" size={22} color="#111827" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} onPress={handleShare}>
            <Ionicons name="arrow-redo-outline" size={22} color="#111827" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* Carousel */}
        <View style={styles.carouselContainer}>
          <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} onScroll={handleScroll} scrollEventThrottle={16}>
            {productImages.map((img, index) => (
              <Image key={index} source={{ uri: img }} style={styles.productImage} resizeMode="contain" />
            ))}
          </ScrollView>
          <View style={styles.pagination}>
            {productImages.map((_, index) => (
              <View key={index} style={[styles.dot, activeImage === index ? styles.activeDot : null]} />
            ))}
          </View>
        </View>

        <View style={styles.detailsContainer}>
          {/* Title & Badges */}
          <Text style={styles.productName}>{productName}</Text>
          {product.subtitle && <Text style={styles.productSubtitle}>{product.subtitle}</Text>}
          
          <View style={styles.badgesRow}>
            {badges.map((badge, idx) => (
              <View key={idx} style={styles.badgeItem}>
                <MaterialCommunityIcons name={badge.icon} size={12} color="#EF4444" />
                <Text style={styles.badgeText}>{badge.text}</Text>
              </View>
            ))}
          </View>

          {/* Pricing */}
          <View style={styles.priceRow}>
            <Text style={styles.sellingPrice}>₹{variants[selectedVariant].price}</Text>
            <View style={styles.discountTag}>
              <MaterialCommunityIcons name="tag" size={12} color="#EF4444" />
              <Text style={styles.discountText}>{variants[selectedVariant].discount}</Text>
            </View>
          </View>
          <Text style={styles.mrpText}>MRP ₹{variants[selectedVariant].mrp}</Text>

          {/* Variants */}
          <View style={styles.variantsRow}>
            {variants.map((variant, index) => (
              <TouchableOpacity 
                key={variant.id}
                style={[styles.variantBox, selectedVariant === index && styles.activeVariantBox]}
                onPress={() => setSelectedVariant(index)}
              >
                <View style={styles.variantTop}>
                  <Text style={[styles.variantWeight, selectedVariant === index && styles.activeVariantText]}>{variant.weight}</Text>
                  <Text style={styles.variantBoxDiscount}>{variant.discount}</Text>
                </View>
                <View style={styles.variantMiddle}>
                  <Text style={[styles.variantPrice, selectedVariant === index && styles.activeVariantText]}>₹{variant.price}</Text>
                  <Text style={styles.variantMrp}>MRP ₹{variant.mrp}</Text>
                </View>
                <Text style={styles.variantUnitPrice}>{variant.unitPrice}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Schedule Button */}
          <TouchableOpacity style={styles.scheduleButton}>
            <Ionicons name="calendar-outline" size={18} color="#4B5563" />
            <Text style={styles.scheduleText}>Schedule Delivery</Text>
          </TouchableOpacity>

          {/* Features */}
          <View style={styles.featuresRow}>
            {features.map((feat, idx) => (
              <View key={idx} style={styles.featureItem}>
                <MaterialCommunityIcons name={feat.icon} size={24} color="#058A46" />
                <Text style={styles.featureItemText}>{feat.title}</Text>
              </View>
            ))}
          </View>

          {/* Tabs */}
          <View style={styles.tabsContainer}>
            <TouchableOpacity style={[styles.tabButton, activeTab === 'product_info' && styles.activeTab]} onPress={() => setActiveTab('product_info')}>
              <Feather name="info" size={16} color={activeTab === 'product_info' ? "#058A46" : "#6B7280"} />
              <Text style={[styles.tabText, activeTab === 'product_info' && styles.activeTabText]}>Product info</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.tabButton, activeTab === 'ai_nutri_info' && styles.activeTab]} onPress={() => setActiveTab('ai_nutri_info')}>
              <MaterialCommunityIcons name="magic-staff" size={16} color={activeTab === 'ai_nutri_info' ? "#058A46" : "#6B7280"} />
              <Text style={[styles.tabText, activeTab === 'ai_nutri_info' && styles.activeTabText]}>AI Nutri info</Text>
            </TouchableOpacity>
          </View>

          {/* Tab Content */}
          <View style={styles.tabContentArea}>
            {activeTab === 'product_info' && (
              <View>
                {renderAccordion('Nutritional Profile (Per 100g)', 'nutritional', expandedSection, setExpandedSection, (
                  <View style={styles.tableRowContainer}>
                    <View style={styles.tableRow}><Text style={styles.tableKey}>Muscle Repair</Text><Text style={styles.tableValue}>7.5g Protein</Text></View>
                    <View style={styles.tableRow}><Text style={styles.tableKey}>Gut Health</Text><Text style={styles.tableValue}>2.5g Fiber</Text></View>
                    <View style={styles.tableRow}><Text style={styles.tableKey}>Blood Boost</Text><Text style={styles.tableValue}>1.8mg Iron</Text></View>
                  </View>
                ))}
                {renderAccordion('Farmer & Verification', 'farmer', expandedSection, setExpandedSection, (
                  <View>
                    <Text style={styles.farmerText}>Grown By: V V Perumals <Text style={styles.verifiedTag}>✓ Verified Farmer</Text></Text>
                  </View>
                ))}
              </View>
            )}

            {activeTab === 'ai_nutri_info' && (
              <View style={styles.aiNutriContainer}>
                {renderAccordion(<View style={styles.aiHeader}><Ionicons name="leaf-outline" size={18} color="#058A46"/><Text style={styles.aiTitle}>Benefits</Text></View>, 'benefits', expandedAiSection, setExpandedAiSection, (
                  <View>
                    <View style={styles.bulletRow}><View style={styles.bulletDot}/><Text style={styles.bulletTitle}>Rich in Iron & zinc</Text></View>
                    <Text style={styles.bulletDesc}>Strengthens nerves and muscles</Text>
                  </View>
                ))}
              </View>
            )}
          </View>

          {/* Related Products - Dynamically from data.js */}
          <View style={styles.relatedSection}>
            <Text style={styles.relatedTitle}>Top products in this category</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.relatedScroll}>
              {relatedProducts.map(item => (
                <View key={item.id} style={styles.relatedCard}>
                  <View style={styles.relatedImgBg}>
                    <Image source={{uri: item.images ? item.images[0] : item.imageURL}} style={styles.relatedImage} resizeMode="contain"/>
                    <TouchableOpacity style={styles.relatedAddBtn}>
                      <Text style={styles.relatedAddText}>ADD</Text>
                    </TouchableOpacity>
                  </View>
                  <Text style={styles.relatedWeight}>{item.weight || '500g'}</Text>
                  <Text style={styles.relatedItemName} numberOfLines={2}>{item.name?.en || item.name}</Text>
                  <View style={styles.relatedPriceRow}>
                    <Text style={styles.relatedPrice}>₹{item.price}</Text>
                    <Text style={styles.relatedMrp}>₹{item.mrp || item.price + 10}</Text>
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>

        </View>
      </ScrollView>

      {/* Bottom Cart Section */}
      <View style={styles.bottomFixedContainer}>
        <TouchableOpacity style={styles.cartBanner}>
          <View style={styles.cartBannerLeft}>
            <MaterialCommunityIcons name="truck-delivery-outline" size={20} color="#FFF" />
            <Text style={styles.cartBannerText}>Free Delivery</Text>
          </View>
          <View style={styles.cartBannerRight}>
            <Text style={styles.cartBannerItems}>Cart 4 items</Text>
            <Ionicons name="chevron-forward" size={16} color="#FFF" />
          </View>
        </TouchableOpacity>

        <View style={styles.bottomActionRow}>
          <View>
            <View style={styles.priceRow}>
              <Text style={styles.bottomPrice}>₹{variants[selectedVariant].price}</Text>
              <View style={styles.discountTag}>
                <Text style={styles.discountText}>{variants[selectedVariant].discount}</Text>
              </View>
            </View>
            <Text style={styles.mrpText}>MRP ₹{variants[selectedVariant].mrp}</Text>
          </View>

          <View style={styles.quantitySelector}>
            <TouchableOpacity onPress={() => setCartQuantity(Math.max(1, cartQuantity - 1))} style={styles.qtyBtn}>
              <Text style={styles.qtyBtnText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.qtyText}>{cartQuantity}</Text>
            <TouchableOpacity onPress={() => setCartQuantity(cartQuantity + 1)} style={styles.qtyBtn}>
              <Text style={styles.qtyBtnText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // ... (நீங்கள் முந்தைய மெசேஜில் பார்த்த அதே Styles-ஐ இங்கே அப்படியே பயன்படுத்தவும். எந்த மாற்றமும் இல்லை).
  errorContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  errorText: { fontSize: 18, fontWeight: 'bold', marginBottom: 16 },
  backBtn: { backgroundColor: '#058A46', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 8 },
  
  safeArea: { flex: 1, backgroundColor: '#F9FAFB' },
  floatingHeader: { position: 'absolute', top: Platform.OS === 'ios' ? 50 : 20, left: 0, right: 0, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 16, zIndex: 10 },
  iconButton: { backgroundColor: 'rgba(255,255,255,0.8)', width: 36, height: 36, borderRadius: 18, justifyContent: 'center', alignItems: 'center' },
  headerRight: { flexDirection: 'row', gap: 12 },
  scrollContent: { paddingBottom: 140 },
  carouselContainer: { width, height: width, backgroundColor: '#FFF' },
  productImage: { width, height: width },
  pagination: { flexDirection: 'row', position: 'absolute', bottom: 16, alignSelf: 'center' },
  dot: { width: 6, height: 6, borderRadius: 3, backgroundColor: '#D1D5DB', marginHorizontal: 4 },
  activeDot: { backgroundColor: '#111827', width: 20 },
  detailsContainer: { padding: 16, backgroundColor: '#F9FAFB' },
  productName: { fontSize: 20, fontWeight: 'bold', color: '#111827' },
  productSubtitle: { fontSize: 14, color: '#6B7280', marginBottom: 12 },
  badgesRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 16 },
  badgeItem: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FEF2F2', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 4, borderWidth: 1, borderColor: '#FEE2E2' },
  badgeText: { fontSize: 10, color: '#EF4444', marginLeft: 4, fontWeight: '600' },
  priceRow: { flexDirection: 'row', alignItems: 'center' },
  sellingPrice: { fontSize: 24, fontWeight: 'bold', color: '#111827' },
  bottomPrice: { fontSize: 20, fontWeight: 'bold', color: '#111827' },
  discountTag: { flexDirection: 'row', alignItems: 'center', marginLeft: 8 },
  discountText: { fontSize: 12, color: '#EF4444', fontWeight: 'bold', marginLeft: 2 },
  mrpText: { fontSize: 12, color: '#9CA3AF', textDecorationLine: 'line-through', marginTop: 2 },
  variantsRow: { flexDirection: 'row', gap: 12, marginTop: 16 },
  variantBox: { flex: 1, borderWidth: 1, borderColor: '#E5E7EB', borderRadius: 8, padding: 12, backgroundColor: '#FFF' },
  activeVariantBox: { borderColor: '#058A46', backgroundColor: '#F0FDF4' },
  variantTop: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  variantWeight: { fontWeight: 'bold', color: '#374151' },
  variantBoxDiscount: { fontSize: 10, color: '#EF4444', fontWeight: 'bold' },
  variantMiddle: { flexDirection: 'row', alignItems: 'baseline', gap: 6 },
  variantPrice: { fontSize: 18, fontWeight: 'bold', color: '#111827' },
  variantMrp: { fontSize: 12, color: '#9CA3AF', textDecorationLine: 'line-through' },
  variantUnitPrice: { fontSize: 12, color: '#6B7280', marginTop: 4 },
  activeVariantText: { color: '#058A46' },
  scheduleButton: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#E5E7EB', borderRadius: 8, paddingVertical: 12, marginTop: 16, backgroundColor: '#FFF' },
  scheduleText: { marginLeft: 8, color: '#4B5563', fontWeight: '600' },
  featuresRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 24, paddingHorizontal: 8 },
  featureItem: { alignItems: 'center' },
  featureItemText: { fontSize: 10, color: '#6B7280', textAlign: 'center', marginTop: 4, lineHeight: 14 },
  tabsContainer: { flexDirection: 'row', marginTop: 24, gap: 12 },
  tabButton: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 12, borderRadius: 8, backgroundColor: '#FFF', borderWidth: 1, borderColor: '#E5E7EB' },
  activeTab: { borderColor: '#058A46', backgroundColor: '#F0FDF4' },
  tabText: { marginLeft: 8, fontWeight: '600', color: '#6B7280' },
  activeTabText: { color: '#058A46' },
  tabContentArea: { marginTop: 16 },
  accordionContainer: { marginBottom: 12, backgroundColor: '#FFF', borderRadius: 8, overflow: 'hidden' },
  accordionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16 },
  accordionTitle: { fontWeight: 'bold', color: '#374151', fontSize: 15 },
  accordionContent: { paddingHorizontal: 16, paddingBottom: 16 },
  tableRowContainer: { gap: 12 },
  tableRow: { flexDirection: 'row', justifyContent: 'space-between' },
  tableKey: { color: '#6B7280', fontSize: 13 },
  tableValue: { color: '#111827', fontSize: 13, fontWeight: '500' },
  farmerText: { color: '#4B5563', fontSize: 13, marginBottom: 8, lineHeight: 20 },
  verifiedTag: { color: '#3B82F6', fontWeight: 'bold', fontSize: 12 },
  usageText: { color: '#4B5563', fontSize: 13, marginBottom: 8, lineHeight: 20 },
  boldText: { fontWeight: 'bold', color: '#111827' },
  aiNutriContainer: { backgroundColor: '#F0FDF4', borderRadius: 12, padding: 8 },
  aiHeader: { flexDirection: 'row', alignItems: 'center' },
  aiTitle: { fontWeight: 'bold', color: '#111827', marginLeft: 8 },
  bulletRow: { flexDirection: 'row', alignItems: 'center', marginTop: 12 },
  bulletDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: '#058A46', marginRight: 8 },
  bulletTitle: { fontWeight: 'bold', color: '#111827', fontSize: 13 },
  bulletDesc: { color: '#6B7280', fontSize: 12, marginLeft: 14, marginTop: 4, marginBottom: 8 },
  relatedSection: { marginTop: 32 },
  relatedTitle: { fontSize: 16, fontWeight: 'bold', color: '#111827', marginBottom: 16 },
  relatedScroll: { paddingRight: 16 },
  relatedCard: { width: 140, marginRight: 12, backgroundColor: '#FFF', borderRadius: 8, padding: 8 },
  relatedImgBg: { backgroundColor: '#F3F4F6', borderRadius: 8, height: 120, justifyContent: 'center', alignItems: 'center', position: 'relative', marginBottom: 8 },
  relatedImage: { width: '80%', height: '80%' },
  relatedAddBtn: { position: 'absolute', bottom: -12, backgroundColor: '#FFF', borderWidth: 1, borderColor: '#058A46', paddingHorizontal: 16, paddingVertical: 4, borderRadius: 16 },
  relatedAddText: { color: '#058A46', fontWeight: 'bold', fontSize: 12 },
  relatedWeight: { fontSize: 10, color: '#6B7280', marginTop: 16 },
  relatedItemName: { fontSize: 12, fontWeight: 'bold', color: '#111827', marginTop: 4, height: 34 },
  relatedPriceRow: { flexDirection: 'row', alignItems: 'center', marginTop: 4, gap: 4 },
  relatedPrice: { fontSize: 14, fontWeight: 'bold', color: '#111827' },
  relatedMrp: { fontSize: 10, color: '#9CA3AF', textDecorationLine: 'line-through' },
  bottomFixedContainer: { position: 'absolute', bottom: 0, left: 0, right: 0 },
  cartBanner: { backgroundColor: '#058A46', marginHorizontal: 16, borderRadius: 8, padding: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', transform: [{ translateY: 10 }], zIndex: 2 },
  cartBannerLeft: { flexDirection: 'row', alignItems: 'center' },
  cartBannerText: { color: '#FFF', fontWeight: 'bold', marginLeft: 8 },
  cartBannerRight: { flexDirection: 'row', alignItems: 'center' },
  cartBannerItems: { color: '#FFF', fontSize: 12, marginRight: 4 },
  bottomActionRow: { backgroundColor: '#FFF', paddingHorizontal: 16, paddingTop: 24, paddingBottom: Platform.OS === 'ios' ? 32 : 16, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderTopWidth: 1, borderTopColor: '#E5E7EB', zIndex: 1 },
  quantitySelector: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FF204E', borderRadius: 8, overflow: 'hidden' },
  qtyBtn: { paddingHorizontal: 16, paddingVertical: 12 },
  qtyBtnText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
  qtyText: { color: '#FFF', fontSize: 16, fontWeight: 'bold', paddingHorizontal: 8 },
});