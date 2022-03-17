import { Divider, Image, Center, Box, Text, Button, View, Stack, HStack, Heading } from "native-base";
import { useEffect, useState } from "react";
import { getAccessToken, getUserData, loginUser, removeAccesstoken, stepOneKtp } from "../store/actions/userActions";
import { useDispatch, useSelector } from 'react-redux'
import * as ImagePicker from 'expo-image-picker';
import Loading from "../components/loading";
import Alerting from "../components/alert";

export default function Profile({ navigation }) {
    // const [userData, setUserData] = useState([])
    let access_token = useSelector(state => state.user.access_token)
    let userData = useSelector(state => state.user.userData)
    let dispatch = useDispatch()
    const [page, setPage] = useState('Profile')
    let userLoading = useSelector(state => state.user.userLoading)
    let userError = useSelector(state => state.user.userError)
    useEffect(() => {
        dispatch(getAccessToken())
        dispatch(getUserData(access_token))
    }, [])

    const [image, setImage] = useState(null);
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.cancelled) {
            setImage(result)
            dispatch(stepOneKtp(result, setPage, access_token))
        }
    }

    return (
        <>
            {
                userLoading ?
                <Loading></Loading>
                : userError ?
                <Alerting alert={userError}></Alerting>
                : page === 'Upload KTP' ?
                <>
                    <Heading m={3} bold >UPLOAD KTP</Heading>
                    <View>
                        <Button
                            onPress={() => pickImage()}
                        >
                            Upload File
                        </Button>
                        <Center>
                            <Image
                                source={{ uri: image ? image.uri : null }}
                                style={{ width: 200, height: 200 }}
                                alt='ktp'
                                mt={50}
                            />
                        </Center>
                    </View>
                </>
                : access_token && userData ?
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
                            <Text mt={5} fontWeight='bold' color='yellow.500' bold fontSize="md"> {userData ? userData.planStatus : ''} </Text>
                        </Center>
                        <Box Flex flexDirection='row' justifyContent='space-between' px={5} mt={5}>
                            <Text fonstSize='lg'>Ecty ID</Text>
                            <Text fonstSize='lg'>{userData ? userData.EctyId : ''}</Text>
                        </Box>
                        <Divider my="2" mx="5" bg="#DFE6E9" thickness="2" />
                        <Box Flex flexDirection='row' justifyContent='space-between' px={5} mt={5}>
                            <Text fonstSize='lg'>Username</Text>
                            <Text fonstSize='lg'> {userData ? userData.username : ''}</Text>
                        </Box>
                        <Divider my="2" mx="5" bg="#DFE6E9" thickness="2" />
                        <Box Flex flexDirection='row' justifyContent='space-between' px={5} mt={5}>
                            <Text fonstSize='lg' color='#34495E'>EctyId</Text>
                            <Text fonstSize='lg' color='#34495E'>{userData ? userData.EctyId : ''}</Text>
                        </Box>
                        <Divider my="2" mx="5" bg="#DFE6E9" thickness="2" />
                        <Box Flex flexDirection='row' justifyContent='space-between' px={5} mt={5}>
                            <Text fonstSize='lg'>Email</Text>
                            <Text fonstSize='lg'>{userData ? userData.email : ''}</Text>
                        </Box>
                        <Divider my="2" mx="5" bg="#DFE6E9" thickness="2" />
                        {/* Ganti baru dari iqba diminta fifit */}
                        <Box Flex flexDirection='row' justifyContent='space-between' px={5} mt={5}>
                            <Text fonstSize='lg'>KTP</Text>
                            {
                                userData ?
                                <>
                                {
                                    userData.UserVerification.validKTP === 'false' ?
                                        <Button onPress={() => setPage('Upload KTP')} colorScheme="yellow" size="sm" variant={"solid"} _text={{
                                            color: "white",
                                            fontWeight: "bold"
                                        }} px="3"
                                        >
                                            Need Verification
                                        </Button>
                                        :
                                        <Text fonstSize='lg'>{userData.UserVerification.validKTP}</Text>
                                }
                                </>
                                :
                                null
                            }
                        </Box>
                        {/* Ganti baru dari iqba diminta fifit */}

                        <Divider my="2" mx="5" bg="#DFE6E9" thickness="2" />
                        <Stack space={2} alignItems="center">
                            <HStack space={3} alignItems="center">
                                <Box Flex flexDirection='row' justifyContent='center' px={1} mt={5}>
                                    <Button mx={5} borderRadius={70} colorScheme="yellow" size="sm" variant={"solid"} _text={{
                                        marginLeft: 4,
                                        marginRight: 4,
                                        color: "white",
                                        fontWeight: "bold"
                                    }} px="3"
                                        onPress={() => navigation.navigate('PremiumUser')}
                                    >
                                        Go Premium
                                    </Button>
                                </Box>
                                <Box Flex flexDirection='row' justifyContent='center' px={1} mt={5}>
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
                            </HStack>
                        </Stack>;
                    </Box>
                    :
                    navigation.replace('Login')
            }
        </>
    )
}