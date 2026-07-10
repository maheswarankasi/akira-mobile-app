import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { Ionicons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next"; // 1. Hook import pandrom
import { useSelector } from "react-redux";

export default function LocationScreen({ route, navigation }) {
  const { phoneNumber } = route.params;
  const { t } = useTranslation(); // 2. Hook initialize pandrom

  const currentLang = useSelector((state) => state.language.language);

  const isTamil = currentLang === "ta";

  const [location, setLocation] = useState(null);
  // 3. Initial text-ah translate pandrom
  const [addressText, setAddressText] = useState(t("fetching_location"));
  const [loading, setLoading] = useState(true);
  const [addressObj, setAddressObj] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setAddressText(t("permission_denied")); // Translate pandrom
        setLoading(false);
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });

      let geocode = await Location.reverseGeocodeAsync({
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
      });

      if (geocode.length > 0) {
        const addr = geocode[0];
        setAddressObj(addr); // Puthusa add pandrom
        setAddressText(
          `${addr.name ? addr.name + ", " : ""}${addr.street ? addr.street + ", " : ""}${addr.city}, ${addr.region} ${addr.postalCode}`,
        );
      }
      setLoading(false);
    })();
  }, [t]); // Dependency array-la t add pandrom

  const handleConfirmLocation = () => {
    navigation.navigate("AddressDetails", {
      phoneNumber,
      locationData: location,
      addressText,
      addressObj, // Puthusa add pandrom
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.header, { paddingTop: isTamil ? 40 : 20 }]}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        {/* 4. Header title translation */}
        <Text style={[styles.headerTitle, { fontSize: isTamil ? 14 : 18 }]}>
          {t("select_location")}
        </Text>
      </View>

      <View style={styles.mapContainer}>
        {loading ? (
          <ActivityIndicator size="large" color="#0DB481" />
        ) : location ? (
          <MapView style={styles.map} initialRegion={location}>
            <Marker coordinate={location} title={t("current_location")} />
          </MapView>
        ) : (
          <Text>{t("map_unavailable")}</Text>
        )}
      </View>

      <View style={styles.addressCard}>
        <View style={styles.addressHeader}>
          <Ionicons name="location-outline" size={20} color="black" />
          {/* 5. Address Card Title translation */}
          <Text style={styles.cityText}>{t("current_location")}</Text>
        </View>
        <Text style={styles.fullAddressText}>{addressText}</Text>

        <TouchableOpacity
          style={styles.confirmButton}
          onPress={handleConfirmLocation}
          disabled={loading || !location}
        >
          {/* 6. Button text translation */}
          <Text style={styles.confirmButtonText}>{t("confirm_location")}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// Styles apdiye vechukkonga...
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FAFAFA" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 16,
    backgroundColor: "#FFF",
  },
  backButton: { marginRight: 16, padding: 5 },
  headerTitle: { fontSize: 18, fontWeight: "bold", color: "#000" },
  mapContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E5E7EB",
  },
  map: { width: "100%", height: "100%" },
  addressCard: {
    padding: 24,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  addressHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  cityText: { fontSize: 18, fontWeight: "bold", marginLeft: 8, color: "#000" },
  fullAddressText: {
    fontSize: 14,
    color: "#666",
    marginBottom: 24,
    lineHeight: 20,
  },
  confirmButton: {
    backgroundColor: "#0DB481",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  confirmButtonText: { color: "#FFF", fontSize: 16, fontWeight: "bold" },
});
