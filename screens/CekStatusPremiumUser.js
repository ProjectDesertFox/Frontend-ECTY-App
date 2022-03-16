import { Text, Box, Button, Center, AspectRatio, Image, ScrollView, VStack, Heading, Stack, Divider } from 'native-base'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Linking } from 'react-native'
// import { useRoute } from '@react-navigation/native'

export const CekStatusPremiumUser = ({ route }) => {
    // const route = useRoute();
    const [status, setStatus] = useState('')
    // const { random } = route.params
    // const [data, setData] = useState('')
    console.log("🚀 ~ file: CekStatusPremiumUser.js ~ line 11 ~ CekStatusPremiumUser ~ route.params", route.params)
    // console.log("🚀 ~ file: CekStatusPremiumUser.js ~ line 11 ~ CekStatusPremiumUser ~ route.params", route.params)

    // const router = useRoute()
    var requestOptions2 = {
        method: 'GET',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Basic U0ItTWlkLXNlcnZlci1aTWwzRGt4MmhIaWtYS2xWRUdVdFBRQkk6"
        },
        redirect: 'follow'
    };
    var requestOptions3 = {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Basic U0ItTWlkLXNlcnZlci1aTWwzRGt4MmhIaWtYS2xWRUdVdFBRQkk6"
        },
        redirect: 'follow'
    };
    function statusPayment() {
        axios.get(`https://api.sandbox.midtrans.com/v2/${route.params.random}/status`, requestOptions2)
            .then(response => {
                setStatus(response.data)
            })
            .catch(error => console.log('error', error));
    }
    function cancelPayment() {
        console.log('process cancel payment')
        axios.post(`https://api.sandbox.midtrans.com/v2/${route.params.random}/cancel`, requestOptions3)
            .then(_ => console.log('Succesful Cancel Payment'))
            .catch(error => console.log('error', error));

    }
    // useEffect(() => {
    //     try {
    //         console.log("🚀 ~ file: CekStatusPremiumUser.js ~ line 11 ~ CekStatusPremiumUser ~ route.params", route.params.random)

    //         function statusPayment() {
    //             // console.log('get status payment process <<---------')
    //             axios.get(`https://api.sandbox.midtrans.com/v2/${random}/status`, requestOptions2)
    //                 .then(response => setStatus(response.data))
    //                 .catch(error => console.log('error', error));
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }, [])

    return (
        <>
            <ScrollView>
                <VStack space="5" mt="4" px="5">
                    {/* <Text bold fontSize='xl'>{pesan} data dari screen sebelumnya</Text> */}
                    <Heading size="md">Payment Status Check</Heading>
                    <Stack mb="2.5" mt="1.5" direction="column" space={10}>
                        <Center>
                            <Heading fonstSize='xs' color='#34495E'>Order Id : {status ? status.order_id : '********'}</Heading>
                            <Heading fonstSize='xs' color='#34495E'>Status : {status ? status.transaction_status : '^^^^^^'}</Heading>
                        </Center>
                        <Center>
                            <Box mx={20} w='80%' borderRadius={30}>
                                <AspectRatio w="100%" ratio={16 / 16}>
                                    <Image source={{
                                        uri: "https://cdni.iconscout.com/illustration/premium/thumb/secure-money-transfer-2523253-2117429.png"
                                    }} alt="image" borderRadius={15} />
                                </AspectRatio>
                            </Box>
                        </Center>
                        <Center>
                            <Button mx={5} borderRadius={70} width={130} colorScheme="blue" size="sm" variant={"solid"} _text={{
                                marginLeft: 4,
                                marginRight: 4,
                                color: "white",
                                fontWeight: "bold"
                            }} px="3"
                                onPress={() => statusPayment()}>
                                Konfirmasi
                            </Button>
                            <Button mx={5} mt={8} borderRadius={70} width={130} colorScheme="red" size="sm" variant={"solid"} _text={{
                                marginLeft: 4,
                                marginRight: 4,
                                color: "white",
                                fontWeight: "bold"
                            }} px="3"
                                onPress={() => cancelPayment()}>
                                Cancel
                            </Button>
                        </Center>
                    </Stack>
                    <Divider />
                </VStack>
            </ScrollView>
        </>
    )
}
