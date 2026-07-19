import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { normalize } from '../utils/responsive';

export default function GlobalCartBanner() {
  const navigation = useNavigation();
  
  // RTK Store-ல் இருந்து டேட்டாவை எடுக்கிறோம்
  const { items, totalQuantity } = useSelector((state) => state.cart);

  if (totalQuantity === 0) return null;

  const previewImages = items.slice(0, 3).map(item => item.product.images?.[0] || item.product.imageURL);

  return (
    <TouchableOpacity style={styles.cartBanner} activeOpacity={0.9} onPress={() => navigation.navigate("CartScreen")}>
      <View style={styles.bannerLeft}>
        <MaterialCommunityIcons name="truck-delivery-outline" size={normalize(24)} color="#FFF" />
        <Text style={styles.bannerTitle}>Free Delivery</Text>
      </View>
      <View style={styles.bannerRight}>
        <View style={styles.cartTextCol}>
          <Text style={styles.cartLabel}>Cart</Text>
          <Text style={styles.itemsCount}>{totalQuantity} items</Text>
        </View>
        <View style={styles.imagesWrap}>
          {previewImages.map((img, index) => (
            <Image key={index} source={{ uri: img }} style={[styles.cartImg, { zIndex: 3 - index, left: index * normalize(-12) }]} />
          ))}
        </View>
        <Ionicons name="chevron-forward" size={normalize(20)} color="#FFF" />
      </View>
    </TouchableOpacity>
  );
}

// (Styles முந்தைய மெசேஜில் கொடுத்ததே தான், அப்படியே பயன்படுத்தவும்)

const styles = StyleSheet.create({
  cartBanner: {
    backgroundColor: '#03B75E',
    marginHorizontal: normalize(16),
    borderRadius: normalize(12),
    paddingVertical: normalize(12),
    paddingHorizontal: normalize(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: normalize(10)
  },
  bannerLeft: { flexDirection: 'row', alignItems: 'center' },
  bannerTitle: { color: '#FFF', fontWeight: 'bold', fontSize: normalize(16), marginLeft: normalize(8) },
  bannerRight: { flexDirection: 'row', alignItems: 'center' },
  cartTextCol: { alignItems: 'flex-end', marginRight: normalize(8) },
  cartLabel: { color: '#FFF', fontWeight: 'bold', fontSize: normalize(14) },
  itemsCount: { color: '#D1FAE5', fontSize: normalize(11) },
  imagesWrap: { flexDirection: 'row', alignItems: 'center', position: 'relative', width: normalize(45), height: normalize(28), marginRight: normalize(8) },
  cartImg: { width: normalize(28), height: normalize(28), borderRadius: normalize(14), borderWidth: 2, borderColor: '#03B75E', backgroundColor: '#FFF', position: 'absolute' }
});