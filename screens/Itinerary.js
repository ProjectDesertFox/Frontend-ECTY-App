import { SafeAreaView } from "react-native-safe-area-context"
import COLORS from '../style/colors';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    Dimensions,
    SPACING,
    TouchableOpacity
} from 'react-native';
import { Button, ScrollView, Box, Image, Heading } from "native-base";


const { width } = Dimensions.get('screen');
import rates from "../data/bestRate"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { actionGetOneItinerary} from "../store/actions/itineraryAction";
import { getAccessToken,getUserData } from "../store/actions/userActions";
const destination = require("../data/destination.json")


export const Itinerary = ({ navigation }) => {
    const itineraryById = useSelector(state => state.itinerary.itineraryById)
    let access_token = useSelector(state => state.user.access_token)
    let userData = useSelector(state => state.user.userData)
    const dispatch = useDispatch()
    // const BestRate = ({rate})=>{
    //     return (
    //         <View key="{item}" style={{flexDirection:'row',padding:10,marginBottom:10,width:'100%',backgroundColor:'rgba(255,255,255,0.8)',borderRadius:10,shadowColor:'black',shadowOffset:{width:0,height:10},shadowOpacity:0.3,shadowRadius:20}}>
    //             <Image style={{width:100,height:100, marginBottom:5,padding:SPACING}} source={{uri: rate.image}}/>
    //             <View style={{paddingLeft:7}}>
    //                 <Text>{rate.name}</Text>
    //             </View>
    //         </View>
    //     )
    // }

    useEffect(() => {
        dispatch(actionGetOneItinerary(userData.id))
        dispatch(getAccessToken())
        dispatch(getUserData(access_token))
    },[])

    // let destinationFilter = destination.filter((e) => {
    //     return (e.pricePerOrg <= 100000)
    // })
    const MyItinerary = ({ itineraryById }) => {
        return (
            <ScrollView>
               <TouchableOpacity
                    // onPress={() => navigation.navigate("DetailDestination", { id: destinationFilter.id, otherParam: 'destination' })}
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
                                    uri: itineraryById.image,
                                }}
                                alt={"Alternate Text"}
                                borderRadius={10}
                            />
                            <Box ml={4} Flex direction="column" justifyContent="space-around">
                                <Box>
                                    <Text fontSize="sm" bold>
                                        {itineraryById.destinationName}
                                    </Text>
                                    <Text fontSize="xs" italic>{itineraryById.city}</Text>
                                </Box>
                                <Box>

                                    <Text fontSize="sm" bold>
                                        Rp.{itineraryById.pricePerOrg}
                                    </Text>
                                    <Text fontSize="xs" italic>
                                        Rating {itineraryById.rating}
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
        // <SafeAreaView style={{flex:1}}>
        <>
            <ScrollView>
                <View >
                    <Button onPress={() => navigation.navigate('ItineraryForm')} style={{ marginLeft: 15, width: 135, marginBottom: 15, marginTop: 10 }}>Create Itenerary</Button>
                    {/* Best Price */}
                    <View>
                        <Heading ml={5}>My List Itinerary</Heading>
                        <Text>{JSON.stringify(itineraryById)}</Text>
                        {/* <View style={{ paddingLeft: 15, paddingRight: 20 }}>
                            {
                                destinationFilter.map((el) => (
                                    <MyItinerary destinationFilter={el} key={el.id} />
                                ))
                            }
                        </View> */}
                        {/* <FlatList
              contentContainerStyle={{ paddingLeft: 15, paddingRight: 20 }}
              data={rates}
              renderItem={({ item }) => <BestRate rate={item} />}
            /> */}
                    </View>
                    {/* <View style={style.containerExplore}>
                        {
                            rates.map((el) => (
                                <BestRate rate={el} key={el.id} />
                            ))
                        }
                    </View> */}
                    {/* <FlatList nestedScrollEnabled
                        contentContainerStyle={{paddingLeft:15,paddingRight:20}}
                        data={rates}
                        renderItem={({item}) => <BestRate rate={item} />}
                        /> */}
                </View>
            </ScrollView>

        </>
        // </SafeAreaView>
    )
}

const style = StyleSheet.create({
    cardImage: {
        height: 180,
        width: width / 3,
        marginRight: 20,
        padding: 10,
        overflow: 'hidden'
    },
    imageItenerary: {
        height: 80,
        width: width / 5.5,
        borderRadius: 50,
        marginLeft: 20
    },
    imageCity: {
        width: 140,
        height: 200

    }
})
