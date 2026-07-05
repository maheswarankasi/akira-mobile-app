import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Splash1Screen from './src/screens/Splash1Screen';
import Splash2Screen from './src/screens/Splash2Screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LanguageScreen from './src/screens/LanguageScreen';
import HomeScreen from './src/screens/HomeScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import LoginScreen from './src/screens/LoginScreen';
import OTPScreen from './src/screens/OtpScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [splashStep, setSplashStep] = useState(0);
  const [isFirstTimeUser, setIsFirstTimeUser] = useState(true);

  useEffect(()=>{
    if(splashStep === 0){
      const timer = setTimeout(()=>setSplashStep(1), 2000);
      return ()=>clearTimeout(timer);
    } else if (splashStep === 1){
      const timer = setTimeout(()=>setSplashStep(2), 2000);
      return ()=>clearTimeout(timer);
    }
  },[splashStep]);

  if(splashStep === 0){
    return <Splash1Screen />
  } else if(splashStep === 1){
    return <Splash2Screen />
  }

  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName={isFirstTimeUser? 'Language':'Home'}>
      {isFirstTimeUser?(
        <>
          <Stack.Screen name='Language' component={LanguageScreen} options={{headerShown: false}} />
          <Stack.Screen name='Onboarding' component={OnboardingScreen} options={{headerShown: false}} />
          <Stack.Screen name='Login' component={LoginScreen} options={{headerShown: false}} />
          <Stack.Screen name='Otp' component={OTPScreen} options={{headerShown: false}} />
          <Stack.Screen name='Home' component={HomeScreen} options={{headerShown: false}} />
        </>
      ):(
        <Stack.Screen name='Home' component={HomeScreen} options={{headerShown: false}} />
      )}
    </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
