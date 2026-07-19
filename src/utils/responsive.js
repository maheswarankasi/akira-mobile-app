import { Dimensions, PixelRatio, Platform } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

// 375 என்பது ஒரு நடுத்தர போனின் அகலம் (iPhone 8 / Standard Android)
const scale = SCREEN_WIDTH / 375;

export function normalize(size) {
  const newSize = size * scale;
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    // Android-ல் எழுத்துகள் சற்று பெரிதாகத் தெரியும் என்பதால் -2 கொடுக்கிறோம்
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}
