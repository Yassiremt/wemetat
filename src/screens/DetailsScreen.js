import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Pressable
} from "react-native";
import {
  Container,
  Title,
  Input,
  CameraPlaceholder,
  Button
} from "../components";
import ViewShot from "react-native-view-shot";
import * as ImagePicker from "expo-image-picker";
import { BackArrow, Checked } from "../svgs";

const DetailsScreen = ({ navigation, route }) => {
  const { uri } = route.params;
  const viewShot = useRef(null);
  const [final, setFinal] = useState("");
  const captureFinal = () => {
    viewShot.current.capture().then(uri => {
      setFinal(uri);
      navigation.navigate("Share", { uri });
    });
  };
  const [myPicture, setMyPicture] = useState(null);
  const [lovePicture, setLovePicture] = useState(null);
  const [myName, setMyName] = useState("");
  const [loveName, setLoveName] = useState("");

  const pickImage = async ({ mine }) => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1
    });

    if (!result.cancelled) {
      if (mine) {
        setMyPicture(result.uri);
      } else {
        setLovePicture(result.uri);
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
        <View>
          <Input
            placeholder={"Your name"}
            val={myName}
            setVal={val => setMyName(val)}
          />
          <Input
            placeholder={"Your love's name"}
            val={loveName}
            setVal={val => setLoveName(val)}
          />
          <View marginBottom={15} />
          <View style={styles.shadow}>
            <ViewShot ref={viewShot} options={{ format: "jpg", quality: 0.9 }}>
              <Image source={{ uri: uri }} style={styles.image} />
              <View style={styles.row}>
                <View alignItems={"center"}>
                  <Pressable onPress={() => pickImage({ mine: true })}>
                    {myPicture ? (
                      <Image
                        source={{
                          uri: myPicture
                        }}
                        style={styles.lover}
                      />
                    ) : (
                      <CameraPlaceholder />
                    )}
                  </Pressable>
                  <Text style={styles.name}>{myName || "Name"}</Text>
                </View>
                <View alignItems={"center"}>
                  <Pressable onPress={() => pickImage({ mine: false })}>
                    {lovePicture ? (
                      <Image
                        source={{
                          uri: lovePicture
                        }}
                        style={styles.lover}
                      />
                    ) : (
                      <CameraPlaceholder />
                    )}
                  </Pressable>
                  <Text style={styles.name}>{loveName || "Name"}</Text>
                </View>
              </View>
            </ViewShot>
          </View>
        </View>
        <Button onPress={() => captureFinal()} renderIcon={() => <Checked />}>
          Done
        </Button>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get("window").width - 60,
    height: Dimensions.get("window").width - 60
  },
  lover: {
    width: 70,
    height: 70,
    borderRadius: 3
  },
  row: {
    position: "absolute",
    width: "100%",
    bottom: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 60
  },
  name: {
    fontFamily: "Ubuntu_500Medium",
    paddingTop: 5,
    fontSize: 15,
    color: "#404040"
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
    borderWidth: 0
  }
});

export default DetailsScreen;
