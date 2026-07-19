import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";

// --- Redux Imports ---
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateQuantity } from "../store/cartSlice";

import { products } from "../data/data";

// --- மொழிபெயர்ப்புகள் ---
const TRANSLATIONS = {
  en: {
    title: "Fresh this morning",
    add: "ADD",
    aiInfo: "AI Nutritional Info",
  },
  ta: { title: "இன்றைய புதிய வரவுகள்", add: "சேர்", aiInfo: "AI ஊட்டச்சத்து" },
};

// --- Single Product Card Component ---
const FreshProductCard = ({ product, t, lang }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  // Redux-ல் இருந்து இந்த பொருளுக்கான Cart Quantity-ஐ எடுக்கிறோம்
  const cartItem = useSelector((state) =>
    state.cart.items.find((item) => item.product.id === product.id),
  );
  const cartQuantity = cartItem ? cartItem.quantity : 0;

  const getLocalText = (textObj) => {
    if (!textObj) return "";
    if (typeof textObj === "string") return textObj;
    return textObj[lang] || textObj.en || "";
  };

  const productName = getLocalText(product.name);
  const imageUrl = product.images?.[0] || product.imageURL;
  const variant = product.variants?.[0] || {};
  const price = variant.price || 0;
  const mrp = variant.mrp || 0;
  const discount = variant.discountPercent
    ? `${variant.discountPercent}%\nOFF`
    : variant.discount || "";

  // --- Handlers ---
  const handleImageClick = () => {
    navigation.navigate("ProductDetailsScreen", { productId: product.id });
  };

  const handleAiInfoClick = () => {
    navigation.navigate("ProductDetailsScreen", {
      productId: product.id,
      initialTab: "ai_nutri_info",
    });
  };

  // Redux Cart Actions
  const handleAdd = () => {
    dispatch(addToCart({ product, quantity: 1 }));
  };

  const handleIncrement = () => {
    dispatch(
      updateQuantity({ productId: product.id, quantity: cartQuantity + 1 }),
    );
  };

  const handleDecrement = () => {
    dispatch(
      updateQuantity({ productId: product.id, quantity: cartQuantity - 1 }),
    );
  };

  return (
    <View style={styles.card}>
      {/* Discount Ribbon (Top Right) */}
      {discount ? (
        <View style={styles.discountRibbon}>
          <Text style={styles.discountText}>{discount}</Text>
        </View>
      ) : null}

      {/* Image Area */}
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={handleImageClick}
        style={styles.imageContainer}
      >
        <Image
          source={{ uri: imageUrl }}
          style={styles.image}
          resizeMode="contain"
        />
      </TouchableOpacity>

      {/* Product Name */}
      <Text style={styles.productName} numberOfLines={1}>
        {productName}
      </Text>

      {/* Price & Add Button Row */}
      <View style={styles.priceAddRow}>
        <View style={styles.priceCol}>
          <Text style={styles.price}>₹{price}</Text>
          {mrp > 0 && <Text style={styles.mrp}>₹{mrp}</Text>}
        </View>

        {/* Cart Quantity-ஐ பொறுத்து UI மாறும் */}
        {cartQuantity === 0 ? (
          <TouchableOpacity
            style={styles.addBtnOutline}
            onPress={handleAdd}
            activeOpacity={0.7}
          >
            <Text style={styles.addBtnText}>{t.add}</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.qtyContainer}>
            <TouchableOpacity
              style={styles.qtyBtn}
              onPress={handleDecrement}
              activeOpacity={0.7}
            >
              <Ionicons name="remove" size={16} color="#FFF" />
            </TouchableOpacity>

            <Text style={styles.qtyText}>{cartQuantity}</Text>

            <TouchableOpacity
              style={styles.qtyBtn}
              onPress={handleIncrement}
              activeOpacity={0.7}
            >
              <Ionicons name="add" size={16} color="#FFF" />
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* AI Nutritional Info Bottom Banner */}
      <TouchableOpacity
        style={styles.aiBanner}
        activeOpacity={0.7}
        onPress={handleAiInfoClick}
      >
        <MaterialCommunityIcons name="magic-staff" size={14} color="#058A46" />
        <Text style={styles.aiBannerText}>{t.aiInfo}</Text>
        <Ionicons
          name="chevron-forward"
          size={12}
          color="#058A46"
          style={{ marginLeft: 2 }}
        />
      </TouchableOpacity>
    </View>
  );
};

// --- Main Carousel Component ---
export default function FreshThisMorning() {
  const { i18n } = useTranslation();
  const lang = i18n.language?.includes("ta") ? "ta" : "en";
  const t = TRANSLATIONS[lang];

  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) {
      // 1. Fruits மற்றும் Vegetables Category-ஐ மட்டும் Filter செய்கிறோம்
      const filtered = products.filter(
        (p) =>
          p.categoryId === "cat_fruits" ||
          p.categoryId === "cat_vegetables" ||
          p.category === "fruits" ||
          p.category === "vegetables",
      );

      // 2. Shuffle செய்து முதல் 5 Items-ஐ எடுக்கிறோம்
      const shuffled = [...filtered].sort(() => 0.5 - Math.random());
      setRandomProducts(shuffled.slice(0, 5));
    }
  }, []);

  if (randomProducts.length === 0) return null;

  return (
    <View style={styles.container}>
      <Text style={[styles.sectionTitle, lang === "ta" && { fontSize: 16 }]}>
        {t.title}
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {randomProducts.map((product) => (
          <FreshProductCard
            key={product.id}
            product={product}
            t={t}
            lang={lang}
          />
        ))}
       
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#111827",
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  scrollContent: {
    paddingHorizontal: 16,
    gap: 16,
  },

  // --- Card Styles ---
  card: {
    width: 170,
    backgroundColor: "#FFF",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#F3F4F6",
    position: "relative",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    marginRight: 16,
  },

  // Discount Ribbon
  discountRibbon: {
    position: "absolute",
    top: 0,
    right: 12,
    backgroundColor: "#FF3B30",
    paddingHorizontal: 6,
    paddingVertical: 6,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    zIndex: 10,
  },
  discountText: {
    color: "#FFF",
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 12,
  },

  // Image Area
  imageContainer: {
    width: "100%",
    height: 120,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "80%",
    height: "80%",
  },

  // Details Area
  productName: {
    fontSize: 14,
    fontWeight: "700",
    color: "#111827",
    textAlign: "center",
    marginTop: 12,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  priceAddRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  priceCol: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#111827",
  },
  mrp: {
    fontSize: 12,
    color: "#9CA3AF",
    textDecorationLine: "line-through",
    marginLeft: 4,
  },

  // Add & Qty Buttons
  addBtnOutline: {
    backgroundColor: "#FFF",
    borderWidth: 1.5,
    borderColor: "#058A46",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  addBtnText: {
    color: "#058A46",
    fontWeight: "bold",
    fontSize: 13,
  },
  qtyContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#058A46",
    borderRadius: 8,
    height: 32,
    paddingHorizontal: 4,
  },
  qtyBtn: {
    paddingHorizontal: 8,
    height: "100%",
    justifyContent: "center",
  },
  qtyText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 13,
    minWidth: 16,
    textAlign: "center",
  },

  // Bottom AI Banner
  aiBanner: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F0FDF4",
    paddingVertical: 10,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
  },
  aiBannerText: {
    color: "#058A46",
    fontSize: 11,
    fontWeight: "600",
    marginLeft: 4,
  },
});
