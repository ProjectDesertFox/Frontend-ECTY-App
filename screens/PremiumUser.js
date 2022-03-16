import { Text, Box, Button, Center, AspectRatio, Image, ScrollView, VStack, Heading, Stack, Divider } from 'native-base'
import React, { useEffect } from 'react'
import axios from 'axios'
import { Linking } from 'react-native'

export const PremiumUser = ({ navigation }) => {

    let random = new Date().getTime()
    console.log("🚀 ~ file: PremiumUser.js ~ line 9 ~ PremiumUser ~ random", random)

    var requestOptions2 = {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Basic U0ItTWlkLXNlcnZlci1aTWwzRGt4MmhIaWtYS2xWRUdVdFBRQkk6"
        },
        redirect: 'follow'
    };

    let requestOptions = {
        "transaction_details": {
            "order_id": `${random}`,
            "gross_amount": 10000
        },
        "credit_card": {
            "secure": true
        }
    }

    function payment() {
        // console.log('payment processss<<<<<<<')
        axios.post("https://app.sandbox.midtrans.com/snap/v1/transactions", requestOptions, requestOptions2)
            .then(response => Linking.openURL(response.data.redirect_url))
            .catch(error => console.log('error', error))
            .finally(() => navigation.navigate('CekStatusPremiumUser', {
                random: random
            }
            ));
    }

    // function payment() {
    //     console.log('proses payment')
    //     window.snap.pay('c9db8883-7eb2-49b3-b735-788175e4d15b', {
    //         onSuccess: function (result) {
    //             console.log(result);
    //         },
    //         onPending: function (result) {
    //             console.log(result);
    //         },
    //         onError: function (result) {
    //             console.log(result);
    //         }
    //     })
    // }

    return (
        <>
            <ScrollView>
                <VStack space="5" mt="4" px="5">
                    <Heading size="md">Payment</Heading>
                    <Stack mb="2.5" mt="1.5" direction="column" space={10}>
                        <Center>
                            <Text>Please press Button to Continue Process Subscribe!</Text>
                        </Center>
                        <Center>
                            <Box mx={20} w='80%' borderRadius={30}>
                                <AspectRatio w="100%" ratio={16 / 9}>
                                    <Image source={{
                                        uri: "https://cdni.iconscout.com/illustration/premium/thumb/money-transfer-3450764-2918424.png"
                                    }} alt="image" borderRadius={15} />
                                </AspectRatio>
                            </Box>
                        </Center>
                        <Center>
                            {/* <Button
                                onPress={() => {
                                    payment()
                                }}
                                mx={10} borderRadius={70} colorScheme="blue" size="lg" variant={"solid"} _text={{
                                    marginLeft: 4,
                                    marginRight: 4,
                                    color: "white",
                                    fontWeight: "bold"
                                }} px="3"
                            >
                                Pay
                            </Button> */}
                            <Button mx={5} borderRadius={70} width={130} colorScheme="blue" size="sm" variant={"solid"} _text={{
                                marginLeft: 4,
                                marginRight: 4,
                                color: "white",
                                fontWeight: "bold"
                            }} px="3"
                                onPress={() => payment()}>
                                Pay
                            </Button>

                            {/* <Button mx={5} borderRadius={70} width={130} colorScheme="red" size="sm" variant={"solid"} _text={{
                                marginLeft: 4,
                                marginRight: 4,
                                color: "white",
                                fontWeight: "bold"
                            }} px="3"
                                onPress={() => navigation.navigate('CekStatusPremiumUser', {
                                    pesan: "999999999999999 kode"
                                }
                                )}>
                                tes data
                            </Button> */}


                        </Center>
                    </Stack>
                    <Divider />
                </VStack>
            </ScrollView>
        </>
    )
}
