import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView
} from "react-native";
import { theme } from "./theme";
import ViewShot from "react-native-view-shot";
import MapView, { Marker } from "react-native-maps";
import { Input, Button } from "./components";

const MainScreen = ({}) => {
  const [place, setPlace] = useState({ latitude: 48.8584, longitude: 2.2945 });

  const [captured, setCaptured] = useState("");
  const [final, setFinal] = useState("");
  const [search, setSearch] = useState("");
  const viewShot = useRef(null);
  const viewShotFinal = useRef(null);

  const capture = () => {
    viewShot.current.capture().then(uri => {
      setCaptured(uri);
    });
  };

  const captureFinal = () => {
    viewShotFinal.current.capture().then(uri => {
      setFinal(uri);
    });
  };
  return (
    <ScrollView>
      {captured ? (
        <ViewShot ref={viewShotFinal} options={{ format: "jpg", quality: 0.9 }}>
          <Image source={{ uri: captured }} style={styles.map} />
          <View
            style={{
              position: "absolute",
              width: "100%",
              bottom: 40,
              flexDirection: "row",
              justifyContent: "space-around",
              paddingHorizontal: 40
            }}
          >
            <Image
              source={{
                uri:
                  "https://pbs.twimg.com/profile_images/1460685303790940165/foxD81_0_400x400.jpg"
              }}
              style={{
                width: 70,
                height: 70,
                borderRadius: 20
              }}
            />
            <Image
              source={{
                uri:
                  "https://scontent.fcmn5-1.fna.fbcdn.net/v/t1.6435-9/163199995_294852711996530_1431325391062788234_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHmcxDtUPNSg4WFPexpFRnh84m3aNDCUtHzibdo0MJS0RmJq2a4QkWjnqo4QGeH4HyvQyOto15QiB6ygEge0Te0&_nc_ohc=9IAiiPxmEq0AX-mA-Jy&_nc_ht=scontent.fcmn5-1.fna&oh=00_AT_wGgkaaJfBYc3zHtwcjNoveSqGUiuPmE18ht3uS8kteQ&oe=62378957"
              }}
              style={{
                width: 70,
                height: 70,
                borderRadius: 20
              }}
            />
          </View>
        </ViewShot>
      ) : (
        <>
          <Input
            val={search}
            setVal={val => setSearch(val)}
            selectionColor={"#f74440"}
          />
          <ViewShot ref={viewShot} options={{ format: "jpg", quality: 0.9 }}>
            <MapView
              customMapStyle={theme}
              style={styles.map}
              initialRegion={{
                latitude: place.latitude,
                longitude: place.longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005
              }}
              region={{
                latitude: place.latitude,
                longitude: place.longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005
              }}
              onRegionChange={console.log}
            >
              <Marker
                image={require("./heart.png")}
                draggable
                coordinate={place}
                onDragEnd={e => setPlace(e.nativeEvent.coordinate)}
              />
            </MapView>
          </ViewShot>
        </>
      )}

      <View marginVertical={40}>
        {final ? (
          <Image
            source={{ uri: final }}
            style={[
              styles.map,
              {
                borderRadius: 20
              }
            ]}
          />
        ) : null}
      </View>
      {captured ? (
        <>
          <Button onPress={() => captureFinal()}>Finish</Button>
          <Button
            onPress={() => {
              setCaptured("");
              setFinal("");
            }}
          >
            Reset
          </Button>
        </>
      ) : (
        <Button onPress={() => capture()}>Capture</Button>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width - 40,
    height: Dimensions.get("window").width - 40
  }
});

export default MainScreen;
