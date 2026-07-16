import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

export default function ProductCard({ product }) {
  const navigation = useNavigation();
  const { i18n } = useTranslation();
  const lang = i18n.language?.includes('ta') ? 'ta' : 'en';

  // Local Cart State (Cart ஸ்கிரீன் வரும் வரை தற்காலிகமாக)
  const [cartQuantity, setCartQuantity] = useState(0);

  // Data Extraction Helper
  const getLocalText = (textObj) => {
    if (!textObj) return '';
    if (typeof textObj === 'string') return textObj;
    return textObj[lang] || textObj.en || '';
  };

  if (!product) return null;

  // Extracting details from the product object
  const productName = getLocalText(product.name);
  const subtitle = getLocalText(product.subtitle); // Description-க்காக பயன்படுத்துகிறோம்
  const imageUrl = product.images?.[0] || product.imageURL;
  const variant = product.variants?.[0] || {};
  const weight = getLocalText(variant.weight) || '500g';
  const price = variant.price || 0;
  const mrp = variant.mrp || 0;
  const discount = variant.discountPercent ? `${variant.discountPercent}% OFF` : (variant.discount || '');

  // Navigation Handlers
  const handleImageClick = () => {
    navigation.navigate("ProductDetailsScreen", { productId: product.id });
  };

  const handleAiInfoClick = () => {
    // initialTab ஆக 'ai_nutri_info'-வை அனுப்புகிறோம்
    navigation.navigate("ProductDetailsScreen", { 
      productId: product.id, 
      initialTab: 'ai_nutri_info' 
    });
  };

  // Cart Handlers
  const handleAdd = () => setCartQuantity(1);
  const handleIncrement = () => setCartQuantity(prev => prev + 1);
  const handleDecrement = () => setCartQuantity(prev => Math.max(0, prev - 1));

  return (
    <View style={styles.cardContainer}>
      
      {/* 1. Image Section */}
      <View style={styles.imageWrapper}>
        <TouchableOpacity activeOpacity={0.9} onPress={handleImageClick}>
          <Image source={{ uri: imageUrl }} style={styles.productImage} resizeMode="cover" />
        </TouchableOpacity>

        {/* Overlapping Add / Quantity Button */}
        <View style={styles.addButtonWrapper}>
          {cartQuantity === 0 ? (
            <TouchableOpacity style={styles.addBtnOutline} onPress={handleAdd}>
              <Text style={styles.addBtnOutlineText}>ADD</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.quantityContainer}>
              <TouchableOpacity style={styles.qtyActionBtn} onPress={handleDecrement}>
                <Ionicons name="remove" size={18} color="#FFF" />
              </TouchableOpacity>
              <Text style={styles.qtyText}>{cartQuantity}</Text>
              <TouchableOpacity style={styles.qtyActionBtn} onPress={handleIncrement}>
                <Ionicons name="add" size={18} color="#FFF" />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>

      {/* 2. Product Details Section */}
      <View style={styles.detailsWrapper}>
        <Text style={styles.weightText}>{weight}</Text>
        <Text style={styles.productName} numberOfLines={1}>{productName}</Text>
        
        {discount ? <Text style={styles.discountText}>{discount}</Text> : <View style={{height: 16}}/>}
        
        <View style={styles.priceRow}>
          <Text style={styles.priceText}>₹{price}</Text>
          {mrp > 0 && <Text style={styles.mrpText}>₹{mrp}</Text>}
        </View>

        <Text style={styles.descText} numberOfLines={2}>{subtitle}</Text>
      </View>

      {/* 3. AI Nutritional Info Button */}
      <TouchableOpacity style={styles.aiButton} onPress={handleAiInfoClick} activeOpacity={0.7}>
        <View style={styles.aiButtonLeft}>
          <MaterialCommunityIcons name="magic-staff" size={16} color="#058A46" />
          <Text style={styles.aiButtonText}>{lang === 'ta' ? 'AI ஊட்டச்சத்து' : 'AI Nutritional Info'}</Text>
        </View>
        <Ionicons name="chevron-forward" size={16} color="#058A46" />
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: '47%', // 2-Column Grid-க்கு ஏற்றவாறு
    backgroundColor: '#FFF',
    marginBottom: 20,
    borderRadius: 16,
    // (Optional) தேவைப்பட்டால் லேசான shadow கொடுத்துக்கொள்ளலாம்
  },
  
  // Image & Button Wrapper
  imageWrapper: {
    position: 'relative',
    marginBottom: 24, // Overlapping பட்டனுக்கான இடைவெளி
  },
  productImage: {
    width: '100%',
    aspectRatio: 1, // Square Image
    borderRadius: 16,
    backgroundColor: '#F3F4F6',
  },
  addButtonWrapper: {
    position: 'absolute',
    bottom: -16,
    right: 8,
    zIndex: 10,
  },
  
  // Add Button (Empty State)
  addBtnOutline: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#058A46',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  addBtnOutlineText: {
    color: '#058A46',
    fontWeight: 'bold',
    fontSize: 14,
  },
  
  // Quantity Selector (Active State)
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#058A46',
    borderRadius: 8,
    height: 36,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  qtyActionBtn: {
    paddingHorizontal: 12,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  qtyText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14,
    minWidth: 20,
    textAlign: 'center',
  },

  // Text Details
  detailsWrapper: {
    paddingHorizontal: 4,
  },
  weightText: {
    fontSize: 12,
    color: '#9CA3AF',
    marginBottom: 4,
  },
  productName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 6,
  },
  discountText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#FF4500', // Red/Orange color for discount
    marginBottom: 4,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 8,
  },
  priceText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
  },
  mrpText: {
    fontSize: 12,
    color: '#9CA3AF',
    textDecorationLine: 'line-through',
    marginLeft: 6,
    marginBottom: 2,
  },
  descText: {
    fontSize: 11,
    color: '#6B7280',
    lineHeight: 16,
    marginBottom: 12,
  },

  // AI Button
  aiButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F0FDF4', // Light Mint Green
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D1FAE5',
  },
  aiButtonLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  aiButtonText: {
    color: '#058A46',
    fontSize: 11,
    fontWeight: '600',
    marginLeft: 4,
  },
});