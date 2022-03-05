import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Title = ({ children }) => {
  return (
    <Text
      style={[
        styles.titleStyle,
        {
          color: "#323232"
        }
      ]}
    >
      {children}
    </Text>
  );
};

export { Title };

const styles = StyleSheet.create({
  titleStyle: {
    fontFamily: "Roboto_500Medium",
    lineHeight: 28,
    fontSize: 15,
    textAlign: "center"
  }
});
