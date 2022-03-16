import { Box, Icon, Input, Image, Text, Flex, Button, Center, AspectRatio } from "native-base";
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from "react-native";
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react";
import { getAccessToken, getUserData, getUserFriendList } from "../store/actions/userActions";

export const FriendsLists = ({navigation}) => {
    const userData = useSelector(state => state.user.userData)
    const access_token = useSelector(state => state.user.access_token)
    const dispatch = useDispatch()
    const userFriendList = useSelector(state => state.user.userFriendList)
    const [page, setPage] = useState('FriendList')

    useEffect(() => {
        dispatch(getAccessToken())
        dispatch(getUserData(access_token))
        dispatch(getUserFriendList(access_token))
    }, [])
    return (
        <>
        {
            access_token ? 
            <>
            {
                page === 'FriendList' ?
                <>
                <Button mt={5} mx={5} borderRadius={70} colorScheme="blue" size="sm" variant={"solid"} _text={{
                    marginLeft: 4,
                    marginRight: 4,
                    color: "white",
                    fontWeight: "bold",
                }} px="3"
                onPress={() => setPage('AddFriend')}
                >
                    Add Friends
                </Button>
                <Text>{userData ? userData.username : ''} Friend List</Text>
                {
                    userFriendList ? 
                    //looping data friendList disini
                    <ScrollView>
                    {
                        userFriendList.forEach(el => {
                        <Box key={el.id} Flex flexDirection="row" justifyContent="space-between" alignItems='center'>
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
                                    <Text fontSize="lg" bold>{el.username}</Text>
                                </Box>
                            </Box>
                        </Box>
                        <Button mx={5} borderRadius={70} colorScheme="red" size="sm" variant={"solid"} _text={{
                            marginLeft : 4,
                            marginRight : 4,
                            color: "white",
                            fontWeight: "bold"
                        }} px="3">
                            INVITE
                        </Button>
                        </Box>
                        })
                    }
                    </ScrollView>
                    :
                    null
                }
                </>
                :
                page === 'AddFriend' ?
                <>
                <Button mt={5} mx={5} borderRadius={70} colorScheme="blue" size="sm" variant={"solid"} _text={{
                    marginLeft: 4,
                    marginRight: 4,
                    color: "white",
                    fontWeight: "bold",
                }} px="3"
                onPress={() => setPage('FriendList')}
                >
                    Go To Friend List
                </Button>

                <Box width="100%">
                <Input placeholder="Input Friend Ecty Id" variant="filled" width="90%" bg="gray.200" my={3} mx={5} borderRadius={20} py={1} px={2} _web={{
                    _focus: {
                        borderColor: 'muted.300',
                        style: {
                            boxShadow: 'none'
                        }
                    }
                }} InputLeftElement={<Icon size="sm" ml={2} color="#00CEC9" as={<Ionicons name="ios-search" />} />} />
                </Box>
                {
                    //disini bakalan tampilin user yg ecty idnya sesuai yg diketik di search bar gausa looping karena cuman ad 1 user yg userID itu
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
                                    <Text fontSize="lg" bold>username</Text>
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
                }
                </>
                :
                null
            }
            </>
            :
            <Button mt={300} mx={5} borderRadius={70} colorScheme="red" size="sm" variant={"solid"} _text={{
                marginLeft: 4,
                marginRight: 4,
                color: "white",
                fontWeight: "bold",
            }} px="3"
            onPress={() => navigation.navigate('Login')}
            >
                Please Login First
            </Button>
        }
        </>
    )
}