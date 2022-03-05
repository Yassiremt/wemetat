import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Pressable
} from "react-native";
import { Container, Title, Button } from "../components";
import { Share, BackArrow } from "../svgs";
import * as Sharing from "expo-sharing";
import * as MediaLibrary from "expo-media-library";
import * as ImageManipulator from "expo-image-manipulator";
const ShareScreen = ({ navigation, route }) => {
  const { uri } = route.params;
  const [status, requestPermission] = MediaLibrary.usePermissions();
  const [saved, setSaved] = useState("");

  const openShareDialogAsync = async () => {
    if (Platform.OS === "web") {
      alert(`Uh oh, sharing isn't available on your platform`);
      return;
    }
    const imageProc = await ImageManipulator.manipulateAsync(uri);
    await Sharing.shareAsync(imageProc.uri);
  };
  const saveToGallery = async () => {
    requestPermission();
    if (status.granted) {
      try {
        const result = await MediaLibrary.createAssetAsync(uri);
      } catch (e) {
        console.log(e);
      }
    }
  };
  return (
    <Container>
      <Pressable
        onPress={() => navigation.goBack()}
        style={({ pressed }) => [
          {
            marginBottom: 30,
            alignSelf: "flex-start",
            opacity: pressed ? 0.8 : 1
          }
        ]}
      >
        <BackArrow />
      </Pressable>
      <View flex={1} justifyContent={"space-between"}>
        <View style={styles.shadow}>
          <Image source={{ uri: uri }} style={styles.image} />
        </View>
        <View>
          <Button
            onPress={() => openShareDialogAsync()}
            renderIcon={() => <Share />}
          >
            Share
          </Button>
          <Button onPress={() => saveToGallery()}>Save to Gallery</Button>
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get("window").width - 60,
    height: Dimensions.get("window").width - 60
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.08,
    shadowRadius: 1.0,
    elevation: 1,
    borderWidth: 0
  }
});

export default ShareScreen;
