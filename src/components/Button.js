import React, { useState } from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
const Button = ({ onPress, children }) => {
  const [pressed, setPressed] = useState(false);
  return (
    <Pressable
      style={styles.container}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      onPress={() => onPress()}
    >
      <LinearGradient
        style={{ paddingVertical: 15 }}
        colors={[
          pressed ? "#f74440EE" : "#f74440",
          pressed ? "#f9663aEE" : "#f9663a"
        ]}
      >
        <Text style={styles.text}>{children}</Text>
      </LinearGradient>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5
  },
  text: {
    color: "white",
    textAlign: "center",
    fontFamily: "Ubuntu_500Medium",
    fontSize: 16
  }
});

export { Button };
