import React from "react";
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { useTheme } from "@react-navigation/native";

const Container = ({ children }) => {
  const { colors } = useTheme();
  return (
    <SafeAreaView style={{ backgroundColor: "#f74440", flex: 1 }}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: "#fff7f8"
          }
        ]}
      >
        <StatusBar backgroundColor={"#f74440"} barStyle={"light-content"} />
        {children}
      </View>
    </SafeAreaView>
  );
};

export { Container };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 30
  }
});
