import { ScrollView, StyleSheet, TouchableOpacity,FlatList } from "react-native";
import { Box, Image, Text, Flex } from "native-base";
const destination = require("../data/destination.json");

export const DetailCity = ({ navigation, route }) => {
  // console.log(route)
    let provinsiId = route.params.ProvinceId
    // console.log(provinsiId)
  
    let destinationFilter = destination.filter((e) => {
      return e.ProvinceId === provinsiId
    })
  const DestinationData = ({ destinationFilter }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("DetailDestination")}
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
            <Box ml={7} Flex direction="column" justifyContent="space-between">
              <Box>
                <Text fontSize="lg" bold>
                  {destinationFilter.destinationName}
                </Text>
                <Text fontSize="xs">{destinationFilter.city}</Text>
                <Text fontSize="xs" italic>
                  {" "}
                  (1.2 km){" "}
                </Text>
              </Box>
              <Box>
                <Text fontSize="md" bold>
                  {destinationFilter.pricePerOrg}
                </Text>
                <Text fontSize="xs" italic>
                  {" "}
                  {destinationFilter.rating}
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
            nestedScrollEnabled
            
          data={destinationFilter}
          renderItem={({ item }) => <DestinationData destinationFilter={item} />}
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
