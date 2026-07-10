import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Keyboard,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";

export default function OtpScreen({ route, navigation }) {
  const { phoneNumber } = route.params;

  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(60); // 60s timer state
  const [isValidated, setIsValidated] = useState(false); // Box color change panna state
  const inputs = useRef([]);

  // --- TIMER EFFECT ---
  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }
    return () => clearInterval(interval); // Cleanup function
  }, [timer]);

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    setIsValidated(false); // Pudhusa type panna green-ah normal grey ku mathida

    // Adutha box-ku auto-focus panna
    if (text && index < 3) {
      inputs.current[index + 1].focus();
    }

    // 4 digits-um enter pannathum automatic-ah verify panna
    if (index === 3 && text) {
      Keyboard.dismiss();
      handleVerify(newOtp.join(""));
    }
  };

  const handleVerify = async (enteredOtp) => {
    // Dummy Validation: '1234' enter panna correct nu eduthukkom
    if (enteredOtp === "1234") {
      setIsValidated(true); // 1. Border-ah Green aaka state true pandrom

      // 2. Oru 1 second wait panni thaan Home-ku povom (Appo thaan user green color-ah paka mudiyum)
      // OtpScreen.jsx la ulla setTimeout kulla:
      setTimeout(async () => {
        try {
          const currentDate = new Date();
          const expiryDate = currentDate.getTime() + 30 * 24 * 60 * 60 * 1000;

          await AsyncStorage.setItem("userToken", "dummy_token_123");
          await AsyncStorage.setItem("loginExpiry", expiryDate.toString());

          // Home-ku bathila Location screen-ku phone number oda anuppurom
          navigation.reset({
            index: 0,
            routes: [{ name: "Location", params: { phoneNumber } }],
          });
        } catch (e) {
          console.log("Storage Error: ", e);
        }
      }, 1000);
    } else {
      alert("Invalid OTP! Please enter 1234 for testing.");
      setOtp(["", "", "", ""]); // Thappana OTP na box clear pannidum
      inputs.current[0].focus();
    }
  };

  const handleResend = () => {
    if (timer === 0) {
      setTimer(60); // Timer thirumba 60 la irunthu start aagum
      setOtp(["", "", "", ""]);
      setIsValidated(false);
      // Dummy alert for resend SMS
      alert(`A new OTP has been sent to ${phoneNumber}`);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>OTP Verification</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.instruction}>
          You have sent a verification code to
        </Text>
        <Text style={styles.phoneNumber}>+91-{phoneNumber}</Text>

        {/* 4 OTP Input Boxes */}
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              style={[
                styles.otpBox,
                { borderColor: isValidated ? "#03B75E" : "#D1D5DB" },
              ]}
              keyboardType="number-pad"
              maxLength={1}
              value={digit}
              onChangeText={(text) => handleChange(text, index)}
              ref={(input) => (inputs.current[index] = input)}
            />
          ))}
        </View>

        {/* Validation Text */}
        {isValidated ? (
          <Text style={styles.successMessage}>OTP Verified Successfully!</Text>
        ) : (
          <Text style={[styles.successMessage, { color: "transparent" }]}>
            -
          </Text> // Space preserve panna
        )}

        {/* Resend Timer Section */}
        <View style={styles.resendContainer}>
          <Text style={styles.resendText}>Didn't get the OTP? </Text>
          <TouchableOpacity onPress={handleResend} disabled={timer > 0}>
            <Text
              style={[
                styles.resendLink,
                { color: timer === 0 ? "#000" : "#A3A3A3" },
              ]}
            >
              {timer > 0 ? `Resend SMS in ${timer}s` : "Resend SMS"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FAFAFA" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 60,
    paddingBottom: 10,
  },
  backButton: { marginRight: 16 },
  headerTitle: { fontSize: 18, fontWeight: "bold", color: "#000" },
  content: {
    flex: 0.5,
    paddingHorizontal: 24,
    paddingTop: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  instruction: { fontSize: 14, color: "#666", marginBottom: 8 },
  phoneNumber: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 40,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 20,
  },
  otpBox: {
    width: 50,
    height: 50,
    borderWidth: 1.5,
    borderRadius: 8,
    fontSize: 24,
    textAlign: "center",
    backgroundColor: "#FFF",
    color: "#000",
  },
  successMessage: {
    color: "#03B75E",
    fontSize: 14,
    marginBottom: 20,
    fontWeight: "500",
  },
  resendContainer: { flexDirection: "row" },
  resendText: { color: "#666", fontSize: 14 },
  resendLink: { fontSize: 14, fontWeight: "bold" },
});
