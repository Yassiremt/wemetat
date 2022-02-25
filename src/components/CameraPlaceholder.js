import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Camera } from "../svgs";

const CameraPlaceholder = () => {
  return (
    <View style={styles.container}>
      <Camera />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF99",
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 70,
    borderRadius: 3,
    borderWidth: 1.5,
    borderColor: "#f9663a"
  }
});

export { CameraPlaceholder };
