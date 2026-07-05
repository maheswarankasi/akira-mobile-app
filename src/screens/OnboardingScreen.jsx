import { StyleSheet, Text, View } from "react-native"

export default function OnboardingScreen(){
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Onboarding Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color:'#ffffff'
  },
  text:{
    fontSize: 20,
    fontWeight: 'bold'
  }
})