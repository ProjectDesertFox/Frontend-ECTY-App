import { Divider, Image, Center, Box, Text, Button } from "native-base";
import { useEffect, useState } from "react";
import { getAccessToken, loginUser, removeAccesstoken } from "../store/actions/userActions";
import { useDispatch, useSelector } from 'react-redux'

export default function Profile({ navigation }) {
    let access_token = useSelector(state => state.user.access_token)
    let dispatch = useDispatch()
    console.log(access_token)

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
                            <Text mt={5} fontWeight='bold' color='yellow.500' bold fontSize="md"> Premium </Text>
                        </Center>
                        <Box Flex flexDirection='row' justifyContent='space-between' px={5} mt={5}>
                            <Text fonstSize='lg'>Username</Text>
                            <Text fonstSize='lg'> ff</Text>
                        </Box>
                        <Divider my="2" mx="5" bg="#DFE6E9" thickness="2" />
                        <Box Flex flexDirection='row' justifyContent='space-between' px={5} mt={5}>
                            <Text fonstSize='lg'>Email</Text>
                            <Text fonstSize='lg'>ff</Text>
                        </Box>
                        <Divider my="2" mx="5" bg="#DFE6E9" thickness="2" />
                        <Box Flex flexDirection='row' justifyContent='space-between' px={5} mt={5}>
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
                        <Divider my="2" mx="5" bg="#DFE6E9" thickness="2" />
                        <Box Flex flexDirection='row' justifyContent='space-between' px={1} mt={5}>
                            {/* <Button mx={5} borderRadius={70} colorScheme="red" size="sm" variant={"solid"} _text={{
                                marginLeft: 4,
                                marginRight: 4,
                                color: "white",
                                fontWeight: "bold"
                            }} px="3" onPress={() => navigation.navigate('Login')}>
                                LOGIN
                            </Button> */}
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
                    <Center mt={10}>
                        <Button mx={5} borderRadius={70} width={130} colorScheme="red" size="sm" variant={"solid"} _text={{
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