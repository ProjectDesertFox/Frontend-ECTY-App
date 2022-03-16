import { ScrollView, StyleSheet, TouchableOpacity,FlatList } from "react-native";
import { Box, Image, Text, Flex } from "native-base";
const destination = require("../data/destination.json");
const hotel= require("../data/hotel.json")

export const DetailCity = ({ navigation, route }) => {
  // console.log(route)
    let provinsiId = route.params.ProvinceId
    // console.log(provinsiId)
  
    let destinationFilter = destination.filter((e) => {
      return e.ProvinceId === provinsiId
    })

    let hotelFilter = hotel.filter((e) => {
      return e.ProvinceId === provinsiId
    })
  const DestinationData = ({ destinationFilter }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("DetailDestination", {id: destinationFilter.id, otherParam:'destination'})}
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

  const HotelData = ({hotelFilter}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("DetailDestination", {id: hotelFilter.id, otherParam:'hotel'})}
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
  return (
    <>
      <Text style={style.sectionTitle}>Popular Destination</Text>
      <ScrollView horizontal={true}>
        <Box
          alignSelf="center"
          bg="gray.50"
          borderRadius={7}
          width={100}
          shadow={5}
          mx={5}
          my={5}
        >
          <Image
            size={120}
            resizeMode="cover"
            source={{
              uri: "https://wallpaperaccess.com/full/317501.jpg",
            }}
            alt={"Alternate Text"}
            borderRadius={10}
          />
        </Box>
        <Box
          alignSelf="center"
          bg="gray.50"
          borderRadius={7}
          width={100}
          shadow={5}
          mx={5}
          my={5}
        >
          <Image
            size={120}
            resizeMode="cover"
            source={{
              uri: "https://wallpaperaccess.com/full/317501.jpg",
            }}
            alt={"Alternate Text"}
            borderRadius={10}
          />
        </Box>
        <Box
          alignSelf="center"
          bg="gray.50"
          borderRadius={7}
          width={100}
          shadow={5}
          mx={5}
          my={5}
        >
          <Image
            size={120}
            resizeMode="cover"
            source={{
              uri: "https://wallpaperaccess.com/full/317501.jpg",
            }}
            alt={"Alternate Text"}
            borderRadius={10}
          />
        </Box>
      </ScrollView>
      <Text style={style.sectionTitle}>Explore Destination</Text>
      <ScrollView>
        <FlatList
            
            
          data={destinationFilter}
          renderItem={({ item }) => <DestinationData destinationFilter={item} />}
        />
        <FlatList  
            
            data={hotelFilter}
            renderItem={({ item }) => <HotelData hotelFilter={item} />}
        />
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
});
