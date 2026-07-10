import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import { useTranslation } from "react-i18next";
import { useAppStore } from "../store/store";
import "../i18n";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../store/languageSlice";

export default function LanguageScreen({ navigation }) {
  const { t: translate, i18n } = useTranslation();
  const dispatch = useDispatch();

  const globalLanguage = useSelector((state) => state.language.language);

  // Local state for radio button selection before confirming
  const [selectedLang, setSelectedLang] = useState(globalLanguage);

  const handleLanguageSelect = (lang) => {
    setSelectedLang(lang);
    i18n.changeLanguage(lang);
  };

  const handleConfirm = () => {
    dispatch(setLanguage(selectedLang));

    // 3. Adutha screen-ilekku (Onboarding) pokunnu
    navigation.navigate("Onboarding");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Top Chat Bubble Icons (Dummy UI for now to match design) */}
        <View style={styles.iconContainer}>
          <Image
            source={require("../assets/images/lang.webp")}
            style={{ width: 150, height: 135 }}
            accessible={true}
            accessibilityLabel="மொழியைத் தேர்ந்தெடுக்கவும் | Choose your Language"
          />
        </View>

        {/* Headings */}
        <Text style={styles.title}>{translate("choose_language")}</Text>
        <Text style={styles.subtitle}>{translate("tip_change_later")}</Text>

        {/* Language Options */}
        <TouchableOpacity
          style={[
            styles.optionBox,
            selectedLang === "ta" && styles.optionBoxSelected,
          ]}
          onPress={() => handleLanguageSelect("ta")}
          accessible={true}
          accessibilityRole="radio"
          accessibilityState={{ selected: selectedLang === "ta" }}
          accessibilityLabel="தமிழ் மொழி"
          accessibilityHint="இதை அழுத்தினால் செயலியின் மொழி தமிழாக மாறும்"
        >
          <View style={styles.langIconBox}>
            <Text style={styles.langIconText}>அ</Text>
          </View>
          <Text style={styles.optionText}>தமிழ்</Text>
          <View style={styles.radioOuter}>
            {selectedLang === "ta" && <View style={styles.radioInner} />}
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.optionBox,
            selectedLang === "en" && styles.optionBoxSelected,
          ]}
          onPress={() => handleLanguageSelect("en")}
          accessible={true}
          accessibilityRole="radio"
          accessibilityState={{ selected: selectedLang === "en" }}
          accessibilityLabel="English Language"
          accessibilityHint="By clicking this your application language change to English"
        >
          <View style={styles.langIconBox}>
            <Text style={styles.langIconText}>A</Text>
          </View>
          <Text style={styles.optionText}>English</Text>
          <View style={styles.radioOuter}>
            {selectedLang === "en" && <View style={styles.radioInner} />}
          </View>
        </TouchableOpacity>
      </View>

      {/* Confirm Button */}
      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
        <Text style={styles.confirmButtonText}>{translate("confirm")}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
  content: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  iconContainer: {
    flexDirection: "row",
    marginBottom: 40,
    position: "relative",
    height: 150,
    width: 150,
    justifyContent: "center",
  },
  bubble: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  bubbleOrange: {
    backgroundColor: "#FFDCCB",
    left: 10,
    top: 0,
    zIndex: 1,
  },
  bubbleGreen: {
    backgroundColor: "#A7F3D0",
    right: 10,
    top: 25,
    zIndex: 2,
  },
  bubbleText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 12,
    color: "#757575",
    marginBottom: 40,
  },
  optionBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    width: "100%",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  optionBoxSelected: {
    borderColor: "#00C853",
  },
  langIconBox: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: "#F0FDF4",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  langIconText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  optionText: {
    flex: 1,
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  radioOuter: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#E0E0E0",
    justifyContent: "center",
    alignItems: "center",
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#00C853",
  },
  confirmButton: {
    backgroundColor: "#FF2A5F", // Design-il ulla pinkish-red color
    marginHorizontal: 24,
    marginBottom: 30,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  confirmButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
