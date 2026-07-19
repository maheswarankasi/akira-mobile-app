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
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { products } from "../data/data";
import ScheduleDeliveryModal from "../components/ScheduleDeliveryModal";
import { normalize } from "../utils/responsive";
import GlobalCartBanner from "../components/GlobalCartBanner";
import { addToCart, updateQuantity } from "../store/cartSlice";

const { width } = Dimensions.get("window");

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
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();

  // 1. முதலில் Product-ஐ கண்டுபிடிக்க வேண்டும் (முக்கியமான மாற்றம்)
  const { productId, initialTab } = route.params || {};
  const product = products.find((p) => p.id === productId);

  // 2. Global Language State
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.includes("ta") ? "ta" : "en";

  // 3. இப்போது useSelector சரியாக வேலை செய்யும்
  const cartItem = useSelector((state) =>
    state.cart.items.find((item) => item.product.id === product?.id),
  );
  const cartQuantity = cartItem ? cartItem.quantity : 0;
  const isScheduled = !!cartItem?.schedule;

  // --- Handlers ---
  const handleScheduleSuccess = (scheduleData) => {
    if (cartQuantity === 0) {
      dispatch(addToCart({ product, quantity: 1, schedule: scheduleData }));
    } else {
      dispatch(addToCart({ product, quantity: 0, schedule: scheduleData }));
    }
  };

  const handleAdd = () => {
    dispatch(addToCart({ product, quantity: 1 }));
  };

  const handleIncrement = () => {
    dispatch(updateQuantity({ productId: product.id, quantity: cartQuantity + 1 }));
  };

  const handleDecrement = () => {
    dispatch(updateQuantity({ productId: product.id, quantity: cartQuantity - 1 }));
  };

  // --- UI States ---
  const [activeImage, setActiveImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [activeTab, setActiveTab] = useState(initialTab || "product_info");
  const [expandedSection, setExpandedSection] = useState(["nutritional", "farmer", "usage"]);
  const [expandedAiSection, setExpandedAiSection] = useState(["benefits", "bestfor", "grandma"]);
  const [isScheduleModalVisible, setScheduleModalVisible] = useState(false);

  const getLocalText = (textObj) => {
    if (!textObj) return "";
    if (typeof textObj === "string") return textObj;
    return textObj[lang] || textObj.en || "";
  };

  if (!product) {
    return (
      <View style={[styles.errorContainer, { backgroundColor: "#F9FAFB" }]}>
        <Text style={styles.errorText}>{t("notFound")}</Text>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={{ color: "#FFF" }}>{t("goBack")}</Text>
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

  const relatedProducts = products.filter((p) => p.id !== productId && p.categoryId === product.categoryId).slice(0, 3);
  const displayRelatedProducts = relatedProducts.length > 0 ? relatedProducts : products.filter((p) => p.id !== productId).slice(0, 3);

  const isTa = lang === "ta";

  const dynamicStyles = {
    productName: {
      fontSize: normalize(isTa ? 18 : 20),
      lineHeight: normalize(isTa ? 28 : 24),
    },
    tabText: { fontSize: normalize(isTa ? 12 : 14) },
    scheduleText: { fontSize: normalize(isTa ? 14 : 15) },
  };

  const handleScroll = (event) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    setActiveImage(Math.round(index));
  };

  const handleShare = async () => {
    try {
      await Share.share({ message: `Check out ${productName} on Pure & Natural!` });
    } catch (error) {}
  };

  const renderAccordion = (title, id, currentExpanded, setExpanded, children, icon = null) => {
    const isExpanded = Array.isArray(currentExpanded) ? currentExpanded.includes(id) : currentExpanded === id;

    const handlePress = () => {
      if (Array.isArray(currentExpanded)) {
        if (isExpanded) {
          setExpanded(currentExpanded.filter((item) => item !== id));
        } else {
          setExpanded([...currentExpanded, id]);
        }
      } else {
        setExpanded(isExpanded ? null : id);
      }
    };

    return (
      <View style={styles.accordionContainer}>
        <TouchableOpacity style={styles.accordionHeader} onPress={handlePress} activeOpacity={0.7}>
          <View style={styles.accordionTitleRow}>
            {icon && (
              <Ionicons name={icon} size={normalize(18)} color="#058A46" style={{ marginRight: normalize(8) }} />
            )}
            <Text style={[styles.accordionTitle, isTa && { fontSize: normalize(13), lineHeight: normalize(20) }]}>
              {title}
            </Text>
          </View>
          <Ionicons name={isExpanded ? "chevron-up" : "chevron-down"} size={normalize(20)} color="#6B7280" />
        </TouchableOpacity>
        {isExpanded && <View style={styles.accordionContent}>{children}</View>}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.floatingHeader}>
        <TouchableOpacity style={styles.iconButton} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={normalize(24)} color="#111827" />
        </TouchableOpacity>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="search-outline" size={normalize(22)} color="#111827" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} onPress={handleShare}>
            <Ionicons name="arrow-redo-outline" size={normalize(22)} color="#111827" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.carouselContainer}>
          <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} onScroll={handleScroll} scrollEventThrottle={16}>
            {productImages.map((img, index) => (
              <Image key={index} source={{ uri: img }} style={styles.productImage} resizeMode="contain" />
            ))}
          </ScrollView>
          <View style={styles.pagination}>
            {productImages.map((_, index) => (
              <View key={index} style={[styles.dot, activeImage === index ? styles.activeDot : null]} />
            ))}
          </View>
        </View>

        <View style={styles.detailsContainer}>
          <Text style={[styles.productName, dynamicStyles.productName]}>{productName}</Text>
          {productSubtitle ? (
            <Text style={styles.productSubtitle}>{productSubtitle}</Text>
          ) : null}

          {tags.length > 0 && (
            <View style={styles.badgesRow}>
              {tags.map((tag, idx) => (
                <View key={idx} style={styles.badgeItem}>
                  <MaterialCommunityIcons name="check-decagram" size={normalize(12)} color="#EF4444" />
                  <Text style={styles.badgeText}>{getLocalText(tag)}</Text>
                </View>
              ))}
            </View>
          )}

          {variants.length > 0 && (
            <>
              <View style={styles.priceRow}>
                <Text style={styles.sellingPrice}>₹{variants[selectedVariant].price}</Text>
                {variants[selectedVariant].discountPercent ? (
                  <View style={styles.discountTag}>
                    <MaterialCommunityIcons name="tag" size={normalize(12)} color="#EF4444" />
                    <Text style={styles.discountText}>{variants[selectedVariant].discountPercent}% OFF</Text>
                  </View>
                ) : null}
              </View>
              {variants[selectedVariant].mrp ? (
                <Text style={styles.mrpText}>{t("mrp")} ₹{variants[selectedVariant].mrp}</Text>
              ) : null}

              <View style={styles.variantsRow}>
                {variants.map((variant, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[styles.variantBox, selectedVariant === index && styles.activeVariantBox]}
                    onPress={() => setSelectedVariant(index)}
                  >
                    <View style={styles.variantTop}>
                      <Text style={[styles.variantWeight, selectedVariant === index && styles.activeVariantText]}>
                        {getLocalText(variant.weight)}
                      </Text>
                      {variant.discountPercent ? (
                        <Text style={styles.variantBoxDiscount}>{variant.discountPercent}% OFF</Text>
                      ) : null}
                    </View>
                    <View style={styles.variantMiddle}>
                      <Text style={[styles.variantPrice, selectedVariant === index && styles.activeVariantText]}>
                        ₹{variant.price}
                      </Text>
                      {variant.mrp ? (
                        <Text style={styles.variantMrp}>{t("mrp")} ₹{variant.mrp}</Text>
                      ) : null}
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </>
          )}

          {!isScheduled && (
            <TouchableOpacity style={styles.scheduleButton} onPress={() => setScheduleModalVisible(true)}>
              <Ionicons name="calendar-outline" size={normalize(18)} color="#4B5563" />
              <Text style={[styles.scheduleText, dynamicStyles.scheduleText]}>{t("scheduleDelivery")}</Text>
            </TouchableOpacity>
          )}

          <ScheduleDeliveryModal
            visible={isScheduleModalVisible}
            onClose={() => setScheduleModalVisible(false)}
            onSuccess={handleScheduleSuccess}
          />

          {bottomBadges.length > 0 && (
            <View style={styles.featuresRow}>
              {bottomBadges.map((badgeKey, idx) => {
                const mapped = BADGE_MAP[badgeKey];
                if (!mapped) return null;
                return (
                  <View key={idx} style={styles.featureItem}>
                    <MaterialCommunityIcons name={mapped.icon} size={normalize(24)} color="#058A46" />
                    <Text style={styles.featureItemText}>{getLocalText(mapped.title)}</Text>
                  </View>
                );
              })}
            </View>
          )}

          <View style={styles.tabsContainer}>
            <TouchableOpacity
              style={[styles.tabButton, activeTab === "product_info" && styles.activeTab]}
              onPress={() => setActiveTab("product_info")}
            >
              <Feather name="info" size={normalize(16)} color={activeTab === "product_info" ? "#058A46" : "#6B7280"} />
              <Text style={[styles.tabText, dynamicStyles.tabText, activeTab === "product_info" && styles.activeTabText]}>
                {t("productInfo")}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tabButton, activeTab === "ai_nutri_info" && styles.activeTab]}
              onPress={() => setActiveTab("ai_nutri_info")}
            >
              <MaterialCommunityIcons name="magic-staff" size={normalize(16)} color={activeTab === "ai_nutri_info" ? "#058A46" : "#6B7280"} />
              <Text style={[styles.tabText, dynamicStyles.tabText, activeTab === "ai_nutri_info" && styles.activeTabText]}>
                {t("aiNutriInfo")}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.tabContentArea}>
            {activeTab === "product_info" && (
              <View>
                {product.aiNutriInfo?.nutritionalProfile &&
                  renderAccordion(
                    t("nutritionTitle"),
                    "nutritional",
                    expandedSection,
                    setExpandedSection,
                    <View style={styles.tableRowContainer}>
                      {product.aiNutriInfo.nutritionalProfile.map((item, idx) => (
                        <View key={idx} style={styles.tableRow}>
                          <Text style={styles.tableKey}>{getLocalText(item.aspect)}</Text>
                          <Text style={styles.tableValue}>{getLocalText(item.value)}</Text>
                        </View>
                      ))}
                    </View>
                  )}
                {product.farmerVerification &&
                  renderAccordion(
                    t("farmerTitle"),
                    "farmer",
                    expandedSection,
                    setExpandedSection,
                    <View>
                      <Text style={styles.infoText}>
                        <Text style={styles.boldText}>{t("grownBy")}</Text> {getLocalText(product.farmerVerification.grownBy)}{" "}
                        {product.farmerVerification.isVerified && (
                          <Text style={styles.verifiedTag}> ✓ {t("verifiedFarmer")}</Text>
                        )}
                      </Text>
                      {product.farmerVerification.fssai !== "N/A" && (
                        <Text style={styles.infoText}>
                          <Text style={styles.boldText}>{t("fssai")}</Text> {product.farmerVerification.fssai}
                        </Text>
                      )}
                      {product.farmerVerification.address && (
                        <Text style={styles.infoText}>
                          <Text style={styles.boldText}>{t("address")}</Text> {getLocalText(product.farmerVerification.address)}
                        </Text>
                      )}
                      {product.farmerVerification.soilAudit && (
                        <Text style={styles.infoText}>
                          <Text style={styles.boldText}>{t("soilAudit")}</Text> {getLocalText(product.farmerVerification.soilAudit)}
                        </Text>
                      )}
                      {product.farmerVerification.recentInspection && (
                        <Text style={styles.infoText}>
                          <Text style={styles.boldText}>{t("inspection")}</Text> {getLocalText(product.farmerVerification.recentInspection)}
                        </Text>
                      )}
                      {product.farmerVerification.naturalInputs && (
                        <Text style={styles.infoText}>
                          <Text style={styles.boldText}>{t("naturalInputs")}</Text> {getLocalText(product.farmerVerification.naturalInputs)}
                        </Text>
                      )}
                    </View>
                  )}
                {product.usageAndStorage &&
                  renderAccordion(
                    t("usageTitle"),
                    "usage",
                    expandedSection,
                    setExpandedSection,
                    <View>
                      {product.usageAndStorage.cookingRatio?.en !== "N/A" && (
                        <Text style={styles.infoText}>
                          <Text style={styles.boldText}>{t("cookingRatio")}</Text> {getLocalText(product.usageAndStorage.cookingRatio)}
                        </Text>
                      )}
                      {product.usageAndStorage.cookingTime && (
                        <Text style={styles.infoText}>
                          <Text style={styles.boldText}>{t("cookingTime")}</Text> {getLocalText(product.usageAndStorage.cookingTime)}
                        </Text>
                      )}
                      {product.usageAndStorage.bestFor && (
                        <Text style={styles.infoText}>
                          <Text style={styles.boldText}>{t("bestForUsage")}</Text> {getLocalText(product.usageAndStorage.bestFor)}
                        </Text>
                      )}
                      {product.usageAndStorage.storageTips && (
                        <Text style={styles.infoText}>
                          <Text style={styles.boldText}>{t("storageTips")}</Text> {getLocalText(product.usageAndStorage.storageTips)}
                        </Text>
                      )}
                    </View>
                  )}
              </View>
            )}

            {activeTab === "ai_nutri_info" && (
              <View style={styles.aiNutriContainer}>
                {product.aiNutriInfo?.benefits &&
                  renderAccordion(
                    t("benefits"),
                    "benefits",
                    expandedAiSection,
                    setExpandedAiSection,
                    <View>
                      {product.aiNutriInfo.benefits.map((b, idx) => (
                        <View key={idx}>
                          <View style={styles.bulletRow}>
                            <View style={styles.bulletDot} />
                            <Text style={styles.bulletTitle}>{getLocalText(b.title)}</Text>
                          </View>
                          <Text style={styles.bulletDesc}>{getLocalText(b.desc)}</Text>
                        </View>
                      ))}
                    </View>,
                    "leaf-outline"
                  )}
                {product.aiNutriInfo?.bestFor &&
                  renderAccordion(
                    t("bestFor"),
                    "bestfor",
                    expandedAiSection,
                    setExpandedAiSection,
                    <View>
                      {product.aiNutriInfo.bestFor.map((b, idx) => (
                        <View key={idx}>
                          <View style={styles.bulletRow}>
                            <View style={styles.bulletDot} />
                            <Text style={styles.bulletTitle}>{getLocalText(b.audience)}</Text>
                          </View>
                          <Text style={styles.bulletDesc}>{getLocalText(b.reason)}</Text>
                        </View>
                      ))}
                    </View>,
                    "people-outline"
                  )}
                {product.aiNutriInfo?.grandmaWisdom &&
                  renderAccordion(
                    t("grandmaWisdom"),
                    "grandma",
                    expandedAiSection,
                    setExpandedAiSection,
                    <View>
                      {product.aiNutriInfo.grandmaWisdom.map((b, idx) => (
                        <View key={idx}>
                          <View style={styles.bulletRow}>
                            <View style={styles.bulletDot} />
                            <Text style={styles.bulletTitle}>{getLocalText(b.title)}</Text>
                          </View>
                          <Text style={styles.bulletDesc}>{getLocalText(b.desc)}</Text>
                        </View>
                      ))}
                    </View>,
                    "shield-checkmark-outline"
                  )}
                {product.aiNutriInfo?.siddhaReference && (
                  <View style={styles.siddhaCard}>
                    <View style={styles.siddhaHeader}>
                      <Text style={styles.siddhaTitle}>{t("siddhaSays")}</Text>
                    </View>
                    <Text style={styles.siddhaSubtitle}>{getLocalText(product.aiNutriInfo.siddhaReference.title)}</Text>
                    <Text style={styles.siddhaDesc}>"{getLocalText(product.aiNutriInfo.siddhaReference.desc)}"</Text>
                  </View>
                )}
              </View>
            )}
          </View>

          {displayRelatedProducts.length > 0 && (
            <View style={styles.relatedSection}>
              <Text style={[styles.relatedTitle, isTa && { fontSize: normalize(14) }]}>{t("topProducts")}</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.relatedScroll}>
                {displayRelatedProducts.map((item) => (
                  <TouchableOpacity
                    key={item.id}
                    style={styles.relatedCard}
                    activeOpacity={0.9}
                    onPress={() => navigation.push("ProductDetailsScreen", { productId: item.id })}
                  >
                    <View style={styles.relatedImgBg}>
                      <Image source={{ uri: item.images ? item.images[0] : item.imageURL }} style={styles.relatedImage} resizeMode="contain" />
                      <TouchableOpacity style={styles.relatedAddBtn}>
                        <Text style={styles.relatedAddText}>{t("add")}</Text>
                      </TouchableOpacity>
                    </View>
                    <Text style={styles.relatedWeight}>{getLocalText(item.variants?.[0]?.weight) || "500g"}</Text>
                    <Text style={[styles.relatedItemName, isTa && { lineHeight: normalize(18) }]} numberOfLines={2}>
                      {getLocalText(item.name)}
                    </Text>
                    <View style={styles.relatedPriceRow}>
                      <Text style={styles.relatedPrice}>₹{item.variants?.[0]?.price || 0}</Text>
                      {item.variants?.[0]?.mrp && (
                        <Text style={styles.relatedMrp}>₹{item.variants[0].mrp}</Text>
                      )}
                    </View>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          )}
        </View>
      </ScrollView>

      <View style={styles.bottomFixedContainer}>
        <GlobalCartBanner />

        <View style={styles.bottomActionRow}>
          {/* --- இடதுபுறம்: விலை விவரங்கள் --- */}
          <View style={styles.priceSection}>
            <View style={styles.priceRow}>
              <Text style={styles.sellingPrice}>₹{variants[selectedVariant]?.price || 0}</Text>
              {variants[selectedVariant]?.discountPercent ? (
                <View style={styles.discountTagLight}>
                  <MaterialCommunityIcons name="tag" size={normalize(12)} color="#FF204E" />
                  <Text style={styles.discountTextRed}>{variants[selectedVariant].discountPercent}% OFF</Text>
                </View>
              ) : null}
            </View>
            {variants[selectedVariant]?.mrp ? (
              <Text style={styles.mrpText}>MRP ₹{variants[selectedVariant].mrp}</Text>
            ) : null}
          </View>

          {/* --- வலதுபுறம்: Add (or) Qty Selector --- */}
          {cartQuantity === 0 ? (
            <TouchableOpacity onPress={handleAdd} style={styles.addBtnRed} activeOpacity={0.8}>
              <Text style={styles.addBtnRedText}>{t("add")}</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.quantitySelector}>
              <TouchableOpacity onPress={handleDecrement} style={styles.qtyBtn} activeOpacity={0.7}>
                <Text style={styles.qtyBtnText}>−</Text>
              </TouchableOpacity>

              <Text style={styles.qtyText}>{cartQuantity}</Text>

              <TouchableOpacity onPress={handleIncrement} style={styles.qtyBtn} activeOpacity={0.7}>
                <Text style={styles.qtyBtnText}>+</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  errorContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  errorText: { fontSize: normalize(18), fontWeight: "bold", marginBottom: normalize(16) },
  backBtn: { backgroundColor: "#058A46", paddingHorizontal: normalize(20), paddingVertical: normalize(10), borderRadius: normalize(8) },

  safeArea: { flex: 1, backgroundColor: "#F9FAFB" },
  floatingHeader: { position: "absolute", top: Platform.OS === "ios" ? normalize(50) : normalize(40), left: 0, right: 0, flexDirection: "row", justifyContent: "space-between", paddingHorizontal: normalize(16), zIndex: 10 },
  iconButton: { backgroundColor: "rgba(255,255,255,0.8)", width: normalize(36), height: normalize(36), borderRadius: normalize(18), justifyContent: "center", alignItems: "center" },
  headerRight: { flexDirection: "row", gap: normalize(12) },
  scrollContent: { paddingBottom: normalize(180) },

  carouselContainer: { width, height: width, backgroundColor: "#FFF" },
  productImage: { width, height: width },
  pagination: { flexDirection: "row", position: "absolute", bottom: normalize(16), alignSelf: "center" },
  dot: { width: normalize(6), height: normalize(6), borderRadius: normalize(3), backgroundColor: "#D1D5DB", marginHorizontal: normalize(4) },
  activeDot: { backgroundColor: "#111827", width: normalize(20) },

  detailsContainer: { padding: normalize(16), backgroundColor: "#F9FAFB" },
  productName: { fontWeight: "bold", color: "#111827" },
  productSubtitle: { fontSize: normalize(14), color: "#6B7280", marginBottom: normalize(12) },

  badgesRow: { flexDirection: "row", flexWrap: "wrap", gap: normalize(8), marginBottom: normalize(16) },
  badgeItem: { flexDirection: "row", alignItems: "center", backgroundColor: "#FEF2F2", paddingHorizontal: normalize(8), paddingVertical: normalize(4), borderRadius: normalize(4), borderWidth: 1, borderColor: "#FEE2E2" },
  badgeText: { fontSize: normalize(10), color: "#EF4444", marginLeft: normalize(4), fontWeight: "600" },

  priceRow: { flexDirection: "row", alignItems: "center" },
  sellingPrice: { fontSize: normalize(24), fontWeight: "bold", color: "#111827" },
  bottomPrice: { fontSize: normalize(20), fontWeight: "bold", color: "#111827" },
  discountTag: { flexDirection: "row", alignItems: "center", marginLeft: normalize(8) },
  discountText: { fontSize: normalize(12), color: "#EF4444", fontWeight: "bold", marginLeft: normalize(2) },
  mrpText: { fontSize: normalize(12), color: "#9CA3AF", textDecorationLine: "line-through", marginTop: normalize(2) },

  variantsRow: { flexDirection: "row", gap: normalize(12), marginTop: normalize(16) },
  variantBox: { flex: 1, borderWidth: 1, borderColor: "#E5E7EB", borderRadius: normalize(8), padding: normalize(12), backgroundColor: "#FFF" },
  activeVariantBox: { borderColor: "#058A46", backgroundColor: "#F0FDF4" },
  variantTop: { flexDirection: "row", justifyContent: "space-between", marginBottom: normalize(8) },
  variantWeight: { fontWeight: "bold", color: "#374151" },
  variantBoxDiscount: { fontSize: normalize(10), color: "#EF4444", fontWeight: "bold" },
  variantMiddle: { flexDirection: "row", alignItems: "baseline", gap: normalize(6) },
  variantPrice: { fontSize: normalize(18), fontWeight: "bold", color: "#111827" },
  variantMrp: { fontSize: normalize(12), color: "#9CA3AF", textDecorationLine: "line-through" },
  activeVariantText: { color: "#058A46" },

  scheduleButton: { flexDirection: "row", alignItems: "center", justifyContent: "center", borderWidth: 1, borderColor: "#E5E7EB", borderRadius: normalize(8), paddingVertical: normalize(12), marginTop: normalize(16), backgroundColor: "#FFF" },
  scheduleText: { marginLeft: normalize(8), color: "#4B5563", fontWeight: "600" },

  featuresRow: { flexDirection: "row", justifyContent: "space-between", marginTop: normalize(24), paddingHorizontal: normalize(8) },
  featureItem: { alignItems: "center" },
  featureItemText: { fontSize: normalize(10), color: "#6B7280", textAlign: "center", marginTop: normalize(4), lineHeight: normalize(14) },

  tabsContainer: { flexDirection: "row", marginTop: normalize(24), gap: normalize(12) },
  tabButton: { flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "center", paddingVertical: normalize(12), borderRadius: normalize(8), backgroundColor: "#FFF", borderWidth: 1, borderColor: "#E5E7EB" },
  activeTab: { borderColor: "#058A46", backgroundColor: "#F0FDF4" },
  tabText: { marginLeft: normalize(8), fontWeight: "600", color: "#6B7280" },
  activeTabText: { color: "#058A46" },

  tabContentArea: { marginTop: normalize(16) },
  accordionContainer: { marginBottom: normalize(12), backgroundColor: "#FFF", borderRadius: normalize(8), overflow: "hidden" },
  accordionHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: normalize(16) },
  accordionTitleRow: { flexDirection: "row", alignItems: "center" },
  accordionTitle: { fontWeight: "bold", color: "#374151", fontSize: normalize(15) },
  accordionContent: { paddingHorizontal: normalize(16), paddingBottom: normalize(16) },

  tableRowContainer: { gap: normalize(12) },
  tableRow: { flexDirection: "row", justifyContent: "space-between" },
  tableKey: { color: "#6B7280", fontSize: normalize(13) },
  tableValue: { color: "#111827", fontSize: normalize(13), fontWeight: "500" },

  infoText: { color: "#4B5563", fontSize: normalize(13), marginBottom: normalize(8), lineHeight: normalize(20) },
  verifiedTag: { color: "#3B82F6", fontWeight: "bold", fontSize: normalize(12) },
  boldText: { fontWeight: "bold", color: "#111827" },

  aiNutriContainer: { backgroundColor: "#F0FDF4", borderRadius: normalize(12), padding: normalize(8) },
  bulletRow: { flexDirection: "row", alignItems: "center", marginTop: normalize(12) },
  bulletDot: { width: normalize(6), height: normalize(6), borderRadius: normalize(3), backgroundColor: "#058A46", marginRight: normalize(8) },
  bulletTitle: { fontWeight: "bold", color: "#111827", fontSize: normalize(13) },
  bulletDesc: { color: "#6B7280", fontSize: normalize(12), marginLeft: normalize(14), marginTop: normalize(4), marginBottom: normalize(8) },

  siddhaCard: { backgroundColor: "#E0F2FE", padding: normalize(16), borderRadius: normalize(8), marginTop: normalize(16) },
  siddhaHeader: { flexDirection: "row", alignItems: "center", marginBottom: normalize(8) },
  siddhaIcon: { width: normalize(20), height: normalize(20), marginRight: normalize(8), borderRadius: normalize(10) },
  siddhaTitle: { fontWeight: "bold", color: "#0369A1" },
  siddhaSubtitle: { fontWeight: "bold", color: "#0C4A6E", fontSize: normalize(13), marginBottom: normalize(4) },
  siddhaDesc: { color: "#0284C7", fontSize: normalize(12), fontStyle: "italic" },

  relatedSection: { marginTop: normalize(32) },
  relatedTitle: { fontWeight: "bold", color: "#111827", marginBottom: normalize(16) },
  relatedScroll: { paddingRight: normalize(16) },
  relatedCard: { width: normalize(140), marginRight: normalize(12), backgroundColor: "#FFF", borderRadius: normalize(8), padding: normalize(8) },
  relatedImgBg: { backgroundColor: "#F3F4F6", borderRadius: normalize(8), height: normalize(120), justifyContent: "center", alignItems: "center", position: "relative", marginBottom: normalize(8) },
  relatedImage: { width: "80%", height: "80%" },
  relatedAddBtn: { position: "absolute", bottom: normalize(-12), backgroundColor: "#FFF", borderWidth: 1, borderColor: "#058A46", paddingHorizontal: normalize(16), paddingVertical: normalize(4), borderRadius: normalize(16) },
  relatedAddText: { color: "#058A46", fontWeight: "bold", fontSize: normalize(12) },
  relatedWeight: { fontSize: normalize(10), color: "#6B7280", marginTop: normalize(16) },
  relatedItemName: { fontSize: normalize(12), fontWeight: "bold", color: "#111827", marginTop: normalize(4), height: normalize(34) },
  relatedPriceRow: { flexDirection: "row", alignItems: "center", marginTop: normalize(4), gap: normalize(4) },
  relatedPrice: { fontSize: normalize(14), fontWeight: "bold", color: "#111827" },
  relatedMrp: { fontSize: normalize(10), color: "#9CA3AF", textDecorationLine: "line-through" },

  bottomFixedContainer: { position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 100, backgroundColor: "transparent" },
  cartBanner: { backgroundColor: "#058A46", marginHorizontal: normalize(16), borderRadius: normalize(8), padding: normalize(12), flexDirection: "row", justifyContent: "space-between", alignItems: "center", transform: [{ translateY: normalize(10) }], zIndex: 2 },
  cartBannerLeft: { flexDirection: "row", alignItems: "center" },
  cartBannerText: { color: "#FFF", fontWeight: "bold", marginLeft: normalize(8) },
  cartBannerRight: { flexDirection: "row", alignItems: "center" },
  cartBannerItems: { color: "#FFF", fontSize: normalize(12), marginRight: normalize(4) },
  bottomActionRow: { backgroundColor: "#FFF", paddingHorizontal: normalize(16), paddingVertical: Platform.OS === "ios" ? normalize(32) : normalize(16), flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderTopWidth: 1, borderTopColor: "#E5E7EB" },
  priceSection: { justifyContent: "center" },
  sellingPrice: { fontSize: normalize(20), fontWeight: "bold", color: "#111827" },
  discountTagLight: { backgroundColor: "#FEE2E2", paddingHorizontal: normalize(6), paddingVertical: normalize(2), borderRadius: normalize(4), flexDirection: "row", alignItems: "center", marginLeft: normalize(8) },
  discountTextRed: { color: "#FF204E", fontWeight: "bold", fontSize: normalize(10), marginLeft: normalize(2) },
  mrpText: { fontSize: normalize(12), color: "#9CA3AF", textDecorationLine: "line-through", marginTop: normalize(2) },
  
  addBtnRed: { backgroundColor: "#FF204E", height: normalize(45), width: normalize(120), borderRadius: normalize(10), justifyContent: "center", alignItems: "center" },
  addBtnRedText: { color: "#FFF", fontSize: normalize(16), fontWeight: "bold" },
  quantitySelector: { flexDirection: "row", alignItems: "center", backgroundColor: "#FF204E", borderRadius: normalize(10), overflow: "hidden", height: normalize(45), width: normalize(120), justifyContent: "space-between", paddingHorizontal: normalize(8) },
  qtyBtn: { paddingHorizontal: normalize(12), height: "100%", justifyContent: "center" },
  qtyBtnText: { color: "#FFF", fontSize: normalize(20), fontWeight: "bold" },
  qtyText: { color: "#FFF", fontSize: normalize(16), fontWeight: "bold" },
});