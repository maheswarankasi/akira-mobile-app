import React, { useState } from "react";
// கீழே உள்ள வரியில் 'Text' சேர்க்கப்பட்டுள்ளது கவனிக்கவும்
import { View, ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TopHeader from "../components/TopHeader";
import PureNaturalContent from "../components/PureNaturalContent";
import ProductCard from "../components/ProductCard";
import FreshThisMorning from "../components/FreshThisMorning";
import GlobalCartBanner from "../components/GlobalCartBanner";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  const navigation = useNavigation();
  const [currentTab, setCurrentTab] = useState("pure_natural");

  const handleTabChange = (selectedTab) => {
    setCurrentTab(selectedTab);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.contentArea}
        showsVerticalScrollIndicator={false}
      >
        <TopHeader onTabChange={handleTabChange} />
        {currentTab === "pure_natural" && (
          <View>
            <PureNaturalContent />
            <FreshThisMorning />
          </View>
        )}

        {currentTab === "nutri_kitchen" && (
          <View>
            <Text>Showing Nutri Kitchen Products...</Text>
          </View>
        )}

        {currentTab === "craft_village" && (
          <View>
            <Text>Showing Craft Village Products...</Text>
          </View>
        )}
        <TouchableOpacity 
        style={styles.allCategoriesBtn} 
        activeOpacity={0.8}
        onPress={() => navigation.navigate('AllCategoriesScreen')}
      >
        <Text style={styles.allCategoriesBtnText}>
           {/* உங்களுக்கு தமிழ்/ஆங்கிலம் மாற வேண்டுமானால் t("allCategories") பயன்படுத்தலாம் */}
           View All Categories 
        </Text>
        <Ionicons name="arrow-forward" size={16} color="#058A46" />
      </TouchableOpacity>
      </ScrollView>
      <GlobalCartBanner />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FAFAFA" },
  contentArea: { flex: 1 },
  allCategoriesBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8F5E9', // ஒரு லேசான பச்சை நிறம்
    paddingVertical: 12,
    marginHorizontal: 16,
    borderRadius: 8,
    marginTop: 8,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#A7F3D0',
  },
  allCategoriesBtnText: {
    color: '#058A46',
    fontWeight: 'bold',
    fontSize: 14,
    marginRight: 8,
  },
});
