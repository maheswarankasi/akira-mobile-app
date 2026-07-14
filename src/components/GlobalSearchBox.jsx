import React, { useState, useEffect } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function GlobalSearchBox({
  onSearch,
  placeholder = "Search...",
}) {
  const [searchText, setSearchText] = useState("");

  // Debounce Logic
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      // 500ms கழித்து, Parent Component-க்கு (PureNatural/NutriKitchen) டேட்டாவை அனுப்புகிறோம்
      if (onSearch) {
        onSearch(searchText);
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchText]); // searchText மாறும்போதெல்லாம் இந்த Effect ரன் ஆகும்

  return (
    <View style={styles.searchSection}>
      <View style={styles.searchBar}>
        <Ionicons
          name="search-outline"
          size={20}
          color="#6B7280"
          style={styles.searchIcon}
        />

        <TextInput
          style={styles.searchInput}
          placeholder={placeholder}
          placeholderTextColor="#9CA3AF"
          value={searchText}
          onChangeText={setSearchText}
        />

        {/* Text இருந்தால் Close button காட்டும் */}
        {searchText.length > 0 && (
          <TouchableOpacity
            onPress={() => setSearchText("")}
            style={{ marginRight: 8 }}
          >
            <Ionicons name="close-circle" size={20} color="#9CA3AF" />
          </TouchableOpacity>
        )}

        <TouchableOpacity style={styles.micIconWrapper}>
          <Ionicons name="mic-outline" size={24} color="#EF4444" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchSection: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: "#058A46", // Parent-ன் நிறத்தை எடுத்துக்கொள்ளும்
    paddingTop: 16,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 50,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: "#111827",
  },
  micIconWrapper: {
    paddingLeft: 8,
    borderLeftWidth: 1,
    borderLeftColor: "#F3F4F6",
  },
});
