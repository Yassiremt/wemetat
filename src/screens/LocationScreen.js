import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  Pressable
} from "react-native";
import { theme } from "../theme";
import ViewShot from "react-native-view-shot";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Container, Title, Input, Button } from "../components";
import { BackArrow, Smile } from "../svgs";

const LocationScreen = ({ navigation }) => {
  const [place, setPlace] = useState({
    latitude: 48.8584,
    longitude: 2.2945,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005
  });
  const [marker, setMarker] = useState({
    latitude: 48.8584,
    longitude: 2.2945
  });
  const [captured, setCaptured] = useState("");
  const [final, setFinal] = useState("");
  const [search, setSearch] = useState("");
  const viewShot = useRef(null);

  const capture = () => {
    viewShot.current.capture().then(uri => {
      setCaptured(uri);
      navigation.navigate("Details", { uri });
    });
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
        {/* <Input
          val={search}
          setVal={val => setSearch(val)}
          placeholder={"Search for the address here"}
        /> */}
        <Title>Hold the marker so you can move it.</Title>
        <View style={styles.shadow}>
          <ViewShot ref={viewShot} options={{ format: "jpg", quality: 0.9 }}>
            <MapView
              provider={PROVIDER_GOOGLE}
              customMapStyle={theme}
              style={styles.map}
              initialRegion={{
                latitude: place.latitude,
                longitude: place.longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005
              }}
            >
              <Marker
                image={require("../assets/heart.png")}
                draggable
                coordinate={marker}
                onDragEnd={e => setMarker({ ...e.nativeEvent.coordinate })}
              />
            </MapView>
          </ViewShot>
        </View>
        <View />
        <Button onPress={() => capture()} renderIcon={() => <Smile />}>
          Next
        </Button>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width - 60,
    height: Dimensions.get("window").width - 60
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

export default LocationScreen;
