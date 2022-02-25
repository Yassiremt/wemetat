import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Title = ({ children }) => {
  return (
    <Text
      style={[
        styles.titleStyle,
        {
          color: "#494949"
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
    fontFamily: "Ubuntu_500Medium",
    lineHeight: 33,
    fontSize: 16,
    textAlign: "center"
  }
});
