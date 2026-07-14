import React, { useState } from "react";
// கீழே உள்ள வரியில் 'Text' சேர்க்கப்பட்டுள்ளது கவனிக்கவும்
import { View, ScrollView, StyleSheet, Text } from "react-native";
import TopHeader from "../components/TopHeader";
import PureNaturalContent from "../components/PureNaturalContent";

export default function HomeScreen() {
  const [currentTab, setCurrentTab] = useState("pure_natural");

  const handleTabChange = (selectedTab) => {
    setCurrentTab(selectedTab);
  };

  return (
    <View style={styles.container}>
      <TopHeader onTabChange={handleTabChange} />

      <ScrollView style={styles.contentArea}>
        {currentTab === "pure_natural" && (
            <PureNaturalContent />
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FAFAFA" },
  contentArea: { flex: 1 },
});
