import React, { useState } from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
const Button = ({
  onPress,
  children,
  renderIcon = () => <View width={24} />
}) => {
  const [pressed, setPressed] = useState(false);
  return (
    <Pressable
      style={styles.container}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      onPress={() => onPress()}
    >
      <LinearGradient
        style={{
          height: 55,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center"
        }}
        colors={[
          pressed ? "#f74440EE" : "#f74440",
          pressed ? "#f9663aEE" : "#f9663a"
        ]}
      >
        <View width={24} />
        <Text style={styles.text}>{children}</Text>
        {renderIcon()}
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
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
    marginRight: 10
  }
});

export { Button };
