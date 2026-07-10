import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
} from "react-native";

export default function LoginScreen({ navigation }) {
  const [mobileNumber, setMobileNumber] = useState("");
  const { t } = useTranslation();

  const handleContinue = () => {
    if (mobileNumber.length === 10) {
      navigation.navigate("Otp", { phoneNumber: mobileNumber });
    } else {
      alert("Please enter a valid 10-digit mobile number");
    }
  };

  const handleNumberChange = (text) => {
    const numericValue = text.replace(/[^0-9]/g, "");
    setMobileNumber(numericValue);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/images/Page-6.webp")}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1, width: "100%" }}
        >
          {/* 1. Mela irukkura empty space-kaga intha View (Ithu thaan form-ah keela thallum) */}
          <View style={{ flex: 1 }} />

          {/* 2. Bottom Form Container */}
          <View style={styles.formContainer}>
            <Text style={styles.title}>
              இயற்கையால் இணைவோம்{"\n"}நஞ்சில்லா உலகை அமைப்போம்
            </Text>
            <Text style={styles.subtitle}>{t("loginOrSignup")}</Text>

            {/* Input Field */}
            <View style={styles.inputContainer}>
              <Text style={styles.countryCode}>+91</Text>
              <TextInput
                style={styles.input}
                placeholder="Mobile Number"
                keyboardType="number-pad"
                maxLength={10}
                value={mobileNumber}
                onChangeText={handleNumberChange}
                returnKeyType="done"
              />
            </View>

            {/* Continue Button */}
            <TouchableOpacity
              style={[
                styles.button,
                mobileNumber.length === 10
                  ? styles.buttonActive
                  : styles.buttonInactive,
              ]}
              onPress={handleContinue}
              disabled={mobileNumber.length !== 10}
            >
              <Text style={styles.buttonText}>{t("continue")}</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FAFAFA" },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  formContainer: {
    // 3. flex: 1 and marginTop: '70%'-ah remove pannitom
    paddingHorizontal: 24,
    paddingBottom: 40, // Keyboard illatha pothu bottom-la konjam space irukka
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.8)", // (Optional) Text padikka theliva irukka light background tharen, thevai illana eduthudunga
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#000",
    marginBottom: 24,
    lineHeight: 30,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 8,
    paddingHorizontal: 16,
    height: 50,
    marginBottom: 24,
    backgroundColor: "#FFF",
  },
  countryCode: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginRight: 10,
  },
  input: { flex: 1, fontSize: 16, color: "#000" },
  button: {
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonActive: { backgroundColor: "#44dd96" },
  buttonInactive: { backgroundColor: "#a7dabe" },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" }, // Button text color black mathiruken design match aaga
});
