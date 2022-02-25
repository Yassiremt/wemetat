import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { Container, Title, Button } from "../components";

const width = Dimensions.get("window").width - 60;
const ratio = width / 640;

const StartScreen = ({ navigation }) => {
  return (
    <Container>
      <View flex={1} justifyContent={"space-between"}>
        <View />
        <View>
          <Title>
            Share with your friends a picture where your love and you first met
            at ♥ 🗺 .
          </Title>
          <Image
            source={require("../image.jpg")}
            style={{
              width: width,
              height: ratio * 801,
              resizeMode: "contain",
              marginVertical: 60
            }}
          />
        </View>
        <Button onPress={() => navigation.navigate("Location")}>Start</Button>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({});

export default StartScreen;
