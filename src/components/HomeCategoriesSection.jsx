import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import { normalize } from "../utils/responsive";

// --- Categories Data (From your actual data.js) ---
const CATEGORIES_DATA = [
  // முதல் 2 ஐட்டம்கள் பெரியதாக (Wide) தோன்றும்
  {
    id: "cat_vegetables",
    labelKey: "cat_vegetables",
    isWide: true,
    image: "https://cdn-icons-png.flaticon.com/512/2328/2328155.png",
  },
  {
    id: "cat_fruits",
    labelKey: "cat_fruits",
    isWide: true,
    image: "https://cdn-icons-png.flaticon.com/512/3194/3194591.png",
  },

  // மீதமுள்ளவை சிறியதாக (Small) தோன்றும்
  {
    id: "cat_millets",
    labelKey: "cat_millets",
    isWide: false,
    image: "https://cdn-icons-png.flaticon.com/512/3014/3014526.png",
  },
  {
    id: "cat_flours",
    labelKey: "cat_flours",
    isWide: false,
    image: "https://cdn-icons-png.flaticon.com/512/2515/2515155.png",
  },
  {
    id: "cat_oil_ghee",
    labelKey: "cat_oil_ghee",
    isWide: false,
    image: "https://cdn-icons-png.flaticon.com/512/8173/8173516.png",
  },
  {
    id: "cat_pickles",
    labelKey: "cat_pickles",
    isWide: false,
    image: "https://cdn-icons-png.flaticon.com/512/5759/5759556.png",
  },
  {
    id: "cat_dals",
    labelKey: "cat_dals",
    isWide: false,
    image: "https://cdn-icons-png.flaticon.com/512/6127/6127118.png",
  },
  {
    id: "cat_jaggery",
    labelKey: "cat_jaggery",
    isWide: false,
    image: "https://cdn-icons-png.flaticon.com/512/6580/6580327.png",
  },
  {
    id: "cat_snacks",
    labelKey: "cat_snacks",
    isWide: false,
    image: "https://cdn-icons-png.flaticon.com/512/2553/2553642.png",
  },
];

export default function HomeCategoriesSection() {
  const { t } = useTranslation();
  const navigation = useNavigation();

  const handleCategoryPress = (categoryId) => {
    // அந்த Category ID-உடன் AllCategoriesScreen-க்கு அனுப்புகிறோம்
    navigation.navigate("AllCategoriesScreen", { initialCategory: categoryId });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>{t("all_categories_title")}</Text>

      <View style={styles.gridContainer}>
        {CATEGORIES_DATA.map((item, index) => {
          // isWide true ஆக இருந்தால் பெரிய Card, இல்லையென்றால் சிறிய Card
          const cardStyle = item.isWide ? styles.wideCard : styles.smallCard;

          return (
            <TouchableOpacity
              key={index}
              style={[
                styles.itemWrapper,
                { width: item.isWide ? "48%" : "23%" },
              ]}
              activeOpacity={0.8}
              onPress={() => handleCategoryPress(item.id)}
            >
              <View style={[styles.imageBg, cardStyle]}>
                <Image
                  source={{ uri: item.image }} // Local இமேஜ் இருந்தால் require(...) பயன்படுத்தவும்
                  style={styles.categoryImage}
                  resizeMode="contain"
                />
              </View>
              <Text style={styles.categoryText} numberOfLines={2}>
                {t(item.labelKey)}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: normalize(16),
    paddingVertical: normalize(16),
    backgroundColor: "#FFF",
    marginTop: normalize(8),
  },
  sectionTitle: {
    fontSize: normalize(18),
    fontWeight: "bold",
    color: "#111827",
    marginBottom: normalize(16),
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  itemWrapper: {
    alignItems: "center",
    marginBottom: normalize(16),
  },
  imageBg: {
    backgroundColor: "#F0FDF4", // மிதமான பச்சை நிற பேக்ரவுண்ட்
    borderRadius: normalize(12),
    justifyContent: "center",
    alignItems: "center",
    marginBottom: normalize(8),
    width: "100%",
  },
  wideCard: {
    aspectRatio: 2.2, // செவ்வக வடிவம் (Wide)
  },
  smallCard: {
    aspectRatio: 1, // சதுர வடிவம் (Square)
  },
  categoryImage: {
    width: "60%",
    height: "60%",
  },
  categoryText: {
    fontSize: normalize(10),
    color: "#374151",
    textAlign: "center",
    fontWeight: "600",
    lineHeight: normalize(14),
  },
});
