import { Divider, Image, Center, Box, Text, Button, View } from "native-base";
import { useEffect, useState } from "react";
import { getAccessToken, loginUser, removeAccesstoken, stepOneKtp } from "../store/actions/userActions";
import { useDispatch, useSelector } from 'react-redux'
// import DocumentPicker from 'react-native-document-picker';
// import { uploadFile } from '../lib/imagekit.js';
import * as DocumentPicker from 'expo-document-picker';
import * as ImagePicker from 'expo-image-picker';

export default function Profile({ navigation }) {
    //const [userData, setUserData] = useState([])
    let access_token = useSelector(state => state.user.access_token)
    let userData = useSelector(state => state.user.userData)
    let dispatch = useDispatch()
    const [page, setPage] = useState('Profile')
    useEffect(() => {
        dispatch(getAccessToken())
    }, [])
    const [image, setImage] = useState(null);
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        console.log(result)
        if (!result.cancelled) {
            setImage(result)
            dispatch(stepOneKtp(result, setPage))
        }
    }

    return (
        <>
            {
                access_token && userData && page === 'Profile' ?
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
                            <Text mt={5} fontWeight='bold' color='yellow.500' bold fontSize="md"> {userData.planStatus} </Text>
                        </Center>
                        <Box Flex flexDirection='row' justifyContent='space-between' px={5} mt={5}>
                            <Text fonstSize='lg'>Ecty ID</Text>
                            <Text fonstSize='lg'>{userData.EctyId}</Text>
                        </Box>
                        <Divider my="2" mx="5" bg="#DFE6E9" thickness="2" />
                        <Box Flex flexDirection='row' justifyContent='space-between' px={5} mt={5}>
                            <Text fonstSize='lg'>Username</Text>
                            <Text fonstSize='lg'> {userData.username}</Text>
                        </Box>
                        <Divider my="2" mx="5" bg="#DFE6E9" thickness="2" />
                        <Box Flex flexDirection='row' justifyContent='space-between' px={5} mt={5}>
                            <Text fonstSize='lg' color='#34495E'>EctyId</Text>
                            <Text fonstSize='lg' color='#34495E'>{userData.EctyId}</Text>
                        </Box>
                        <Divider my="2" mx="5" bg="#DFE6E9" thickness="2" />
                        <Box Flex flexDirection='row' justifyContent='space-between' px={5} mt={5}>
                            <Text fonstSize='lg'>Email</Text>
                            <Text fonstSize='lg'>{userData.email}</Text>
                        </Box>
                        <Divider my="2" mx="5" bg="#DFE6E9" thickness="2" />
                        <Box Flex flexDirection='row' justifyContent='space-between' px={5} mt={5}>
                            <Text fonstSize='lg'>KTP</Text>
                            {!userData.UserVerification.validKTP ?
                                <Button colorScheme="yellow" size="sm" variant={"solid"} _text={{
                                    color: "white",
                                    fontWeight: "bold"
                                }} px="3"
                                    onPress={() => setPage('Upload KTP')}
                                >
                                    Need Verification
                                </Button>
                                :
                                <Text fonstSize='lg'>{userData.UserVerification.validKTP}</Text>
                            }
                        </Box>
                        <Divider my="2" mx="5" bg="#DFE6E9" thickness="2" />
                        <Box Flex flexDirection='row' justifyContent='center' px={1} mt={5}>
                            <Button mx={5} borderRadius={70} colorScheme="blue" size="sm" variant={"solid"} _text={{
                                marginLeft: 4,
                                marginRight: 4,
                                color: "white",
                                fontWeight: "bold"
                            }} px="3"
                                onPress={() => navigation.navigate('PremiumUser')}
                            >
                                LOGOUT
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
                    </Box>
                    : page === 'Upload KTP' ?
                        <>
                            <Text>UPLOAD KTP</Text>
                            <View>
                                <Button
                                    onPress={() => pickImage()}
                                >
                                    Upload File
                                </Button>
                                <Image
                                    source={{ uri: image ? image.uri : null }}
                                    style={{ width: 50, height: 50 }}
                                    alt='hai'
                                />
                            </View>
                        </>
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