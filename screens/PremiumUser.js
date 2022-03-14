import { Text, Box, Button, Center, AspectRatio, Image, ScrollView, VStack, Heading, Stack, Divider } from 'native-base'
import React from 'react'

export default function PremiumUser() {
    return (
        <>
            {/* <Text mx={4} my={2} fontSize='2xl' bold>Payment</Text>
            <Box mx={4} my={2}>
                <Text>Please press Button to Continue Process Subscribe</Text>
            </Box>

            <Center>
                <Box mx={20} w='80%' borderRadius={30}>
                    <AspectRatio w="100%" ratio={16 / 9}>
                        <Image source={{
                            uri: "https://cdni.iconscout.com/illustration/premium/thumb/money-transfer-3450764-2918424.png"
                        }} alt="image" borderRadius={15} />
                    </AspectRatio>
                </Box>
            </Center>

            <Box>
                <Button mx={10} borderRadius={70} colorScheme="blue" size="lg" variant={"solid"} _text={{
                    marginLeft: 4,
                    marginRight: 4,
                    color: "white",
                    fontWeight: "bold"
                }} px="3">
                    Pay
                </Button>
            </Box> */}

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
                            <Button mx={10} borderRadius={70} colorScheme="blue" size="lg" variant={"solid"} _text={{
                                marginLeft: 4,
                                marginRight: 4,
                                color: "white",
                                fontWeight: "bold"
                            }} px="3">
                                Pay
                            </Button>
                        </Center>
                        {/* <Center size="16" bg="primary.400" rounded="sm" _text={{
                            color: "warmGray.50",
                            fontWeight: "medium"
                        }} shadow={"3"}>
                            Box 1
                        </Center>
                        <Center bg="primary.500" size="16" rounded="sm" _text={{
                            color: "warmGray.50",
                            fontWeight: "medium"
                        }} shadow={"3"}>
                            Box 2
                        </Center>
                        <Center size="16" bg="primary.700" rounded="sm" _text={{
                            color: "warmGray.50",
                            fontWeight: "medium"
                        }} shadow={"3"}>
                            Box 3
                        </Center> */}
                    </Stack>
                    <Divider />
                </VStack>
            </ScrollView>
        </>
    )
}
