import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  Dimensions,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { products } from "../data/data";
// குளோபல் சர்ச் பாக்ஸை இம்போர்ட் செய்கிறோம்
import GlobalSearchBox from "./GlobalSearchBox";

const { width } = Dimensions.get("window");

export default function PureNaturalContent() {
  const navigation = useNavigation();
  const [randomProducts, setRandomProducts] = useState([]);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (products && products.length > 0) {
      const shuffled = [...products].sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, 3);
      setRandomProducts(selected);
    }
  }, []);

  // GlobalSearchBox-ல் இருந்து வரும் Debounced Text-ஐ வைத்து Filter செய்யும் ஃபங்ஷன்
  const handleSearchResults = (text) => {
    setSearchQuery(text); // No results காட்டும்போது டெக்ஸ்ட் தேவைப்படும்

    if (text.trim().length > 0) {
      setIsSearching(true);
      const lowercasedFilter = text.toLowerCase();

      const results = products.filter((item) => {
        const enName =
          item.name?.en?.toLowerCase() || item.name?.toLowerCase() || "";
        const taName = item.name?.ta || "";
        return enName.includes(lowercasedFilter) || taName.includes(text);
      });

      setFilteredProducts(results);
    } else {
      setIsSearching(false);
      setFilteredProducts([]);
    }
  };

  return (
    <View style={styles.container}>
      {/* 1. Reusable Search Box (onSearch prop வழியாக டேட்டா வரும்) */}
      <GlobalSearchBox
        onSearch={handleSearchResults}
        placeholder="Search for 'Vegetables'"
      />

      {/* 2. Conditional Rendering */}
      {isSearching ? (
        <ScrollView
          style={styles.searchResultsContainer}
          contentContainerStyle={styles.searchResultsGrid}
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={[styles.card, { marginBottom: 16 }]}
                activeOpacity={0.8}
                onPress={() =>
                  navigation.navigate("ProductDetails", { productId: item.id })
                }
              >
                <Text
                  style={styles.cardTitle}
                  numberOfLines={2}
                  adjustsFontSizeToFit
                >
                  {item.name?.en || item.name}
                </Text>
                <Image
                  source={{ uri: item.images ? item.images[0] : item.imageURL }}
                  style={styles.cardImage}
                  resizeMode="contain"
                />
                <View style={styles.arrowContainer}>
                  <Ionicons name="chevron-forward" size={14} color="#FFF" />
                </View>
              </TouchableOpacity>
            ))
          ) : (
            <Text style={styles.noResultsText}>
              No products found for "{searchQuery}"
            </Text>
          )}
        </ScrollView>
      ) : (
        <ImageBackground
          source={require("../assets/images/pure-nature-header.webp")}
          style={styles.bannerBackground}
          resizeMode="cover"
        >
          <View style={styles.spacer} />

          <View style={styles.cardsContainer}>
            {randomProducts.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.card}
                activeOpacity={0.8}
                onPress={() =>
                  navigation.navigate("ProductDetails", { productId: item.id })
                }
              >
                <Text
                  style={styles.cardTitle}
                  numberOfLines={2}
                  adjustsFontSizeToFit
                >
                  {item.name?.en || item.name}
                </Text>
                <Image
                  source={{ uri: item.images ? item.images[0] : item.imageURL }}
                  style={styles.cardImage}
                  resizeMode="contain"
                />
                <View style={styles.arrowContainer}>
                  <Ionicons name="chevron-forward" size={14} color="#FFF" />
                </View>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.featuresContainer}>
            <FeatureItem text="Chemical\nFree" />
            <View style={styles.divider} />
            <FeatureItem text="Sustainable\nFarming" />
            <View style={styles.divider} />
            <FeatureItem text="Health\nBenefits" />
          </View>
        </ImageBackground>
      )}
    </View>
  );
}

const FeatureItem = ({ text }) => (
  <View style={styles.featureItem}>
    <Ionicons name="checkmark-circle" size={18} color="#A3E635" />
    <Text style={styles.featureText}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#058A46",
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    overflow: "hidden",
    marginTop: -2,
    zIndex: -2,
    width: "100%",
  },
  searchResultsContainer: {
    backgroundColor: "#F3F9EE",
    minHeight: 400,
    paddingTop: 20,
  },
  searchResultsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  noResultsText: {
    textAlign: "center",
    marginTop: 40,
    fontSize: 16,
    color: "#4B5563",
    width: "100%",
  },
  bannerBackground: {
    width: "100%",
    minHeight: 400,
  },
  spacer: {
    height: 180,
  },
  cardsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    // marginTop: "10%",
  },
  card: {
    backgroundColor: "#E8F5E9",
    width: (width - 48) / 3.5,
    aspectRatio: 0.7,
    borderRadius: 12,
    padding: 8,
    alignItems: "center",
    position: "relative",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardTitle: {
    fontSize: 10,
    fontWeight: "700",
    color: "#058A46",
    textAlign: "center",
    marginBottom: 8,
    height: 28,
  },
  cardImage: {
    width: "90%",
    height: "45%",
    borderRadius: 50,
  },
  arrowContainer: {
    position: "absolute",
    bottom: 10,
    right: 6,
    backgroundColor: "#111827",
    borderRadius: 12,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  featuresContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 32,
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  featureText: {
    color: "#A7F3D0",
    fontSize: 10,
    marginLeft: 5,
    textAlign: "left",
    lineHeight: 14,
  },
  divider: {
    width: 1,
    height: 24,
    backgroundColor: "#A7F3D0",
    opacity: 0.4,
  },
});
