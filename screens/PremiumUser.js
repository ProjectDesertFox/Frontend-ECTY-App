import { Text, Box, Button, Center, AspectRatio, Image, ScrollView, VStack, Heading, Stack, Divider } from 'native-base'
import React, { useEffect } from 'react'
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';

export const PremiumUser = () => {

    // window.snap.pay(snapToken, options)
    // let snap = new midtransClient.Snap({
    //     isProduction: false,
    //     serverKey: 'SB-Mid-server-ZMl3Dkx2hHikXKlVEGUtPQBI',
    //     clientKey: 'SB-Mid-client-yoFuSTXX_dIFM7mu'
    // });

    // let parameter = {
    //     "transaction_details": {
    //         "order_id": "2",
    //         "gross_amount": 100000
    //     }, "bank": {
    //         "secure": true
    //     }
    // };
    // <script src="https://app.sandbox.midtrans.com/snap/snap.js"></script>

    // useEffect(() => {
    //     const snapSrcUrl = 'https://app.sandbox.midtrans.com/snap/snap.js';
    //     const myMidtransClientKey = 'SB-Mid-client-yoFuSTXX_dIFM7mu'; //change this according to your client-key

    //     const script = React.createElement('script');
    //     script.src = snapSrcUrl;
    //     script.setAttribute('data-client-key', myMidtransClientKey);
    //     script.async = true;

    //     React.body.appendChild(script);

    //     return () => {
    //         React.body.removeChild(script);
    //     }
    // }, []);

    function payment() {
        console.log('proses payment')
        window.snap.pay('c9db8883-7eb2-49b3-b735-788175e4d15b', {
            onSuccess: function (result) {
                console.log(result);
            },
            onPending: function (result) {
                console.log(result);
            },
            onError: function (result) {
                console.log(result);
            }
        })
    }

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

                        </Center>
                    </Stack>
                    <Divider />
                </VStack>
            </ScrollView>
        </>
    )
}
