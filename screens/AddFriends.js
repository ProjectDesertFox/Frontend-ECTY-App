import { Box, Icon, Input, Image, Text, Flex, Button, Center, AspectRatio } from "native-base";
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from "react-native";
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react";
import { getAccessToken } from "../store/actions/userActions";
export const AddFriends = ({ navigation }) => {
    const userData = useSelector(state => state.user.userData)
    const [filterData, setFilterData] = useState([])
    const [result, setResult] = useState([])
    const access_token = useSelector(state => state.user.access_token)
    const dispatch = useDispatch()
    
    useEffect(() => {
        console.log(access_token, 'ACCESSTOKEN')
    }, [])
    return (
        <>
            <>
            <Box Flex flexDirection='row' justifyContent='flex-end' px={1} mt={5}>
                <Button mx={5} borderRadius={70} colorScheme="red" size="sm" variant={"solid"} _text={{
                    marginLeft: 4,
                    marginRight: 4,
                    color: "white",
                    fontWeight: "bold"
                }} px="3"
                    onPress={() => navigation.navigate('FriendsLists')}
                >
                    Friend List
                </Button>
            </Box>
            <Box width="100%">
                <Input placeholder="Search" variant="filled" width="90%" bg="gray.200" my={3} mx={5} borderRadius={20} py={1} px={2} _web={{
                    _focus: {
                        borderColor: 'muted.300',
                        style: {
                            boxShadow: 'none'
                        }
                    }
                }} InputLeftElement={<Icon size="sm" ml={2} color="#00CEC9" as={<Ionicons name="ios-search" />} />} />
            </Box>
            <ScrollView>
                {/* tampialn user yang berhasil di temukan jika sesuai pencarian */}
                <Box flexDirection='row' justifContent='space-between' alignItems='center'>
                    <Box Flex flexDirection="row" justifyContent="space-between" alignItems='center'>
                        <Box mx={5} my={2} flexDirection="row" justifyContent="flex-start" alignItems='center'>
                            <Image
                                size={60}
                                resizeMode="cover"
                                source={{
                                    uri: "https://wallpaperaccess.com/full/317501.jpg"
                                }}
                                alt={"Alternate Text"}
                                borderRadius={100} />
                            <Box ml={5} flexDirection='row' justifyContent='space-between'>
                                <Box>
                                    <Box>
                                        <Text fontSize="lg" bold>bella cantik</Text>
                                    </Box>
                                    <Box>
                                        <Text fontSize="xs" italic color="#00CEC9">123456</Text>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    {/* Button */}
                    <Box>
                        <Button mx={5} borderRadius={70} colorScheme="red" size="sm" variant={"solid"} _text={{
                            marginLeft: 4,
                            marginRight: 4,
                            color: "white",
                            fontWeight: "bold"
                        }} px="3"
                            onPress={() => navigation.navigate('FriendsLists')}
                        >
                            Add
                        </Button>
                    </Box>
                </Box>

                {/* tampilan jika data not found */}
                <Center>
                    <Box mx={20} w='80%' borderRadius={30}>
                        <AspectRatio w="100%" ratio={16 / 9}>
                            <Image source={{
                                uri: "https://cdni.iconscout.com/illustration/premium/thumb/search-result-not-found-2130361-1800925.png"
                            }} alt="image" borderRadius={15} />
                        </AspectRatio>
                    </Box>
                    <Box>
                        <Center>
                            <Text fontSize="4xl" italic color="#00CEC9">No EctyId Id Found</Text>
                        </Center>
                    </Box>
                </Center>
            </ScrollView>
            </>
            {/* <Box Flex flexDirection='row' justifyContent='flex-end' px={1} mt={5}>
                <Button mx={5} borderRadius={70} colorScheme="red" size="sm" variant={"solid"} _text={{
                    marginLeft: 4,
                    marginRight: 4,
                    color: "white",
                    fontWeight: "bold"
                }} px="3"
                    onPress={() => navigation.navigate('FriendsLists')}
                >
                    Friend List
                </Button>
            </Box>
            <Box width="100%">
                <Input placeholder="Search" variant="filled" width="90%" bg="gray.200" my={3} mx={5} borderRadius={20} py={1} px={2} _web={{
                    _focus: {
                        borderColor: 'muted.300',
                        style: {
                            boxShadow: 'none'
                        }
                    }
                }} InputLeftElement={<Icon size="sm" ml={2} color="#00CEC9" as={<Ionicons name="ios-search" />} />} />
            </Box>
            <ScrollView> */}
                {/* tampialn user yang berhasil di temukan jika sesuai pencarian */}
                {/* <Box flexDirection='row' justifContent='space-between' alignItems='center'>
                    <Box Flex flexDirection="row" justifyContent="space-between" alignItems='center'>
                        <Box mx={5} my={2} flexDirection="row" justifyContent="flex-start" alignItems='center'>
                            <Image
                                size={60}
                                resizeMode="cover"
                                source={{
                                    uri: "https://wallpaperaccess.com/full/317501.jpg"
                                }}
                                alt={"Alternate Text"}
                                borderRadius={100} />
                            <Box ml={5} flexDirection='row' justifyContent='space-between'>
                                <Box>
                                    <Box>
                                        <Text fontSize="lg" bold>bella cantik</Text>
                                    </Box>
                                    <Box>
                                        <Text fontSize="xs" italic color="#00CEC9">123456</Text>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box>
                        <Button mx={5} borderRadius={70} colorScheme="red" size="sm" variant={"solid"} _text={{
                            marginLeft: 4,
                            marginRight: 4,
                            color: "white",
                            fontWeight: "bold"
                        }} px="3"
                            onPress={() => navigation.navigate('FriendsLists')}
                        >
                            Add
                        </Button>
                    </Box>
                </Box> */}

                {/* tampilan jika data not found */}
                {/* <Center>
                    <Box mx={20} w='80%' borderRadius={30}>
                        <AspectRatio w="100%" ratio={16 / 9}>
                            <Image source={{
                                uri: "https://cdni.iconscout.com/illustration/premium/thumb/search-result-not-found-2130361-1800925.png"
                            }} alt="image" borderRadius={15} />
                        </AspectRatio>
                    </Box>
                    <Box>
                        <Center>
                            <Text fontSize="4xl" italic color="#00CEC9">No EctyId Id Found</Text>
                        </Center>
                    </Box>
                </Center>
            </ScrollView> */}
        </>
    )
}