import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const Input = ({ val, setVal, placeholder }) => {
  return (
    <TextInput
      value={val}
      onChangeText={val => setVal(val)}
      selectionColor={"#f74440"}
      placeholder={placeholder}
      placeholderTextColor={"#f7444055"}
      style={styles.input}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    fontFamily: "Ubuntu_500Medium",
    borderWidth: 1.8,
    borderColor: "#f74440",
    height: 50,
    // paddingVertical: 8,
    marginBottom: 30,
    paddingLeft: 15,
    fontSize: 15,
    color: "#454545"
  }
});

export { Input };
