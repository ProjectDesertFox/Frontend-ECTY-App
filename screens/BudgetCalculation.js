import {
  Text,
  Box,
  Center,
  Image,
  AspectRatio,
  Button,
  ScrollView,
} from "native-base";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionResultJoin } from "../store/actions/itineraryAction";
import { ActivityIndicator, StyleSheet, View } from "react-native";

export const BudgetCalculation = ({ route }) => {
  // console.log(route, "=route di budget")
  let groupChatId = route.params.id;
  console.log(groupChatId, "id grup");
  let itineraryResult = useSelector((state) => state.itinerary.itineraryResult);
  let loading = useSelector((state) => state.itinerary.itineraryLoading);
  console.log(loading);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionResultJoin({ id: groupChatId }));
  }, []);

  
  if (loading) {
      return(
        <View>
            <ActivityIndicator size="large" />
        </View>
      )
  }else{
      return (
        //   <Text>{JSON.stringify(itineraryResult.itinerary)}</Text>
        <>
         
            <View>
              <Text mx={4} my={2} fontSize="2xl" bold>
                Estimated Budget
              </Text>
              {/* Price Budget Estimation */}
              <Box flexDirection="row" justifyContent="space-around">
                <Button
                  mx={5}
                  borderRadius={70}
                  width={130}
                  colorScheme="red"
                  size="sm"
                  variant={"solid"}
                  _text={{
                    marginLeft: 4,
                    marginRight: 4,
                    color: "white",
                    fontWeight: "bold",
                  }}
                  px="3"
                  onPress={() => navigation.navigate("Login")}
                >
                  Chatting
                </Button>
                <Button
                  mx={5}
                  borderRadius={70}
                  width={130}
                  colorScheme="red"
                  size="sm"
                  variant={"solid"}
                  _text={{
                    marginLeft: 4,
                    marginRight: 4,
                    color: "white",
                    fontWeight: "bold",
                  }}
                  px="3"
                  onPress={() => navigation.navigate("Login")}
                >
                  Invite Friends
                </Button>
              </Box>
              {/* Card Detail */}
              <ScrollView>
                <Box
                  mx={2}
                  my={2}
                  bg="gray.200"
                  flexDirection="row"
                  justifyContent="space-between"
                  borderRadius={15}
                >
                  <Box mx={5} my={4}>
                    <Text>Start - Finish</Text>
                    <Text bold fontSize={15}>
                    
                      {itineraryResult.itinerary ? itineraryResult.itinerary.dateStart : ""} -{" "}
                      {itineraryResult.itinerary ? itineraryResult.itinerary.dateEnd : ""}
                    </Text>
                    <Text>Total Budget</Text>
                    <Text bold fontSize={15}>
                      {itineraryResult.itinerary ? itineraryResult.itinerary.budget : ""}
                    </Text>
                  </Box>
                  <Box mx={5} my={4}>
                    <Text>Number of Person</Text>
                    <Text bold fontSize={15}>
                      {" "}
                      { itineraryResult.itinerary ? itineraryResult.itinerary.sharingMemberSlot : ""} Person
                    </Text>
                    <Text>Budget Per Person</Text>
                    <Text bold fontSize={15}>
                      { itineraryResult.itinerary ?  itineraryResult.itinerary.budget /
                        itineraryResult.itinerary.sharingMemberSlot : ""}
                    </Text>
                  </Box>
                </Box>
                <Center my={4}>
                  <Box w="90%" shadow="1" bg="gray.100" borderRadius={15}>
                    <AspectRatio w="100%" ratio={16 / 9}>
                      <Image
                        source={{
                          uri: "jj",
                        }}
                        alt="image"
                        borderRadius={15}
                      />
                    </AspectRatio>
                    <Box
                      mx={1}
                      my={2}
                      flexDirection="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Box mx={4} my={2}>
                        <Text fontSize="2xl" bold></Text>
                        <Text fontSize="xs">Lombok, Indonesia</Text>
                      </Box>
                      <Box mx={4} my={2}>
                        <Text fontSize="lg" bold>
                          Rp 1.000.000
                        </Text>
                        <Text fontSize="xs">Per Night</Text>
                      </Box>
                    </Box>
                  </Box>
                </Center>
                <Center my={4}>
                  <Box w="90%" shadow="1" bg="gray.100" borderRadius={15}>
                    <AspectRatio w="100%" ratio={16 / 9}>
                      <Image
                        source={{
                          uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
                        }}
                        alt="image"
                        borderRadius={15}
                      />
                    </AspectRatio>
                    <Box
                      mx={1}
                      my={2}
                      flexDirection="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Box mx={4} my={2}>
                        <Text fontSize="2xl" bold>
                          Hotel Senggigi
                        </Text>
                        <Text fontSize="xs">Lombok, Indonesia</Text>
                      </Box>
                      <Box mx={4} my={2}>
                        <Text fontSize="lg" bold>
                          Rp 1.000.000
                        </Text>
                        <Text fontSize="xs">Per Night</Text>
                      </Box>
                    </Box>
                  </Box>
                </Center>
                <Center my={4}>
                  <Box w="90%" shadow="1" bg="gray.100" borderRadius={15}>
                    <AspectRatio w="100%" ratio={16 / 9}>
                      <Image
                        source={{
                          uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
                        }}
                        alt="image"
                        borderRadius={15}
                      />
                    </AspectRatio>
                    <Box
                      mx={1}
                      my={2}
                      flexDirection="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Box mx={4} my={2}>
                        <Text fontSize="2xl" bold>
                          Hotel Senggigi
                        </Text>
                        <Text fontSize="xs">Lombok, Indonesia</Text>
                      </Box>
                      <Box mx={4} my={2}>
                        <Text fontSize="lg" bold>
                          Rp 1.000.000
                        </Text>
                        <Text fontSize="xs">Per Night</Text>
                      </Box>
                    </Box>
                  </Box>
                </Center>
              </ScrollView>
            </View>
          
        </>
      );

  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});
