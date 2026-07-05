import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const {width, height} = Dimensions.get('window');

export default function Splash2Screen() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/Page-2.png")} style={{width: width, height: height}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    opacity: 1,
    transition: 'all 1s ease-in-out'
  },
});
