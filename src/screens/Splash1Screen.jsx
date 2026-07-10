import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
const {width, height} = Dimensions.get('window');

export default function Splash1Screen() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/Page-1.webp")} style={{width: width, height: height}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00C853',
  }
});
