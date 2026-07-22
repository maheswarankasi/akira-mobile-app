import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Platform,
  Image,
  Text,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import * as Location from "expo-location";
import { LinearGradient } from "expo-linear-gradient";

// --- Redux Imports ---
import { useDispatch, useSelector } from "react-redux";
import { setCurrentShop } from "../store/shopSlice"; 

// 1. Dynamic Themes
const THEMES = {
  pure_natural: {
    headerBg: "#F3F9EE",
    activeSectionBg: "#03B75E",
    inactiveBorder: "#03B75E",
    micIcon: "#EF4444",
  },
  nutri_kitchen: {
    headerBg: "#FFF7ED",
    activeSectionBg: "#E6D5B8",
    inactiveBorder: "#8B5A2B",
    micIcon: "#8B5A2B",
  },
  craft_village: {
    headerBg: "#F9FAFB",
    activeSectionBg: "#D1D5DB",
    inactiveBorder: "#4B5563",
    micIcon: "#4B5563",
  },
};

// 2. Smooth Outward Curve Component
const OutwardCurve = ({ side, activeBg, headerBg }) => (
  <View
    style={[
      styles.curveContainer,
      side === "left" ? { left: -19 } : { right: -19 },
      { backgroundColor: activeBg },
    ]}
  >
    <View
      style={[
        styles.curveChild,
        { backgroundColor: headerBg },
        side === "left" ? { left: -21 } : { right: -21 },
      ]}
    />
  </View>
);

export default function TopHeader({ onTabChange }) {
  const dispatch = useDispatch();
  
  // Local state-க்கு பதிலாக Redux-ல் இருந்து activeTab-ஐ எடுக்கிறோம்
  const activeTab = useSelector((state) => state.shop?.currentShop) || "pure_natural";
  const [currentAddress, setCurrentAddress] = React.useState("Fetching location...");

  const theme = THEMES[activeTab];

  useEffect(() => {
    fetchCurrentLocation();
  }, []);

  const fetchCurrentLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setCurrentAddress("Location permission denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      let geocode = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

      if (geocode.length > 0) {
        const place = geocode[0];
        const street = place.street || place.name || "";
        const city = place.city || place.district || place.subregion || "";
        const formattedAddress = `${street ? street + ", " : ""}${city}`;
        setCurrentAddress(formattedAddress);
      }
    } catch (error) {
      setCurrentAddress("Error fetching location");
    }
  };

  const handleTabPress = (tabId) => {
    dispatch(setCurrentShop(tabId)); // Redux-ல் அப்டேட் செய்கிறோம்
    if (onTabChange) onTabChange(tabId);
  };

  // --- Reusable Tab Render Function ---
  const renderTab = (tabId, activeImage, inactiveImage) => {
    const isActive = activeTab === tabId;

    if (isActive) {
      return (
        <TouchableOpacity
          style={[
            styles.tab,
            styles.activeTab,
            { backgroundColor: theme.activeSectionBg },
          ]}
          onPress={() => handleTabPress(tabId)}
          activeOpacity={0.9}
        >
          <OutwardCurve
            side="left"
            activeBg={theme.activeSectionBg}
            headerBg={theme.headerBg}
          />
          <OutwardCurve
            side="right"
            activeBg={theme.activeSectionBg}
            headerBg={theme.headerBg}
          />
          <Image
            source={activeImage}
            style={styles.tabImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
      );
    }

    return (
      <TouchableOpacity
        style={[styles.tab, styles.inactiveTabContainer]}
        onPress={() => handleTabPress(tabId)}
        activeOpacity={0.9}
      >
        <LinearGradient
          colors={[theme.inactiveBorder, "transparent"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.gradientBorderWrapper}
        >
          <View style={styles.inactiveInner}>
            <Image
              source={inactiveImage}
              style={styles.tabImage}
              resizeMode="contain"
            />
          </View>
        </LinearGradient>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: theme.headerBg }]}
    >
      <View style={[styles.topContainer, { backgroundColor: theme.headerBg }]}>
        <View style={styles.locationWrapper}>
          <TouchableOpacity style={styles.locationTitleRow}>
            <Text style={styles.locationTitle}>Home</Text>
            <Ionicons
              name="chevron-down"
              size={16}
              color="#000"
              style={{ marginLeft: 4 }}
            />
          </TouchableOpacity>
          <Text style={styles.addressText} numberOfLines={1}>
            {currentAddress}
          </Text>
        </View>

        <View style={styles.tabsContainer}>
          {renderTab(
            "pure_natural",
            require("../assets/images/pure-natural-active.png"),
            require("../assets/images/pure-natural-inactive.png"),
          )}
          {renderTab(
            "nutri_kitchen",
            require("../assets/images/nutri-kitchen-active.png"),
            require("../assets/images/nutri-kitchen-inactive.png"),
          )}
          {renderTab(
            "craft_village",
            require("../assets/images/craft-village-inactive.png"), // சரிபார்க்கப்பட்டது
            require("../assets/images/craft-village-inactive.png"),
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { paddingTop: Platform.OS === "android" ? 40 : 0 },
  topContainer: { paddingHorizontal: 16, paddingTop: 10 },
  locationWrapper: { marginBottom: 16 },
  locationTitleRow: { flexDirection: "row", alignItems: "center" },
  locationTitle: { fontSize: 18, fontWeight: "700", color: "#111827" },
  addressText: { fontSize: 13, color: "#4B5563", marginTop: 4 },
  tabsContainer: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 0 },
  tab: { flex: 1, height: 55, marginHorizontal: 4 },
  activeTab: { justifyContent: "center", alignItems: "center", borderTopLeftRadius: 16, borderTopRightRadius: 16, zIndex: 1 },
  inactiveTabContainer: { zIndex: 2 },
  gradientBorderWrapper: { flex: 1, paddingTop: 1.5, paddingHorizontal: 1.5, borderTopLeftRadius: 16, borderTopRightRadius: 16, borderBottomLeftRadius: 16, borderBottomRightRadius: 16 },
  inactiveInner: { flex: 1, backgroundColor: "#FFFFFF", borderTopLeftRadius: 14.5, borderTopRightRadius: 14.5, borderBottomLeftRadius: 14.5, borderBottomRightRadius: 14.5, justifyContent: "center", alignItems: "center" },
  tabImage: { width: "80%", height: 35 },
  curveContainer: { position: "absolute", bottom: 0, width: 20, height: 20, overflow: "hidden" },
  curveChild: { position: "absolute", top: -20, width: 40, height: 40, borderRadius: 20 },
});