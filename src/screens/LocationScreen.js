import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  Pressable,
  Modal
} from "react-native";
import { theme } from "../theme";
import ViewShot from "react-native-view-shot";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Container, Title, Input, Button, PlacesModal } from "../components";
import { BackArrow, Smile, MapPin } from "../svgs";

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
  const [search, setSearch] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);
  const viewShot = useRef(null);
  const mapRef = useRef(null);

  const capture = () => {
    viewShot.current.capture().then(uri => {
      setCaptured(uri);
      navigation.navigate("Details", { uri });
    });
  };
  return (
    <Container>
      <Modal
        backdropColor={"#fff7f8"}
        animationType="slide"
        visible={isModalVisible}
      >
        <PlacesModal
          close={() => setModalVisible(false)}
          setMarker={val => {
            setMarker(val);
            setModalVisible(false);
            mapRef.current.animateToRegion({
              ...val,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005
            });
          }}
        />
      </Modal>
      <View flexDirection={"row"} alignItems={"center"} marginBottom={30}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={({ pressed }) => [
            {
              opacity: pressed ? 0.8 : 1
            }
          ]}
        >
          <BackArrow />
        </Pressable>
        <Pressable
          onPress={() => setModalVisible(true)}
          style={styles.searchBar}
        >
          <Text style={styles.searchText}>Search for address ...</Text>
          <MapPin />
        </Pressable>
      </View>
      <View flex={1} justifyContent={"space-between"}>
        <Title>Hold the marker so you can move it.</Title>
        <View style={styles.shadow}>
          <ViewShot ref={viewShot} options={{ format: "jpg", quality: 0.9 }}>
            <MapView
              ref={mapRef}
              // provider={PROVIDER_GOOGLE}
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
                draggable
                coordinate={marker}
                onDragEnd={e => setMarker({ ...e.nativeEvent.coordinate })}
              >
                <Image
                  source={require("../assets/heart.png")}
                  style={{ height: 45, width: 45 }}
                />
              </Marker>
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
    shadowOpacity: 0.08,
    shadowRadius: 1.0,
    elevation: 1,
    borderWidth: 0
  },
  searchBar: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.08,
    shadowRadius: 1.0,
    elevation: 0.8,

    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    flex: 1,
    marginLeft: 15,
    paddingHorizontal: 15
  },
  searchText: {
    fontFamily: "Roboto_500Medium",
    color: "#f74440",
    paddingVertical: 15,
    flex: 1
  }
});

export default LocationScreen;
