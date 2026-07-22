import React, { useState } from "react";
// கீழே உள்ள வரியில் 'Text' சேர்க்கப்பட்டுள்ளது கவனிக்கவும்
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import TopHeader from "../components/TopHeader";
import PureNaturalContent from "../components/PureNaturalContent";
import ProductCard from "../components/ProductCard";
import FreshThisMorning from "../components/FreshThisMorning";
import GlobalCartBanner from "../components/GlobalCartBanner";
import { Ionicons } from "@expo/vector-icons";
import FreshPicksSection from "../components/FreshPicksSection";
import HomeCategoriesSection from "../components/HomeCategoriesSection";

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
            <FreshPicksSection />
            <HomeCategoriesSection />
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
      </ScrollView>
      <GlobalCartBanner />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FAFAFA" },
  contentArea: { flex: 1 },
});
