import { Box, Icon, Input, Image, Text, Flex, Button, Center, AspectRatio } from "native-base";
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from "react-native";
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react";
import { addingFriendProcess, getAccessToken, getUserData, getUserFriendList, searchingFriend } from "../store/actions/userActions";
import Loading from "../components/loading";
import Alerting from "../components/alert";
export const FriendsLists = ({ navigation }) => {
    const dispatch = useDispatch()
    const userData = useSelector(state => state.user.userData)
    const access_token = useSelector(state => state.user.access_token)
    const userFriendList = useSelector(state => state.user.userFriendList)
    const [page, setPage] = useState('FriendList')
    const [searchFriend, setSearchFriend] = useState('')
    const searchFriendData = useSelector(state => state.user.searchFriend)
    let userLoading = useSelector(state => state.user.userLoading)
    let userError = useSelector(state => state.user.userError)

    useEffect(() => {
        dispatch(getAccessToken())
        dispatch(getUserData(access_token))
        dispatch(getUserFriendList(access_token))
    }, [])

    function searchingFriendFunc() {
        dispatch(searchingFriend(searchFriend, access_token))
    }
    function addFriendFunc(friendId) {
        // console.log('ak keteken')
        dispatch(addingFriendProcess(friendId, access_token, setPage))
        // console.log(friendId)
    }
    return (
        <>
            {
                userLoading ?
                <Loading></Loading>
                : userError ?
                <Alerting alert={userError}></Alerting>
                : page === 'FriendList' && access_token ?
                    <>
                    <ScrollView>
                    {
                        userFriendList.map(el => (
                        <>
                        {/* <Text>{JSON.stringify(el)}</Text> */}
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
                                        <Text fontSize="lg" bold>{el.Friend.username}</Text>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        </>
                        ))
                    }
                    </ScrollView>
                    </>
                    :
                    page === 'AddFriend' && access_token ?
                        <>
                            <Box flexDirection='row' justifyContent='flex-end' px={1}>
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
                            </Box>

                            <Box width="100%">
                                <Input onSubmitEditing={searchingFriendFunc} value={searchFriend} onChangeText={setSearchFriend} placeholder="Input Friend Ecty Id" variant="filled" width="90%" bg="gray.200" my={3} mx={5} borderRadius={20} py={1} px={2} _web={{
                                    _focus: {
                                        borderColor: 'muted.300',
                                        style: {
                                            boxShadow: 'none'
                                        }
                                    }
                                }} InputLeftElement={<Icon size="sm" ml={2} color="#00CEC9" as={<Ionicons name="ios-search" />} />} />
                            </Box>
                            {
                                //fifit.mocap@gmail.com 12345, ECTY ID : 9471010267
                                // ecty id: 94622353 thalia
                                // ecty id: 598410891 thalia2
                                searchFriendData ?
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
                                                    <Text fontSize="lg" bold>{searchFriendData.username}</Text>
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Button onPress={addFriendFunc(searchFriendData.id)} mx={5} borderRadius={70} colorScheme="red" size="sm" variant={"solid"} _text={{
                                            marginLeft: 4,
                                            marginRight: 4,
                                            color: "white",
                                            fontWeight: "bold"
                                        }} px="3">
                                            ADD
                                        </Button>
                                    </Box>
                                    :
                                    null
                            }
                        </>
                        :
                        <Button mt={300} onPress={navigation.navigate('Login')} mx={5} borderRadius={70} colorScheme="red" size="sm" variant={"solid"} _text={{
                            marginLeft: 4,
                            marginRight: 4,
                            color: "white",
                            fontWeight: "bold"
                        }} px="3">
                            Please Login First
                        </Button>
            }
        </>
    )
}