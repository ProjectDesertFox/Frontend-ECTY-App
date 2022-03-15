import { Divider, Image, Center, Box, Text, Button } from "native-base";
import { useEffect, useState } from "react";
import { getAccessToken, loginUser, removeAccesstoken } from "../store/actions/userActions";
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Profile({ navigation }) {
    const [userData, setUserData] = useState([])
    let access_token = useSelector(state => state.user.access_token)
    let dispatch = useDispatch()
    console.log(access_token)
    useEffect(async () => {
        try {
            let res = await fetch("https://ecty-backend.herokuapp.com/users/userCurrent", {
                headers: {
                    'access_token': await AsyncStorage.getItem('access_token')
                }
            })
            let resJson = await res.json()
            setUserData(resJson)
            // console.log(resJson, '<<<<<<<<<<<<<<------------------------------------')
            // console.log(userData, '<<<<<<<<<<<<<<------------------------------------')
        } catch (error) {
            console.log(error)
        }
    }, [])

    useEffect(() => {
        dispatch(getAccessToken())
    }, [])
    return (
        <>
            {
                access_token ?
                    <Box mt={5}>
                        <Center>
                            <Image
                                size={150}
                                resizeMode="cover"
                                source={{
                                    uri: "https://wallpaperaccess.com/full/317501.jpg"
                                }}
                                alt={"Alternate Text"}
                                borderRadius={100} />
                            <Text mt={5} fontWeight='bold' color='yellow.500' bold fontSize="lg"> {userData.planStatus} </Text>
                        </Center>
                        <Box Flex flexDirection='row' justifyContent='space-between' px={5} mt={5}>
                            <Text fonstSize='lg' color='#34495E'>Username</Text>
                            <Text fonstSize='lg' color='#34495E'> {userData.username}</Text>
                        </Box>
                        <Divider my="2" mx="5" bg="#DFE6E9" thickness="2" />
                        <Box Flex flexDirection='row' justifyContent='space-between' px={5} mt={5}>
                            <Text fonstSize='lg' color='#34495E'>Email</Text>
                            <Text fonstSize='lg' color='#34495E'>{userData.email}</Text>
                        </Box>
                        <Divider my="2" mx="5" bg="#DFE6E9" thickness="2" />
                        <Box Flex flexDirection='row' justifyContent='space-between' px={5} mt={5}>
                            <Text fonstSize='lg' color='#34495E'>EctyId</Text>
                            <Text fonstSize='lg' color='#34495E'>{userData.EctyId}</Text>
                        </Box>
                        <Divider my="2" mx="5" bg="#DFE6E9" thickness="2" />
                        {/* <Box Flex flexDirection='row' justifyContent='space-between' px={5} mt={5}>
                            <Text fonstSize='lg'>Email</Text>
                            <Text fonstSize='lg'>{userData.email}</Text>
                        </Box>
                        <Divider my="2" mx="5" bg="#DFE6E9" thickness="2" /> */}
                        {/* <Box Flex flexDirection='row' justifyContent='space-between' px={5} mt={5}>
                            <Text fonstSize='lg'>Phone</Text>
                            <Text fonstSize='lg'>fvf</Text>
                        </Box>
                        <Divider my="2" mx="5" bg="#DFE6E9" thickness="2" />
                        <Box Flex flexDirection='row' justifyContent='space-between' px={5} mt={5}>
                            <Text fonstSize='lg'>Date of Birth</Text>
                            <Text fonstSize='lg'>fvf</Text>
                        </Box>
                        <Divider my="2" mx="5" bg="#DFE6E9" thickness="2" />
                        <Box Flex flexDirection='row' justifyContent='space-between' px={5} mt={5}>
                            <Text fonstSize='lg'>Address</Text>
                            <Text fonstSize='lg'>vfv</Text>
                        </Box>
                        <Divider my="2" mx="5" bg="#DFE6E9" thickness="2" /> */}
                        <Box Flex flexDirection='row' justifyContent='space-between' px={1} mt={100}>
                            <Button mx={5} borderRadius={70} colorScheme="blue" size="sm" variant={"solid"} _text={{
                                marginLeft: 4,
                                marginRight: 4,
                                color: "white",
                                fontWeight: "bold"
                            }} px="3" onPress={() => navigation.navigate('PremiumUser')}>
                                Premium User
                            </Button>
                            <Button mx={5} borderRadius={70} colorScheme="red" size="sm" variant={"solid"} _text={{
                                marginLeft: 4,
                                marginRight: 4,
                                color: "white",
                                fontWeight: "bold"
                            }} px="3"
                                onPress={() => dispatch(removeAccesstoken())}
                            >
                                LOGOUT
                            </Button>
                        </Box>
                    </Box>
                    :
                    <Center mt={10} flexDirection='row' justifyContent='space-around'>
                        
                        <Button mx={5} borderRadius={70} width={130} colorScheme="blue" size="sm" variant={"solid"} _text={{
                            marginLeft: 4,
                            marginRight: 4,
                            color: "white",
                            fontWeight: "bold"
                        }} px="3" onPress={() => navigation.navigate('Login')}>
                            LOGIN
                        </Button>
                    </Center>

            }
        </>
    )
}