import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";

// முந்தைய செஷனில் உருவாக்கிய normalize ஃபங்ஷனை இம்போர்ட் செய்கிறோம்
import { normalize } from "../utils/responsive";

export default function AddressDetailsScreen({ route, navigation }) {
  const { phoneNumber, addressText, locationData, addressObj } = route.params;
  const { t, i18n } = useTranslation();

  // --- FORM STATES ---
  const [name, setName] = useState("");
  const [email, setEmail] = useState(""); // Email Optional
  const [houseNo, setHouseNo] = useState("");
  const [street, setStreet] = useState(addressObj?.street || "");
  const [locality, setLocality] = useState(addressObj?.city || "");
  const [activeLabel, setActiveLabel] = useState("lbl_home");

  // --- VALIDATION (TOUCHED) STATES ---
  // User antha box-ah touch pannitangala nu track panna
  const [touched, setTouched] = useState({
    name: false,
    houseNo: false,
    street: false,
    locality: false,
  });

  const labels = ["lbl_home", "lbl_work", "lbl_gym", "lbl_other"];

  // --- VALIDATION LOGIC ---
  const isNameValid = name.trim() !== "";
  const isHouseNoValid = houseNo.trim() !== "";
  const isStreetValid = street.trim() !== "";
  const isLocalityValid = locality.trim() !== "";

  // Ellam valid-ah iruntha thaan true aagum (Email optional athunala add pannala)
  const isFormValid =
    isNameValid && isHouseNoValid && isStreetValid && isLocalityValid;

  // Box-ah vittu veliya varum pothu trigger aagum
  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSaveAddress = async () => {
    const currentLang = i18n.language;

    const userProfile = {
      phoneNumber,
      email,
      label: activeLabel,
      coordinates: locationData,

      name: {
        en: currentLang === "en" ? name : name,
        ta: currentLang === "ta" ? name : name,
      },
      houseNo: {
        en: currentLang === "en" ? houseNo : houseNo,
        ta: currentLang === "ta" ? houseNo : houseNo,
      },
      street: {
        en: currentLang === "en" ? street : street,
        ta: currentLang === "ta" ? street : street,
      },
      locality: {
        en: currentLang === "en" ? locality : locality,
        ta: currentLang === "ta" ? locality : locality,
      },
      fullAddress: {
        en: currentLang === "en" ? addressText : addressText,
        ta: currentLang === "ta" ? addressText : addressText,
      },
    };

    try {
      await AsyncStorage.setItem("userProfile", JSON.stringify(userProfile));
      navigation.reset({ index: 0, routes: [{ name: "Home" }] });
    } catch (e) {
      console.log("Error saving address:", e);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={normalize(24)} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{t("add_address_details")}</Text>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.sectionTitle}>
            {t("receiver_details")}
            <Text style={{ color: "#FF2A5F" }}>*</Text>
          </Text>

          {/* NAME FIELD */}
          <View
            style={[
              styles.inputBox,
              touched.name && !isNameValid && styles.inputError,
            ]}
          >
            <TextInput
              style={styles.input}
              placeholder={t("name_placeholder")}
              value={name}
              onChangeText={setName}
              onBlur={() => handleBlur("name")} // Touch panni veliya vantha check pannum
            />
          </View>

          {/* PHONE FIELD (Read Only) */}
          <View style={styles.inputBox}>
            <TextInput
              style={styles.input}
              value={`+91    ${phoneNumber}`}
              editable={false}
              color="#666"
            />
          </View>

          {/* EMAIL FIELD (Optional - No Validation) */}
          <View style={styles.inputBox}>
            <TextInput
              style={styles.input}
              placeholder={t("email_placeholder")}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <Text style={styles.sectionTitle}>
            {t("address_label")}
            <Text style={{ color: "#FF2A5F" }}>*</Text>
          </Text>
          <View style={styles.labelContainer}>
            {labels.map((labelKey) => (
              <TouchableOpacity
                key={labelKey}
                style={[
                  styles.labelBadge,
                  activeLabel === labelKey && styles.labelBadgeActive,
                ]}
                onPress={() => setActiveLabel(labelKey)}
              >
                <Ionicons
                  name={
                    labelKey === "lbl_home"
                      ? "home-outline"
                      : labelKey === "lbl_work"
                        ? "briefcase-outline"
                        : "barbell-outline"
                  }
                  size={normalize(16)}
                  color={activeLabel === labelKey ? "#FFF" : "#666"}
                  style={{ marginRight: normalize(6) }}
                />
                <Text
                  style={[
                    styles.labelText,
                    activeLabel === labelKey && styles.labelTextActive,
                  ]}
                >
                  {t(labelKey)}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.sectionTitle}>
            {t("add_address")}
            <Text style={{ color: "#FF2A5F" }}>*</Text>
          </Text>

          {/* HOUSE NO FIELD */}
          <View
            style={[
              styles.inputBox,
              touched.houseNo && !isHouseNoValid && styles.inputError,
            ]}
          >
            <TextInput
              style={styles.input}
              placeholder={t("house_no_placeholder")}
              value={houseNo}
              onChangeText={setHouseNo}
              onBlur={() => handleBlur("houseNo")}
            />
          </View>

          {/* STREET FIELD */}
          <View
            style={[
              styles.inputBox,
              touched.street && !isStreetValid && styles.inputError,
            ]}
          >
            <TextInput
              style={styles.input}
              placeholder={t("street_placeholder")}
              value={street}
              onChangeText={setStreet}
              onBlur={() => handleBlur("street")}
            />
          </View>

          {/* LOCALITY FIELD */}
          <View
            style={[
              styles.inputBox,
              touched.locality && !isLocalityValid && styles.inputError,
            ]}
          >
            <TextInput
              style={styles.input}
              placeholder={t("locality")}
              value={locality}
              onChangeText={setLocality}
              onBlur={() => handleBlur("locality")}
            />
          </View>

          <View style={styles.locationSnippet}>
            <Text style={styles.snippetText}>{addressText}</Text>
            <View style={styles.mapThumb}>
              <Ionicons name="location" size={normalize(24)} color="#FF2A5F" />
            </View>
          </View>
        </ScrollView>

        {/* CONDITION LOGIC: isFormValid TRUE aana thaan button theriyum */}
        {isFormValid && (
          <View style={styles.bottomBar}>
            <TouchableOpacity
              style={styles.saveButton}
              onPress={handleSaveAddress}
            >
              <Text style={styles.saveButtonText}>{t("save_address")}</Text>
            </TouchableOpacity>
          </View>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FAFAFA" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: normalize(16),
    paddingTop: Platform.OS === "android" ? normalize(50) : normalize(20),
    paddingBottom: normalize(16),
    backgroundColor: "#FFF",
  },
  backButton: { padding: normalize(5), marginRight: normalize(15) },
  headerTitle: { fontSize: normalize(18), fontWeight: "bold", color: "#000" },
  scrollContent: { padding: normalize(24), paddingBottom: normalize(100) },
  sectionTitle: {
    fontSize: normalize(16),
    fontWeight: "bold",
    color: "#000",
    marginBottom: normalize(12),
    marginTop: normalize(10),
  },
  inputBox: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: normalize(10),
    paddingHorizontal: normalize(16),
    height: normalize(50),
    justifyContent: "center",
    marginBottom: normalize(12),
    backgroundColor: "#FFF",
  },
  inputError: {
    borderColor: "#EF4444",
    borderWidth: 1.5,
  },
  input: { fontSize: normalize(16), color: "#000" },
  labelContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: normalize(20),
  },
  labelBadge: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: normalize(8),
    paddingHorizontal: normalize(16),
    borderRadius: normalize(20),
    borderWidth: 1,
    borderColor: "#E5E7EB",
    marginRight: normalize(10),
    marginBottom: normalize(10),
    backgroundColor: "#FFF",
  },
  labelBadgeActive: { backgroundColor: "#0DB481", borderColor: "#0DB481" },
  labelText: { fontSize: normalize(14), color: "#666" },
  labelTextActive: { color: "#FFF", fontWeight: "bold" },
  locationSnippet: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: normalize(16),
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: normalize(10),
    marginTop: normalize(10),
  },
  snippetText: {
    flex: 1,
    fontSize: normalize(13),
    color: "#666",
    lineHeight: normalize(20),
    marginRight: normalize(10),
  },
  mapThumb: {
    width: normalize(50),
    height: normalize(50),
    backgroundColor: "#F3F4F6",
    borderRadius: normalize(8),
    justifyContent: "center",
    alignItems: "center",
  },
  bottomBar: {
    padding: normalize(24),
    backgroundColor: "#FAFAFA",
    borderTopWidth: 1,
    borderColor: "#E5E7EB",
  },
  saveButton: {
    backgroundColor: "#0DB481",
    paddingVertical: normalize(16),
    borderRadius: normalize(12),
    alignItems: "center",
  },
  saveButtonText: {
    color: "#FFF",
    fontSize: normalize(16),
    fontWeight: "bold",
  },
});
