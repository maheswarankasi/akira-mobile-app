import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import Swiper from "react-native-swiper";
import { useSelector } from "react-redux";

const { width } = Dimensions.get("window");

export default function OnboardingScreen({ navigation }) {
  const swiperRef = useRef(null);
  const { t } = useTranslation();

  const currentLang = useSelector((state) => state.language.language);

  const isTamil = currentLang === "ta";

  // Swiper-la next poga illa next screen (Login) poga
  const handleNext = (index) => {
    if (index === 0) {
      // 1st slide-la iruntha, 2nd slide-ku move pannu
      swiperRef.current.scrollBy(1);
    } else {
      // 2nd slide-la iruntha, Login screen-ku navigate pannu
      navigation.navigate("Login");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Swiper
        ref={swiperRef}
        loop={false}
        showsPagination={true}
        dot={<View style={styles.inactiveDot} />}
        activeDot={<View style={styles.activeDot} />}
        paginationStyle={styles.paginationStyle}
      >
        {/* ===================== SLIDE 1 (Page 4) ===================== */}
        <ImageBackground
          source={require("../assets/images/Page-4.webp")}
          style={styles.backgroundImage}
          resizeMode="cover"
        >
          <View style={styles.slide}>
            <View style={styles.textContainer1}>
              <Text style={styles.title}>{t("mentor_name")}</Text>
              <Text style={styles.subtitle}>{t("mentor_location")}</Text>

              <Text style={styles.highlightText}>{t("inspired_title")}</Text>
              <Text style={styles.description}>{t("inspired_desc1")}</Text>
              <Text style={styles.desc2}>{t("inspired_desc2")}</Text>
            </View>
            <View style={styles.bottomBar}>
              <TouchableOpacity
                style={styles.nextButton}
                onPress={() => handleNext(0)}
              >
                <Text style={styles.nextButtonText}>{t('next')}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>

        {/* ===================== SLIDE 2 (Page 5) ===================== */}
        <ImageBackground
          source={require("../assets/images/Page-5.webp")}
          style={styles.backgroundImage}
          resizeMode="cover"
        >
          <View style={styles.slide}>
            <View
              style={[
                styles.textContainer2,
                { paddingBottom: isTamil ? "38%" : "53%" },
              ]}
            >
              <Text
                style={[
                  styles.title,
                  {
                    color: "#2E7D32",
                    fontSize: isTamil ? 24 : 40,
                    lineHeight: isTamil ? 35 : 52,
                  },
                ]}
              >
                {t("eat_pure")}
              </Text>
              <Text
                style={[
                  styles.subtitle,
                  {
                    paddingHorizontal: 40,
                    fontSize: isTamil ? 11 : 18,
                    textAlign: "center",
                    lineHeight: isTamil ? 18 : 30,
                  },
                ]}
              >
                {t("bridge_gap")}
              </Text>

              <View style={isTamil ? styles.greenBoxTamil : styles.greenBox}>
                <Text
                  style={
                    isTamil ? styles.greenBoxTitleTamil : styles.greenBoxTitle
                  }
                >
                  {t("back_to_roots")}
                </Text>
                <Text
                  style={
                    isTamil ? styles.greenBoxDescTamil : styles.greenBoxDesc
                  }
                >
                  {t("roots_desc")}
                </Text>
              </View>
            </View>

            <View style={styles.bottomBar}>
              <TouchableOpacity
                style={styles.nextButton}
                onPress={() => handleNext(1)}
              >
                <Text style={styles.nextButtonText}>{t("next")}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </Swiper>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    height: "45%",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textContainer1: {
    flex: 1,
    paddingHorizontal: "24",
    paddingVertical: "",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: "40",
  },
  textContainer2: {
    flex: 1,
    paddingHorizontal: "12",
    paddingVertical: "",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    marginBottom: 20,
  },
  highlightText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 8,
    textAlign: "center",
  },
  description: {
    fontSize: 13,
    color: "#666",
    textAlign: "center",
    lineHeight: 20,
  },
  desc2: {
    paddingTop: 8,
    fontSize: 13,
    color: "#666",
    textAlign: "center",
    lineHeight: 20,
  },
  greenBox: {
    padding: 20,
    borderRadius: 16,
    width: "100%",
    marginTop: 10,
  },
  greenBoxTamil: {
    padding: 40,
    borderRadius: 16,
    width: "100%",
    marginTop: 0,
  },
  greenBoxTitle: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
    lineHeight: 24,
  },
  greenBoxTitleTamil: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    lineHeight: 20,
  },
  greenBoxDesc: {
    color: "#FFF",
    fontSize: 16,
    textAlign: "center",
    lineHeight: 24,
  },
  greenBoxDescTamil: {
    color: "#FFF",
    fontSize: 12,
    textAlign: "center",
    lineHeight: 16,
  },
  bottomBar: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingBottom: 40,
    width: "100%",
  },
  nextButton: {
    backgroundColor: "#FF2A5F",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
  },
  nextButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  inactiveDot: {
    backgroundColor: "#D3D3D3",
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#FF2A5F",
    width: 24,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  paginationStyle: {
    bottom: 50, // Dots-ah Next button-ku nera alignment pandrathuku
    justifyContent: "flex-start",
    left: 24,
  },
});
