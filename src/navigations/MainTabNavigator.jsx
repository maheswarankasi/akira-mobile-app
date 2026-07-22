import React from "react";
import { StyleSheet, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

// உங்களது ஸ்கிரீன்களை இம்போர்ட் செய்யவும்
import HomeScreen from "../screens/HomeScreen";
import AllCategoriesScreen from "../screens/AllCategoriesScreen";
import ProfileScreen from "../screens/ProfileScreen";

// குறிப்பு: Reorder மற்றும் Profile ஸ்கிரீன்கள் உங்களிடம் இல்லையென்றால்,
// புதிதாக 2 காலியான ஸ்கிரீன்களை உருவாக்கி இங்கே Import செய்துகொள்ளுங்கள்.
// import ReorderScreen from '../screens/ReorderScreen';
// import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

// தற்போதைக்கு Dummy Component (நீங்கள் ஸ்கிரீன் உருவாக்கும் வரை எரர் வராமல் இருக்க)
const DummyScreen = () => null;

export default function MainTabNavigator() {
  const { t } = useTranslation();

  // Redux-ல் நீங்கள் எந்த கடை/பிரிவில் இருக்கிறீர்கள் என்பதை சேமித்திருந்தால் அதை இங்கே எடுக்கலாம்.
  // உதாரணமாக: const currentShop = useSelector(state => state.shop.currentShop);
  // தற்போதைக்கு Dummy State வைத்துள்ளேன்:
  const currentShop = useSelector(
    (state) => state.shop?.currentShop || "pure_natural",
  );

  // கடைக்கு ஏற்றவாறு Dynamic Theme Color
  let activeThemeColor = "#03B75E"; // Pure & Natural (Green)
  if (currentShop === "nutri_kitchen") {
    activeThemeColor = "#8B5A2B"; // Nutri Kitchen
  } else if (currentShop === "craft_village") {
    activeThemeColor = "#4B5563"; // Craft Village
  }

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false, // மேலே உள்ள Header-ஐ மறைக்க
        tabBarActiveTintColor: activeThemeColor, // Dynamic Active Color
        tabBarInactiveTintColor: "#111827", // Inactive Color (Black/Grey)
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabLabel,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let IconComponent = Ionicons;

          if (route.name === "HomeTab") {
            IconComponent = MaterialCommunityIcons;
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "CategoryTab") {
            IconComponent = MaterialCommunityIcons;
            iconName = focused ? "view-grid-plus" : "view-grid-plus-outline";
          } else if (route.name === "ReorderTab") {
            IconComponent = MaterialCommunityIcons;
            // Shopping bag with reorder style icon
            iconName = focused ? "shopping" : "shopping-outline";
          } else if (route.name === "ProfileTab") {
            iconName = focused ? "person" : "person-outline";
          }

          return <IconComponent name={iconName} size={26} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{ tabBarLabel: "Home" }}
      />
      <Tab.Screen
        name="CategoryTab"
        component={AllCategoriesScreen}
        options={{ tabBarLabel: "Category" }}
      />
      <Tab.Screen
        name="ReorderTab"
        component={DummyScreen} // ReorderScreen-ஐ இங்கே மாற்றவும்
        options={{ tabBarLabel: "Reorder" }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileScreen} // ProfileScreen-ஐ இங்கே மாற்றவும்
        options={{ tabBarLabel: "Profile" }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#FFF",
    borderTopWidth: 1,
    borderTopColor: "#F3F4F6",
    height: Platform.OS === "ios" ? 85 : 75,
    paddingBottom: Platform.OS === "ios" ? 25 : 10,
    paddingTop: 10,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: "600",
    marginTop: 4,
  },
});
