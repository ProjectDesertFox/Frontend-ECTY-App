import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  TextInput,
  ImageBackground,
  FlatList,
  Dimensions,
  TouchableOpacity,
  SPACING,
  ScrollView,
} from "react-native";
import { Modal, FormControl, Input, Button, Stack, Box, Image, Text } from "native-base";
import places from "../data/recomendation";
import iteneraries from "../data/itenerary";
import cities from "../data/city";
import rates from "../data/bestRate";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MapView, { Callout, Circle, Marker } from "react-native-maps";

// import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from "../style/colors";
import { useDispatch, useSelector } from "react-redux";
import {
  actionGetItinerary,
  actionJoinItinerary,
} from "../store/actions/itineraryAction";

// import { NavigationContainer } from '@react-navigation/native';
const { width } = Dimensions.get("screen");
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DetailCity } from "./DetailCity";
const provinsi = require("../data/province.json");
const destination = require("../data/destination.json")

export const Home = ({ navigation }) => {
  const Stack = createNativeStackNavigator();
  const itineraries = useSelector((state) => state.itinerary.itineraries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionGetItinerary());
  }, []);

  function joinItinerary(id) {
    dispatch(actionJoinItinerary(id, navigation));
  }
  const ItenerariesCard = ({ itineraries }) => {
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);
    return (
      <View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setShowModal(true)}
        >
          <Image
            style={style.imageItenerary}
            source={{ uri: itineraries.imageItinerary }}
          />
          <Text style={{ marginRight: 20 }}>
            {itineraries.User.username}'s Itenerary
          </Text>
        </TouchableOpacity>
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <Modal.Content maxWidth="400px">
            <Modal.CloseButton />
            <Modal.Header>Detail Itenerary</Modal.Header>
            <Modal.Body>
              {/* <FormControl>
                            <FormControl.Label>Name</FormControl.Label>
                            <Input />
                            </FormControl>
                            <FormControl mt="3">
                            <FormControl.Label>Email</FormControl.Label>
                            <Input />
                            </FormControl> */}
              <Image
                style={{ height: 150, width: "100%" }}
                source={{ uri: itineraries.imageItinerary }}
              />

              <Text>Destination: {itineraries.ItineraryPlaces.name}</Text>
              <Text>Price: {itineraries.ItineraryPlaces.estimatedPrice}</Text>
            </Modal.Body>
            <Modal.Footer>
              <Button.Group space={2}>
                <Button
                  onPress={() => {
                    joinItinerary(itineraries.GroupChat.id);
                  }}
                >
                  Join
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </View>
    );
  };


  const RecomendedCard = ({ place }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
      // onPress={()=>NavigationContainer.navigate('Register')}
      >
        <View key="{item}">
          <ImageBackground
            style={style.cardImage}
            source={{ uri: place.image }}
          >
            <Text
              style={{
                color: COLORS.white,
                fontSize: 17,
                fontWeight: "bold",
                marginTop: 5,
              }}
            >
              {place.name}
            </Text>
            <View
              style={{
                flex: 1,
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "flex-end",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                {/* <Icon name="place" size={20} color={COLORS.white} /> */}
                <Text style={{ marginLeft: 5, color: COLORS.white }}>
                  {place.kota}
                </Text>
              </View>
            </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    );
  };

  const [pin, setPin] = React.useState({
    latitude: -6.2,
    longitude: 106.816666,
  });

  const [region, setRegion] = React.useState({
    latitude: -6.2,
    longitude: 106.816666,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const GridCity = ({ provinsi }) => {
    return (
      <TouchableOpacity
        style={{
          width: 120,
          borderRadius: 50,
          marginRight: 5,
          marginLeft: 5,
          marginBottom: 5,
        }}
        onPress={() =>
          navigation.navigate("DetailCity", { ProvinceId: provinsi.ProvinceId })
        }
      >
        <View style={{ borderRadius: 20 }}>
          <ImageBackground
            style={{ width: "100%", height: 120, borderRadius: 20 }}
            source={{ uri: provinsi.image }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "space-between",
                flexDirection: "row",
                padding: 6,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                {/* <Icon name="place" size={20} color={COLORS.white} /> */}
                <Text
                  style={{
                    marginLeft: 5,
                    color: COLORS.white,
                    fontSize: 17,
                    fontWeight: "bold",
                  }}
                >
                  {provinsi.provinceName}
                </Text>
              </View>
            </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    );
  };

  let destinationFilter = destination.filter((e) => {
    return (e.pricePerOrg <= 100000)
  })

  const BestRate = ({ destinationFilter }) => {
    return (
      <ScrollView>
        {/* Besr Price Card */}
        <TouchableOpacity
          onPress={() => navigation.navigate("DetailDestination", { id: destinationFilter.id, otherParam: 'destination' })}
        >
          <Box
            key="item"
            alignSelf="center"
            bg="gray.50"
            borderRadius={7}
            width="95%"
            shadow={5}
            marginTop={5}
          >
            <Box
              mx={4} my={5}
              flexDirection="row"
              justifyContent="flex-start"
            >
              <Image
                size={90}
                resizeMode="cover"
                source={{
                  uri: destinationFilter.image,
                }}
                alt={"Alternate Text"}
                borderRadius={10}
              />
              <Box ml={4} Flex direction="column" justifyContent="space-around">
                <Box>
                  <Text fontSize="sm" bold>
                    {destinationFilter.destinationName}
                  </Text>
                  <Text fontSize="xs" italic>{destinationFilter.city}</Text>
                </Box>
                <Box>

                  <Text fontSize="sm" bold>
                    Rp.{destinationFilter.pricePerOrg}
                  </Text>
                  <Text fontSize="xs" italic>
                    Rating {destinationFilter.rating}
                  </Text>
                </Box>

              </Box>
            </Box>
          </Box>
        </TouchableOpacity>
      </ScrollView>
    );
  };
  
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          {/* itinerary */}
          <View>
            <Text style={style.sectionTitle}>Iteneraries Available</Text>
            <FlatList
              contentContainerStyle={{ paddingLeft: 15, paddingBottom: 15 }}
              showsHorizontalScrollIndicator={false}
              horizontal
              data={itineraries}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <ItenerariesCard itineraries={item} />}
            />
          </View>
          {/* Rekomendasi */}
          <View>
            <Text style={style.sectionTitle}>Recomended</Text>
            <FlatList
              snapToInterval={width - 15}
              contentContainerStyle={{ paddingLeft: 15, paddingBottom: 15 }}
              showsHorizontalScrollIndicator={false}
              horizontal
              data={places}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <RecomendedCard place={item} />}
            />
          </View>

          <Text style={style.sectionTitle}>Explore</Text>
          <View style={style.containerExplore}>
            {
              provinsi.map((el) => (
                <GridCity provinsi={el} key={el.id} />
              ))
            }
          </View>
          {/* Best Price */}
          <View>
            <Text style={style.sectionTitle}>Best Price</Text>
            <View style={{ paddingLeft: 15, paddingRight: 20 }}>
              {
                destinationFilter.map((el) => (
                  <BestRate destinationFilter={el} key={el.id} />
                ))
              }
            </View>
            {/* <FlatList
              contentContainerStyle={{ paddingLeft: 15, paddingRight: 20 }}
              data={rates}
              renderItem={({ item }) => <BestRate rate={item} />}
            /> */}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: 300,
  },
  sectionTitle: {
    marginHorizontal: 20,
    marginVertical: 20,
    fontWeight: "bold",
    fontSize: 20,
  },
  cardImage: {
    height: 180,
    width: width / 3,
    marginRight: 20,
    padding: 10,
    overflow: "hidden",
  },
  imageItenerary: {
    height: 80,
    width: width / 5.5,
    borderRadius: 50,
    marginLeft: 20,
  },
  imageCity: {
    width: 140,
    height: 200,
  },
  containerExplore: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }
});
