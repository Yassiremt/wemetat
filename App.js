import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Pressable,
  TextInput,
  SafeAreaView,
  StatusBar
} from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import {
  Ubuntu_300Light,
  Ubuntu_300Light_Italic,
  Ubuntu_400Regular,
  Ubuntu_400Regular_Italic,
  Ubuntu_500Medium,
  Ubuntu_500Medium_Italic,
  Ubuntu_700Bold,
  Ubuntu_700Bold_Italic
} from "@expo-google-fonts/ubuntu";
import Navigation from "./src/navigations/Navigation";

export default function App() {
  let [fontsLoaded] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_500Medium
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <Navigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff7f8",
    paddingHorizontal: 20,
    paddingVertical: 30
  }
});
