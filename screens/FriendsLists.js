import { Box, Icon, Input, Image, Text, Flex, Button, Center, AspectRatio } from "native-base";
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from "react-native";
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react";

export const FriendsLists = ({navigation}) => {
    const [userData, setUserData] = useState([])

    // useEffect(async () => {
    //     try {
    //         let res = await fetch("https://ecty-backend.herokuapp.com/users", {
    //             headers: {
    //                 'access_token': await AsyncStorage.getItem('access_token')
    //             }
    //         })
    //         let resJson = await res.json()
    //         setUserData(resJson)
    //         // console.log(resJson, '<<<<<<<<<<<<<<------------------------------------')
    //         console.log(userData, '<<<<<<<<<<<<<<------------------------------------')
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }, [])

    return (
        //? Page Friend List
        <>
            <Box Flex flexDirection='row' justifyContent='flex-end' px={1} mt={5}>
                <Button mx={5} borderRadius={70} colorScheme="red" size="sm" variant={"solid"} _text={{
                    marginLeft: 4,
                    marginRight: 4,
                    color: "white",
                    fontWeight: "bold"
                }} px="3"
                onPress={() => navigation.navigate('AddFriends')}
                >
                    Add Friend
                </Button>
            </Box>
            {/* <Box width="100%">
                <Input placeholder="Search" variant="filled" width="90%" bg="gray.200" my={3} mx={5} borderRadius={20} py={1} px={2} _web={{
                    _focus: {
                        borderColor: 'muted.300',
                        style: {
                            boxShadow: 'none'
                        }
                    }
                }} InputLeftElement={<Icon size="sm" ml={2} color="#00CEC9" as={<Ionicons name="ios-search" />} />} />
            </Box> */}
            <ScrollView>
                {/* INI LOOPING UNTUK MENAMPILKAN DATA FRIENDLIST */}
                {/* {
                    userData.map((item, index) => {
                        return (
                            <Box key={index}Flex flexDirection="row" justifyContent="space-between" alignItems='center'>
                                <Box mx={5} my={2} Flex flexDirection="row" justifyContent="flex-start" alignItems='center'>
                                    <Image
                                        size={60}
                                        resizeMode="cover"
                                        source={{
                                            uri: "https://wallpaperaccess.com/full/317501.jpg"
                                        }}
                                        alt={"Alternate Text"}
                                        borderRadius={100} />
                                    <Box ml={5} maxW="60%" overflow="hidden">
                                        <Box>
                                            <Text fontSize="lg" bold>{item.username}</Text>
                                        </Box>
                                    </Box>
                                </Box>
                                <Button mx={5} borderRadius={70} colorScheme="red" size="sm" variant={"solid"} _text={{
                                    marginLeft: 4,
                                    marginRight: 4,
                                    color: "white",
                                    fontWeight: "bold"
                                }} px="3">
                                ADD
                                </Button>
                            </Box>
                        )
                    })
                } */}
                <Box Flex flexDirection="row" justifyContent="space-between" alignItems='center'>
                    <Box mx={5} my={2} Flex flexDirection="row" justifyContent="flex-start" alignItems='center'>
                        <Image
                            size={60}
                            resizeMode="cover"
                            source={{
                                uri: "https://wallpaperaccess.com/full/317501.jpg"
                            }}
                            alt={"Alternate Text"}
                            borderRadius={100} />
                        <Box ml={5} maxW="60%" overflow="hidden">
                            <Box>
                                <Text fontSize="lg" bold>Bella cantik</Text>
                            </Box>
                        </Box>
                    </Box>
                    {/* <Button mx={5} borderRadius={70} colorScheme="red" size="sm" variant={"solid"} _text={{
                        marginLeft : 4,
                        marginRight : 4,
                        color: "white",
                        fontWeight: "bold"
                    }} px="3">
                        INVITE
                    </Button> */}
                </Box>
                <Box Flex flexDirection="row" justifyContent="space-between" alignItems='center'>
                    <Box mx={5} my={2} Flex flexDirection="row" justifyContent="flex-start" alignItems='center'>
                        <Image
                            size={60}
                            resizeMode="cover"
                            source={{
                                uri: "https://wallpaperaccess.com/full/317501.jpg"
                            }}
                            alt={"Alternate Text"}
                            borderRadius={100} />
                        <Box ml={5} maxW="60%" overflow="hidden">
                            <Box>
                                <Text fontSize="lg" bold>Thalia cantik</Text>
                            </Box>
                        </Box>
                    </Box>
                    {/* <Button mx={5} borderRadius={70} colorScheme="red" size="sm" variant={"solid"} _text={{
                        marginLeft : 4,
                        marginRight : 4,
                        color: "white",
                        fontWeight: "bold"
                    }} px="3">
                        INVITE
                    </Button> */}
                </Box>
            </ScrollView>
        </>

    )
}