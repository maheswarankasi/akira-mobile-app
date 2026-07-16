import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  Share,
  Platform,
  SafeAreaView,
} from "react-native";
import { Ionicons, MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useTranslation } from "react-i18next"; // Global Translation Hook

// உங்களது உண்மையான டேட்டா ஃபைல்
import { products } from "../data/data";
import ScheduleDeliveryModal from "../components/ScheduleDeliveryModal";

const { width } = Dimensions.get("window");

// --- UI-ல் உள்ள நிலையான வார்த்தைகளுக்கான Translations ---
const TRANSLATIONS = {
  en: {
    productInfo: "Product info",
    aiNutriInfo: "AI Nutri info",
    scheduleDelivery: "Schedule Delivery",
    mrp: "MRP",
    add: "ADD",
    freeDelivery: "Free Delivery",
    cartItems: "Cart 4 items",
    topProducts: "Top products in this category",
    notFound: "Product not found!",
    goBack: "Go Back",
    grownBy: "Grown By:",
    verifiedFarmer: "Verified Farmer",
    fssai: "FSSAI Number:",
    address: "Address:",
    soilAudit: "Soil Audit:",
    inspection: "Recent Inspection:",
    naturalInputs: "Natural Inputs:",
    cookingRatio: "Cooking Ratio:",
    cookingTime: "Cooking/Prep Time:",
    bestForUsage: "Best For:",
    storageTips: "Storage Tips:",
    benefits: "Benefits",
    bestFor: "Best For",
    grandmaWisdom: "Grandma knew it for...",
    siddhaSays: "What Siddha says",
    nutritionTitle: "Nutritional Profile",
    farmerTitle: "Farmer & Verification",
    usageTitle: "Usage & Storage",
  },
  ta: {
    productInfo: "பொருள் விவரம்",
    aiNutriInfo: "AI ஊட்டச்சத்து",
    scheduleDelivery: "டெலிவரியை திட்டமிடு",
    mrp: "MRP",
    add: "சேர்",
    freeDelivery: "இலவச டெலிவரி",
    cartItems: "கார்ட் 4 பொருட்கள்",
    topProducts: "இந்த வகையின் சிறந்த பொருட்கள்",
    notFound: "பொருள் கிடைக்கவில்லை!",
    goBack: "பின்திரும்பு",
    grownBy: "விவசாயி:",
    verifiedFarmer: "உறுதிசெய்யப்பட்ட விவசாயி",
    fssai: "FSSAI எண்:",
    address: "முகவரி:",
    soilAudit: "மண் பரிசோதனை:",
    inspection: "சமீபத்திய ஆய்வு:",
    naturalInputs: "இயற்கை இடுபொருட்கள்:",
    cookingRatio: "சமைக்கும் அளவு:",
    cookingTime: "சமைக்கும் நேரம்:",
    bestForUsage: "சிறந்தது:",
    storageTips: "சேமிப்பு முறை:",
    benefits: "நன்மைகள்",
    bestFor: "பொருத்தமானது",
    grandmaWisdom: "பாட்டி வைத்தியம்...",
    siddhaSays: "சித்த மருத்துவம் கூறுவது",
    nutritionTitle: "ஊட்டச்சத்து விவரம்",
    farmerTitle: "விவசாயி & சான்றிதழ்",
    usageTitle: "பயன்பாடு & சேமிப்பு",
  },
};

// String ஆக வரும் Badges-ஐ Icon மற்றும் Text ஆக மாற்ற உதவும் Map
const BADGE_MAP = {
  "100_natural": {
    icon: "leaf",
    title: { en: "100%\nNatural", ta: "100%\nஇயற்கை" },
  },
  farm_fresh: {
    icon: "tractor",
    title: { en: "Farm\nFresh", ta: "பண்ணை\nபுதியது" },
  },
  fast_delivery: {
    icon: "truck-fast",
    title: { en: "Fast\nDelivery", ta: "விரைவான\nடெலிவரி" },
  },
  no_cold_storage: {
    icon: "snowflake",
    title: { en: "No Cold\nStorage", ta: "குளிர்சாதன\nகிடங்கு இல்லை" },
  },
};

export default function ProductDetailsScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  // 1. Global Language State (useTranslation மூலம்)
  const { i18n } = useTranslation();
  const lang = i18n.language?.includes("ta") ? "ta" : "en";
  const t = TRANSLATIONS[lang];

  // 2. Navigation-ல் இருந்து வரும் Product ID & Data Fetch
  const { productId, initialTab } = route.params || {};
  const product = products.find((p) => p.id === productId);

  // --- States ---
  const [activeImage, setActiveImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(0);
  //  const { productId, initialTab } = route.params || {};
  const [activeTab, setActiveTab] = useState(initialTab || "product_info");
  const [cartQuantity, setCartQuantity] = useState(1);
  const [expandedSection, setExpandedSection] = useState([
    "nutritional",
    "farmer",
    "usage",
  ]);
  const [expandedAiSection, setExpandedAiSection] = useState([
    "benefits",
    "bestfor",
    "grandma",
  ]);
  const [isScheduleModalVisible, setScheduleModalVisible] = useState(false);

  // --- Data Extraction Helper ---
  const getLocalText = (textObj) => {
    if (!textObj) return "";
    if (typeof textObj === "string") return textObj;
    return textObj[lang] || textObj.en || "";
  };

  if (!product) {
    return (
      <View style={[styles.errorContainer, { backgroundColor: "#F9FAFB" }]}>
        <Text style={styles.errorText}>{t.notFound}</Text>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backBtn}
        >
          <Text style={{ color: "#FFF" }}>{t.goBack}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const productName = getLocalText(product.name);
  const productSubtitle = getLocalText(product.subtitle);
  const productImages = product.images?.length > 0 ? product.images : [];
  const variants = product.variants || [];
  const tags = product.tags || [];
  const bottomBadges = product.badges || [];

  const relatedProducts = products
    .filter((p) => p.id !== productId && p.categoryId === product.categoryId)
    .slice(0, 3);
  const displayRelatedProducts =
    relatedProducts.length > 0
      ? relatedProducts
      : products.filter((p) => p.id !== productId).slice(0, 3);

  const isTa = lang === "ta";
  const dynamicStyles = {
    productName: { fontSize: isTa ? 18 : 20, lineHeight: isTa ? 28 : 24 },
    tabText: { fontSize: isTa ? 12 : 14 },
    scheduleText: { fontSize: isTa ? 14 : 15 },
  };

  const handleScroll = (event) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    setActiveImage(Math.round(index));
  };

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Check out ${productName} on Pure & Natural!`,
      });
    } catch (error) {}
  };

  const renderAccordion = (
    title,
    id,
    currentExpanded,
    setExpanded,
    children,
    icon = null,
  ) => {
    // Array ஆக இருந்தால் அது உள்ளே இருக்கிறதா என்று செக் செய்கிறோம்
    const isExpanded = Array.isArray(currentExpanded)
      ? currentExpanded.includes(id)
      : currentExpanded === id;

    const handlePress = () => {
      if (Array.isArray(currentExpanded)) {
        if (isExpanded) {
          // ஓபனில் இருந்தால் க்ளோஸ் செய்ய (Array-ல் இருந்து நீக்க)
          setExpanded(currentExpanded.filter((item) => item !== id));
        } else {
          // க்ளோஸில் இருந்தால் ஓபன் செய்ய (Array-ல் சேர்க்க)
          setExpanded([...currentExpanded, id]);
        }
      } else {
        setExpanded(isExpanded ? null : id);
      }
    };

    return (
      <View style={styles.accordionContainer}>
        <TouchableOpacity
          style={styles.accordionHeader}
          onPress={handlePress}
          activeOpacity={0.7}
        >
          <View style={styles.accordionTitleRow}>
            {icon && (
              <Ionicons
                name={icon}
                size={18}
                color="#058A46"
                style={{ marginRight: 8 }}
              />
            )}
            <Text
              style={[
                styles.accordionTitle,
                isTa && { fontSize: 13, lineHeight: 20 },
              ]}
            >
              {title}
            </Text>
          </View>
          <Ionicons
            name={isExpanded ? "chevron-up" : "chevron-down"}
            size={20}
            color="#6B7280"
          />
        </TouchableOpacity>
        {isExpanded && <View style={styles.accordionContent}>{children}</View>}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.floatingHeader}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={24} color="#111827" />
        </TouchableOpacity>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="search-outline" size={22} color="#111827" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} onPress={handleShare}>
            <Ionicons name="arrow-redo-outline" size={22} color="#111827" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.carouselContainer}>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            scrollEventThrottle={16}
          >
            {productImages.map((img, index) => (
              <Image
                key={index}
                source={{ uri: img }}
                style={styles.productImage}
                resizeMode="contain"
              />
            ))}
          </ScrollView>
          <View style={styles.pagination}>
            {productImages.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.dot,
                  activeImage === index ? styles.activeDot : null,
                ]}
              />
            ))}
          </View>
        </View>

        <View style={styles.detailsContainer}>
          <Text style={[styles.productName, dynamicStyles.productName]}>
            {productName}
          </Text>
          {productSubtitle ? (
            <Text style={styles.productSubtitle}>{productSubtitle}</Text>
          ) : null}

          {/* Tags (Mapped to Badges UI) */}
          {tags.length > 0 && (
            <View style={styles.badgesRow}>
              {tags.map((tag, idx) => (
                <View key={idx} style={styles.badgeItem}>
                  <MaterialCommunityIcons
                    name="check-decagram"
                    size={12}
                    color="#EF4444"
                  />
                  <Text style={styles.badgeText}>{getLocalText(tag)}</Text>
                </View>
              ))}
            </View>
          )}

          {/* Pricing & Variants */}
          {variants.length > 0 && (
            <>
              <View style={styles.priceRow}>
                <Text style={styles.sellingPrice}>
                  ₹{variants[selectedVariant].price}
                </Text>
                {variants[selectedVariant].discountPercent ? (
                  <View style={styles.discountTag}>
                    <MaterialCommunityIcons
                      name="tag"
                      size={12}
                      color="#EF4444"
                    />
                    <Text style={styles.discountText}>
                      {variants[selectedVariant].discountPercent}% OFF
                    </Text>
                  </View>
                ) : null}
              </View>
              {variants[selectedVariant].mrp ? (
                <Text style={styles.mrpText}>
                  {t.mrp} ₹{variants[selectedVariant].mrp}
                </Text>
              ) : null}

              <View style={styles.variantsRow}>
                {variants.map((variant, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.variantBox,
                      selectedVariant === index && styles.activeVariantBox,
                    ]}
                    onPress={() => setSelectedVariant(index)}
                  >
                    <View style={styles.variantTop}>
                      <Text
                        style={[
                          styles.variantWeight,
                          selectedVariant === index && styles.activeVariantText,
                        ]}
                      >
                        {getLocalText(variant.weight)}
                      </Text>
                      {variant.discountPercent ? (
                        <Text style={styles.variantBoxDiscount}>
                          {variant.discountPercent}% OFF
                        </Text>
                      ) : null}
                    </View>
                    <View style={styles.variantMiddle}>
                      <Text
                        style={[
                          styles.variantPrice,
                          selectedVariant === index && styles.activeVariantText,
                        ]}
                      >
                        ₹{variant.price}
                      </Text>
                      {variant.mrp ? (
                        <Text style={styles.variantMrp}>
                          {t.mrp} ₹{variant.mrp}
                        </Text>
                      ) : null}
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </>
          )}

          {/* Schedule Button */}
          <TouchableOpacity
            style={styles.scheduleButton}
            onPress={() => setScheduleModalVisible(true)}
          >
            <Ionicons name="calendar-outline" size={18} color="#4B5563" />
            <Text style={[styles.scheduleText, dynamicStyles.scheduleText]}>
              {t.scheduleDelivery}
            </Text>
          </TouchableOpacity>

          {/* இதை உங்கள் Component-ன் கடைசியில் (</SafeAreaView> க்கு முன்பு) வைக்கவும் */}
          <ScheduleDeliveryModal
            visible={isScheduleModalVisible}
            onClose={() => setScheduleModalVisible(false)}
            onSuccess={(data) => {
              console.log("Schedule Saved:", data);
              // இங்கே வேண்டுமானால் ஒரு சின்ன Toast/Alert காட்டலாம்
            }}
          />

          {/* Bottom Features (Mapped from badges array strings) */}
          {bottomBadges.length > 0 && (
            <View style={styles.featuresRow}>
              {bottomBadges.map((badgeKey, idx) => {
                const mapped = BADGE_MAP[badgeKey];
                if (!mapped) return null;
                return (
                  <View key={idx} style={styles.featureItem}>
                    <MaterialCommunityIcons
                      name={mapped.icon}
                      size={24}
                      color="#058A46"
                    />
                    <Text style={styles.featureItemText}>
                      {getLocalText(mapped.title)}
                    </Text>
                  </View>
                );
              })}
            </View>
          )}

          {/* Tabs */}
          <View style={styles.tabsContainer}>
            <TouchableOpacity
              style={[
                styles.tabButton,
                activeTab === "product_info" && styles.activeTab,
              ]}
              onPress={() => setActiveTab("product_info")}
            >
              <Feather
                name="info"
                size={16}
                color={activeTab === "product_info" ? "#058A46" : "#6B7280"}
              />
              <Text
                style={[
                  styles.tabText,
                  dynamicStyles.tabText,
                  activeTab === "product_info" && styles.activeTabText,
                ]}
              >
                {t.productInfo}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.tabButton,
                activeTab === "ai_nutri_info" && styles.activeTab,
              ]}
              onPress={() => setActiveTab("ai_nutri_info")}
            >
              <MaterialCommunityIcons
                name="magic-staff"
                size={16}
                color={activeTab === "ai_nutri_info" ? "#058A46" : "#6B7280"}
              />
              <Text
                style={[
                  styles.tabText,
                  dynamicStyles.tabText,
                  activeTab === "ai_nutri_info" && styles.activeTabText,
                ]}
              >
                {t.aiNutriInfo}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Tab Contents */}
          <View style={styles.tabContentArea}>
            {/* 1. PRODUCT INFO */}
            {activeTab === "product_info" && (
              <View>
                {/* Nutritional Profile (from aiNutriInfo inside JSON) */}
                {product.aiNutriInfo?.nutritionalProfile &&
                  renderAccordion(
                    t.nutritionTitle,
                    "nutritional",
                    expandedSection,
                    setExpandedSection,
                    <View style={styles.tableRowContainer}>
                      {product.aiNutriInfo.nutritionalProfile.map(
                        (item, idx) => (
                          <View key={idx} style={styles.tableRow}>
                            <Text style={styles.tableKey}>
                              {getLocalText(item.aspect)}
                            </Text>
                            <Text style={styles.tableValue}>
                              {getLocalText(item.value)}
                            </Text>
                          </View>
                        ),
                      )}
                    </View>,
                  )}

                {/* Farmer & Verification */}
                {product.farmerVerification &&
                  renderAccordion(
                    t.farmerTitle,
                    "farmer",
                    expandedSection,
                    setExpandedSection,
                    <View>
                      <Text style={styles.infoText}>
                        <Text style={styles.boldText}>{t.grownBy}</Text>{" "}
                        {getLocalText(product.farmerVerification.grownBy)}{" "}
                        {product.farmerVerification.isVerified && (
                          <Text style={styles.verifiedTag}>
                            {" "}
                            ✓ {t.verifiedFarmer}
                          </Text>
                        )}
                      </Text>
                      {product.farmerVerification.fssai !== "N/A" && (
                        <Text style={styles.infoText}>
                          <Text style={styles.boldText}>{t.fssai}</Text>{" "}
                          {product.farmerVerification.fssai}
                        </Text>
                      )}
                      {product.farmerVerification.address && (
                        <Text style={styles.infoText}>
                          <Text style={styles.boldText}>{t.address}</Text>{" "}
                          {getLocalText(product.farmerVerification.address)}
                        </Text>
                      )}
                      {product.farmerVerification.soilAudit && (
                        <Text style={styles.infoText}>
                          <Text style={styles.boldText}>{t.soilAudit}</Text>{" "}
                          {getLocalText(product.farmerVerification.soilAudit)}
                        </Text>
                      )}
                      {product.farmerVerification.recentInspection && (
                        <Text style={styles.infoText}>
                          <Text style={styles.boldText}>{t.inspection}</Text>{" "}
                          {getLocalText(
                            product.farmerVerification.recentInspection,
                          )}
                        </Text>
                      )}
                      {product.farmerVerification.naturalInputs && (
                        <Text style={styles.infoText}>
                          <Text style={styles.boldText}>{t.naturalInputs}</Text>{" "}
                          {getLocalText(
                            product.farmerVerification.naturalInputs,
                          )}
                        </Text>
                      )}
                    </View>,
                  )}

                {/* Usage & Storage */}
                {product.usageAndStorage &&
                  renderAccordion(
                    t.usageTitle,
                    "usage",
                    expandedSection,
                    setExpandedSection,
                    <View>
                      {product.usageAndStorage.cookingRatio?.en !== "N/A" && (
                        <Text style={styles.infoText}>
                          <Text style={styles.boldText}>{t.cookingRatio}</Text>{" "}
                          {getLocalText(product.usageAndStorage.cookingRatio)}
                        </Text>
                      )}
                      {product.usageAndStorage.cookingTime && (
                        <Text style={styles.infoText}>
                          <Text style={styles.boldText}>{t.cookingTime}</Text>{" "}
                          {getLocalText(product.usageAndStorage.cookingTime)}
                        </Text>
                      )}
                      {product.usageAndStorage.bestFor && (
                        <Text style={styles.infoText}>
                          <Text style={styles.boldText}>{t.bestForUsage}</Text>{" "}
                          {getLocalText(product.usageAndStorage.bestFor)}
                        </Text>
                      )}
                      {product.usageAndStorage.storageTips && (
                        <Text style={styles.infoText}>
                          <Text style={styles.boldText}>{t.storageTips}</Text>{" "}
                          {getLocalText(product.usageAndStorage.storageTips)}
                        </Text>
                      )}
                    </View>,
                  )}
              </View>
            )}

            {/* 2. AI NUTRI INFO */}
            {activeTab === "ai_nutri_info" && (
              <View style={styles.aiNutriContainer}>
                {product.aiNutriInfo?.benefits &&
                  renderAccordion(
                    t.benefits,
                    "benefits",
                    expandedAiSection,
                    setExpandedAiSection,
                    <View>
                      {product.aiNutriInfo.benefits.map((b, idx) => (
                        <View key={idx}>
                          <View style={styles.bulletRow}>
                            <View style={styles.bulletDot} />
                            <Text style={styles.bulletTitle}>
                              {getLocalText(b.title)}
                            </Text>
                          </View>
                          <Text style={styles.bulletDesc}>
                            {getLocalText(b.desc)}
                          </Text>
                        </View>
                      ))}
                    </View>,
                    "leaf-outline",
                  )}

                {product.aiNutriInfo?.bestFor &&
                  renderAccordion(
                    t.bestFor,
                    "bestfor",
                    expandedAiSection,
                    setExpandedAiSection,
                    <View>
                      {product.aiNutriInfo.bestFor.map((b, idx) => (
                        <View key={idx}>
                          <View style={styles.bulletRow}>
                            <View style={styles.bulletDot} />
                            <Text style={styles.bulletTitle}>
                              {getLocalText(b.audience)}
                            </Text>
                          </View>
                          <Text style={styles.bulletDesc}>
                            {getLocalText(b.reason)}
                          </Text>
                        </View>
                      ))}
                    </View>,
                    "people-outline",
                  )}

                {product.aiNutriInfo?.grandmaWisdom &&
                  renderAccordion(
                    t.grandmaWisdom,
                    "grandma",
                    expandedAiSection,
                    setExpandedAiSection,
                    <View>
                      {product.aiNutriInfo.grandmaWisdom.map((b, idx) => (
                        <View key={idx}>
                          <View style={styles.bulletRow}>
                            <View style={styles.bulletDot} />
                            <Text style={styles.bulletTitle}>
                              {getLocalText(b.title)}
                            </Text>
                          </View>
                          <Text style={styles.bulletDesc}>
                            {getLocalText(b.desc)}
                          </Text>
                        </View>
                      ))}
                    </View>,
                    "shield-checkmark-outline",
                  )}

                {/* Siddha Card */}
                {product.aiNutriInfo?.siddhaReference && (
                  <View style={styles.siddhaCard}>
                    <View style={styles.siddhaHeader}>
                      {/* <Image source={require('../assets/siddha_icon.png')} style={styles.siddhaIcon} />  */}
                      <Text style={styles.siddhaTitle}>{t.siddhaSays}</Text>
                    </View>
                    <Text style={styles.siddhaSubtitle}>
                      {getLocalText(product.aiNutriInfo.siddhaReference.title)}
                    </Text>
                    <Text style={styles.siddhaDesc}>
                      "{getLocalText(product.aiNutriInfo.siddhaReference.desc)}"
                    </Text>
                  </View>
                )}
              </View>
            )}
          </View>

          {/* Related Products */}
          {displayRelatedProducts.length > 0 && (
            <View style={styles.relatedSection}>
              <Text style={[styles.relatedTitle, isTa && { fontSize: 14 }]}>
                {t.topProducts}
              </Text>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.relatedScroll}
              >
                {displayRelatedProducts.map((item) => (
                  <TouchableOpacity
                    key={item.id}
                    style={styles.relatedCard}
                    activeOpacity={0.9}
                    onPress={() =>
                      navigation.push("ProductDetailsScreen", {
                        productId: item.id,
                      })
                    }
                  >
                    <View style={styles.relatedImgBg}>
                      <Image
                        source={{
                          uri: item.images ? item.images[0] : item.imageURL,
                        }}
                        style={styles.relatedImage}
                        resizeMode="contain"
                      />
                      <TouchableOpacity style={styles.relatedAddBtn}>
                        <Text style={styles.relatedAddText}>{t.add}</Text>
                      </TouchableOpacity>
                    </View>
                    <Text style={styles.relatedWeight}>
                      {getLocalText(item.variants?.[0]?.weight) || "500g"}
                    </Text>
                    <Text
                      style={[
                        styles.relatedItemName,
                        isTa && { lineHeight: 18 },
                      ]}
                      numberOfLines={2}
                    >
                      {getLocalText(item.name)}
                    </Text>
                    <View style={styles.relatedPriceRow}>
                      <Text style={styles.relatedPrice}>
                        ₹{item.variants?.[0]?.price || 0}
                      </Text>
                      {item.variants?.[0]?.mrp && (
                        <Text style={styles.relatedMrp}>
                          ₹{item.variants[0].mrp}
                        </Text>
                      )}
                    </View>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          )}
        </View>
      </ScrollView>

      {/* Bottom Cart Section */}
      {/* <View style={styles.bottomFixedContainer}>
        <TouchableOpacity style={styles.cartBanner}>
          <View style={styles.cartBannerLeft}>
            <MaterialCommunityIcons
              name="truck-delivery-outline"
              size={20}
              color="#FFF"
            />
            <Text style={styles.cartBannerText}>{t.freeDelivery}</Text>
          </View>
          <View style={styles.cartBannerRight}>
            <Text style={styles.cartBannerItems}>{t.cartItems}</Text>
            <Ionicons name="chevron-forward" size={16} color="#FFF" />
          </View>
        </TouchableOpacity>

        <View style={styles.bottomActionRow}>
          <View>
            <View style={styles.priceRow}>
              <Text style={styles.bottomPrice}>
                ₹{variants[selectedVariant]?.price || 0}
              </Text>
              {variants[selectedVariant]?.discountPercent ? (
                <View style={styles.discountTag}>
                  <Text style={styles.discountText}>
                    {variants[selectedVariant].discountPercent}% OFF
                  </Text>
                </View>
              ) : null}
            </View>
            {variants[selectedVariant]?.mrp ? (
              <Text style={styles.mrpText}>
                {t.mrp} ₹{variants[selectedVariant].mrp}
              </Text>
            ) : null}
          </View>

          <View style={styles.quantitySelector}>
            <TouchableOpacity
              onPress={() => setCartQuantity(Math.max(1, cartQuantity - 1))}
              style={styles.qtyBtn}
            >
              <Text style={styles.qtyBtnText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.qtyText}>{cartQuantity}</Text>
            <TouchableOpacity
              onPress={() => setCartQuantity(cartQuantity + 1)}
              style={styles.qtyBtn}
            >
              <Text style={styles.qtyBtnText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  errorContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  errorText: { fontSize: 18, fontWeight: "bold", marginBottom: 16 },
  backBtn: {
    backgroundColor: "#058A46",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },

  safeArea: { flex: 1, backgroundColor: "#F9FAFB" },
  floatingHeader: {
    position: "absolute",
    top: Platform.OS === "ios" ? 50 : 40,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    zIndex: 10,
  },
  iconButton: {
    backgroundColor: "rgba(255,255,255,0.8)",
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  headerRight: { flexDirection: "row", gap: 12 },
  scrollContent: { paddingBottom: 140 },

  carouselContainer: { width, height: width, backgroundColor: "#FFF" },
  productImage: { width, height: width },
  pagination: {
    flexDirection: "row",
    position: "absolute",
    bottom: 16,
    alignSelf: "center",
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#D1D5DB",
    marginHorizontal: 4,
  },
  activeDot: { backgroundColor: "#111827", width: 20 },

  detailsContainer: { padding: 16, backgroundColor: "#F9FAFB" },
  productName: { fontWeight: "bold", color: "#111827" },
  productSubtitle: { fontSize: 14, color: "#6B7280", marginBottom: 12 },

  badgesRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 16,
  },
  badgeItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FEF2F2",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#FEE2E2",
  },
  badgeText: {
    fontSize: 10,
    color: "#EF4444",
    marginLeft: 4,
    fontWeight: "600",
  },

  priceRow: { flexDirection: "row", alignItems: "center" },
  sellingPrice: { fontSize: 24, fontWeight: "bold", color: "#111827" },
  bottomPrice: { fontSize: 20, fontWeight: "bold", color: "#111827" },
  discountTag: { flexDirection: "row", alignItems: "center", marginLeft: 8 },
  discountText: {
    fontSize: 12,
    color: "#EF4444",
    fontWeight: "bold",
    marginLeft: 2,
  },
  mrpText: {
    fontSize: 12,
    color: "#9CA3AF",
    textDecorationLine: "line-through",
    marginTop: 2,
  },

  variantsRow: { flexDirection: "row", gap: 12, marginTop: 16 },
  variantBox: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 8,
    padding: 12,
    backgroundColor: "#FFF",
  },
  activeVariantBox: { borderColor: "#058A46", backgroundColor: "#F0FDF4" },
  variantTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  variantWeight: { fontWeight: "bold", color: "#374151" },
  variantBoxDiscount: { fontSize: 10, color: "#EF4444", fontWeight: "bold" },
  variantMiddle: { flexDirection: "row", alignItems: "baseline", gap: 6 },
  variantPrice: { fontSize: 18, fontWeight: "bold", color: "#111827" },
  variantMrp: {
    fontSize: 12,
    color: "#9CA3AF",
    textDecorationLine: "line-through",
  },
  activeVariantText: { color: "#058A46" },

  scheduleButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 8,
    paddingVertical: 12,
    marginTop: 16,
    backgroundColor: "#FFF",
  },
  scheduleText: { marginLeft: 8, color: "#4B5563", fontWeight: "600" },

  featuresRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    paddingHorizontal: 8,
  },
  featureItem: { alignItems: "center" },
  featureItemText: {
    fontSize: 10,
    color: "#6B7280",
    textAlign: "center",
    marginTop: 4,
    lineHeight: 14,
  },

  tabsContainer: { flexDirection: "row", marginTop: 24, gap: 12 },
  tabButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  activeTab: { borderColor: "#058A46", backgroundColor: "#F0FDF4" },
  tabText: { marginLeft: 8, fontWeight: "600", color: "#6B7280" },
  activeTabText: { color: "#058A46" },

  tabContentArea: { marginTop: 16 },
  accordionContainer: {
    marginBottom: 12,
    backgroundColor: "#FFF",
    borderRadius: 8,
    overflow: "hidden",
  },
  accordionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  accordionTitleRow: { flexDirection: "row", alignItems: "center" },
  accordionTitle: { fontWeight: "bold", color: "#374151", fontSize: 15 },
  accordionContent: { paddingHorizontal: 16, paddingBottom: 16 },

  tableRowContainer: { gap: 12 },
  tableRow: { flexDirection: "row", justifyContent: "space-between" },
  tableKey: { color: "#6B7280", fontSize: 13 },
  tableValue: { color: "#111827", fontSize: 13, fontWeight: "500" },

  infoText: { color: "#4B5563", fontSize: 13, marginBottom: 8, lineHeight: 20 },
  verifiedTag: { color: "#3B82F6", fontWeight: "bold", fontSize: 12 },
  boldText: { fontWeight: "bold", color: "#111827" },

  aiNutriContainer: {
    backgroundColor: "#F0FDF4",
    borderRadius: 12,
    padding: 8,
  },
  bulletRow: { flexDirection: "row", alignItems: "center", marginTop: 12 },
  bulletDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#058A46",
    marginRight: 8,
  },
  bulletTitle: { fontWeight: "bold", color: "#111827", fontSize: 13 },
  bulletDesc: {
    color: "#6B7280",
    fontSize: 12,
    marginLeft: 14,
    marginTop: 4,
    marginBottom: 8,
  },

  siddhaCard: {
    backgroundColor: "#E0F2FE",
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
  },
  siddhaHeader: { flexDirection: "row", alignItems: "center", marginBottom: 8 },
  siddhaIcon: { width: 20, height: 20, marginRight: 8, borderRadius: 10 },
  siddhaTitle: { fontWeight: "bold", color: "#0369A1" },
  siddhaSubtitle: {
    fontWeight: "bold",
    color: "#0C4A6E",
    fontSize: 13,
    marginBottom: 4,
  },
  siddhaDesc: { color: "#0284C7", fontSize: 12, fontStyle: "italic" },

  relatedSection: { marginTop: 32 },
  relatedTitle: { fontWeight: "bold", color: "#111827", marginBottom: 16 },
  relatedScroll: { paddingRight: 16 },
  relatedCard: {
    width: 140,
    marginRight: 12,
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 8,
  },
  relatedImgBg: {
    backgroundColor: "#F3F4F6",
    borderRadius: 8,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginBottom: 8,
  },
  relatedImage: { width: "80%", height: "80%" },
  relatedAddBtn: {
    position: "absolute",
    bottom: -12,
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#058A46",
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 16,
  },
  relatedAddText: { color: "#058A46", fontWeight: "bold", fontSize: 12 },
  relatedWeight: { fontSize: 10, color: "#6B7280", marginTop: 16 },
  relatedItemName: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#111827",
    marginTop: 4,
    height: 34,
  },
  relatedPriceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
    gap: 4,
  },
  relatedPrice: { fontSize: 14, fontWeight: "bold", color: "#111827" },
  relatedMrp: {
    fontSize: 10,
    color: "#9CA3AF",
    textDecorationLine: "line-through",
  },

  bottomFixedContainer: { position: "absolute", bottom: 0, left: 0, right: 0 },
  cartBanner: {
    backgroundColor: "#058A46",
    marginHorizontal: 16,
    borderRadius: 8,
    padding: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    transform: [{ translateY: 10 }],
    zIndex: 2,
  },
  cartBannerLeft: { flexDirection: "row", alignItems: "center" },
  cartBannerText: { color: "#FFF", fontWeight: "bold", marginLeft: 8 },
  cartBannerRight: { flexDirection: "row", alignItems: "center" },
  cartBannerItems: { color: "#FFF", fontSize: 12, marginRight: 4 },
  bottomActionRow: {
    backgroundColor: "#FFF",
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: Platform.OS === "ios" ? 32 : 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    zIndex: 1,
  },
  quantitySelector: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FF204E",
    borderRadius: 8,
    overflow: "hidden",
  },
  qtyBtn: { paddingHorizontal: 16, paddingVertical: 12 },
  qtyBtnText: { color: "#FFF", fontSize: 18, fontWeight: "bold" },
  qtyText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    paddingHorizontal: 8,
  },
});
