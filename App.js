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
import {
  useFonts,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium
} from "@expo-google-fonts/roboto";
import Navigation from "./src/navigations/Navigation";

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium
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
