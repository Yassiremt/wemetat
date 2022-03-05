import React, { useState, useCallback, useEffect, useRef } from "react";
import {
  Text,
  View,
  TouchableWithoutFeedback,
  FlatList,
  Pressable,
  Modal
} from "react-native";
import axios from "axios";
import { Input } from "./Input";
import { Button } from "./Button";
const GOOGLE_API_KEY = "Your api key";

const debounce = (func, wait, immediate) => {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};
const PlacesModal = props => {
  const { close, setMarker } = props;
  const [term, setTerm] = useState("");

  const [predictions, setPredictions] = useState([]);

  const debounceLoadData = useCallback(debounce(fetchData, 1000), []);
  function fetchData(term) {
    autocompletePlaces(term);
  }
  useEffect(() => {
    debounceLoadData(term);
  }, [term]);
  const autocompletePlaces = term => {
    axios
      .get(
        "https://maps.googleapis.com/maps/api/place/autocomplete/json?&input=" +
          encodeURIComponent(term) +
          "&key=" +
          `${GOOGLE_API_KEY}` +
          `&language=en`
      )
      .then(response => {
        setPredictions(response.data.predictions);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const renderRow = ({ item }) => (
    <Pressable
      style={({ pressed }) => [
        { backgroundColor: pressed ? "#f7444022" : "#f7444030" }
      ]}
      onPress={() => {
        const place_id = item.place_id;
        var config = {
          method: "get",
          url:
            "https://maps.googleapis.com/maps/api/place/details/json?place_id=" +
            place_id +
            "&fields=geometry&key=" +
            GOOGLE_API_KEY,
          headers: {}
        };

        axios(config)
          .then(function(response) {
            const loc = response.data.result.geometry.location;
            setMarker({ longitude: loc.lng, latitude: loc.lat });
          })
          .catch(function(error) {
            console.log(error);
          });
      }}
    >
      <View style={[styles.spaceBetweenRow]}>
        <Text style={styles.itemStyle}>{item.description}</Text>
      </View>
    </Pressable>
  );
  return (
    <View style={styles.containerStyle}>
      <Input
        val={term}
        setVal={term => {
          setTerm(term);
        }}
        autoFocus
        placeholder={"Search for address ..."}
      />
      <FlatList
        style={styles.flatListStyle}
        ItemSeparatorComponent={() => <View style={styles.space} />}
        keyExtractor={item => item.place_id}
        contentContainerStyle={styles.listStyle}
        data={predictions}
        renderItem={renderRow}
      />
      <Button onPress={() => close()}>Close</Button>
    </View>
  );
};

const styles = {
  containerStyle: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    paddingBottom: 40,
    backgroundColor: "#fff7f8"
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#f74440",
    borderWidth: 1.8,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 10
  },
  inputStyle: {
    color: "#CED3D8",

    fontFamily: "Roboto_500Medium",
    fontSize: 20,
    flex: 1
  },
  flatListStyle: {
    marginVertical: 10,
    flex: 1,
    overflow: "hidden"
  },
  listStyle: {
    borderColor: "#00739f",
    overflow: "hidden"
  },
  itemStyle: {
    fontFamily: "Roboto_400Regular",
    color: "#232323",
    fontSize: 14
  },
  centeredInRow: {
    justifyContent: "center",
    flexDirection: "row"
  },
  spaceBetweenRow: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 10
  },
  space: {
    marginVertical: 1
  }
};

export { PlacesModal };
