import { ScrollView, StyleSheet, TouchableOpacity, FlatList, View, Dimensions, ImageBackground } from "react-native";
import { Box, Image, Text, Heading, Center } from "native-base";
const destination = require("../data/destination.json");
const hotel = require("../data/hotel.json")
import places from "../data/recomendation";
const { width } = Dimensions.get("screen");
import COLORS from "../style/colors";


export const DetailCity = ({ navigation, route }) => {
  let provinsiId = route.params.ProvinceId

  let destinationFilter = destination.filter((e) => {
    return e.ProvinceId === provinsiId
  })

  let hotelFilter = hotel.filter((e) => {
    return e.ProvinceId === provinsiId
  })

  const DestinationData = ({ destinationFilter }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("DetailDestination", { id: destinationFilter.id, otherParam: 'destination' })}
      >
        <Box
          alignSelf="center"
          bg="gray.50"
          borderRadius={7}
          width="95%"
          shadow={5}
          marginTop={5}
        >
          <Box
            mx={5}
            my={5}
            Flex
            flexDirection="row"
            justifyContent="flex-start"
          >
            <Image
              size={120}
              resizeMode="cover"
              source={{
                uri: destinationFilter.image,
              }}
              alt={"Alternate Text"}
              borderRadius={10}
            />
            <Box ml={7} Flex direction="column" justifyContent="space-around">
              <Box>
                <Text fontSize="sm" bold>
                  {destinationFilter.destinationName}
                </Text>
                <Text fontSize="xs">{destinationFilter.city}</Text>

              </Box>
              <Box>

                <Text fontSize="sm" bold>
                  Rp.{destinationFilter.pricePerOrg}
                </Text>
                <Text fontSize="xs" italic>
                  rating {destinationFilter.rating}
                </Text>
              </Box>

            </Box>
          </Box>
        </Box>
      </TouchableOpacity>
    )
  }


  const HotelData = ({ hotelFilter }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("DetailDestination", { id: hotelFilter.id, otherParam: 'hotel' })}
      >
        <Box
          alignSelf="center"
          bg="gray.50"
          borderRadius={7}
          width="95%"
          shadow={5}
          marginTop={5}
        >
          <Box
            mx={5}
            my={5}
            Flex
            flexDirection="row"
            justifyContent="flex-start"
          >
            <Image
              size={120}
              resizeMode="cover"
              source={{
                uri: hotelFilter.imageHotel,
              }}
              alt={"Alternate Text"}
              borderRadius={10}
            />
            <Box ml={7} Flex direction="column" justifyContent="space-around">
              <Box>
                <Text fontSize="sm" bold>
                  {hotelFilter.nameHotel}
                </Text>
                <Text fontSize="xs">{hotelFilter.city}</Text>

              </Box>
              <Box>
                <Text fontSize="sm" bold>
                  Rp.{hotelFilter.price}
                </Text>
                <Text fontSize="xs" italic>
                  {" "}
                  rating {hotelFilter.rating}
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </TouchableOpacity>
    )
  }

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


  return (
    <>
      {/* <Heading ml={3}>Popular Destination</Heading>
      <ScrollView horizontal={true} m={5} h={100}>
        <Box m={3} h='100' flowDirection='column'>
          <Box>
            <Image
              size={60}
              resizeMode="cover"
              source={{
                uri: "https://wallpaperaccess.com/full/317501.jpg",
              }}
              alt={"Alternate Text"}
              borderRadius={25}
            />
          </Box>
          <Center>
            <Box>
              <Text fontSize='xs'>Jakarta</Text>
            </Box>
            <Box>
              <Text fontSize='xs'>Jakarta</Text>
            </Box>
          </Center>
        </Box>
        <Box m={3} h='100' flowDirection='column'>
          <Box>
            <Image
              size={70}
              resizeMode="cover"
              source={{
                uri: "https://wallpaperaccess.com/full/317501.jpg",
              }}
              alt={"Alternate Text"}
              borderRadius={25}
            />
          </Box>
          <Center>
            <Box>
              <Text fontSize='xs'>Jakarta</Text>
            </Box>
            <Box>
              <Text fontSize='xs'>Jakarta</Text>
            </Box>
          </Center>
        </Box>
        <Box m={3} h='100' flowDirection='column'>
          <Box>
            <Image
              size={70}
              resizeMode="cover"
              source={{
                uri: "https://wallpaperaccess.com/full/317501.jpg",
              }}
              alt={"Alternate Text"}
              borderRadius={25}
            />
          </Box>
          <Center>
            <Box>
              <Text fontSize='xs'>Jakarta</Text>
            </Box>
            <Box>
              <Text fontSize='xs'>Jakarta</Text>
            </Box>
          </Center>
        </Box>
        <Box m={3} h='100' flowDirection='column'>
          <Box>
            <Image
              size={70}
              resizeMode="cover"
              source={{
                uri: "https://wallpaperaccess.com/full/317501.jpg",
              }}
              alt={"Alternate Text"}
              borderRadius={25}
            />
          </Box>
          <Center>
            <Box>
              <Text fontSize='xs'>Jakarta</Text>
            </Box>
            <Box>
              <Text fontSize='xs'>Jakarta</Text>
            </Box>
          </Center>
        </Box>

      </ScrollView> */}

      {/* Rekomendasi vertical scroll */}
      {/* <View>
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
      </View> */}

      <Heading ml={3} mt={5}>Explore Destination</Heading>
      <ScrollView>
      <View>
          {
            destinationFilter.map((e)=>(
              <DestinationData destinationFilter={e} />
            ))
          }
        </View>
        <View>
          {
            hotelFilter.map((e) => <HotelData hotelFilter={e} />)
          }
        </View>
        {/* <FlatList


          data={destinationFilter}
          renderItem={({ item }) => <DestinationData destinationFilter={item} />}
        />
        <FlatList

          data={hotelFilter}
          renderItem={({ item }) => <HotelData hotelFilter={item} />}
        /> */}
      </ScrollView>
    </>
  );
};

const style = StyleSheet.create({
  sectionTitle: {
    marginHorizontal: 20,
    marginVertical: 20,
    fontWeight: "bold",
    fontSize: 18,
  },
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
