import { Divider, Image, Center, Box, Text, AspectRatio, Stack, HStack, ScrollView, Progress, Button } from "native-base";
// import { Button } from "react-native";
// import React, { useState } from 'react';
// import { StyleSheet, Dimensions } from "react-native";
// import MapView, { Callout, Circle, Marker } from "react-native-maps"

// const { width } = Dimensions.get('screen');
// const [ pin, setPin ] = React.useState({
//     latitude: 37.78825,
//     longitude: -122.4324
// })
// const [ region, setRegion ] = React.useState({
//     latitude: 37.78825,
//     longitude: -122.4324,
//     latitudeDelta: 0.0922,
//     longitudeDelta: 0.0421
// })
export const DetailDestination = ({ navigation }) => {
    return (
        <>
            <ScrollView>
                <Center>
                    {/* <Image
                        size={200}
                        resizeMode="cover"
                        source={{
                            uri: "https://wallpaperaccess.com/full/317501.jpg"
                        }}
                        alt={"Alternate Text"}
                    /> */}
                    <AspectRatio w="100%" ratio={16 / 9}>
                        <Image source={{
                            uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
                        }} alt="image" />
                    </AspectRatio>
                </Center>
                <Box mx={4} my={2}>
                    {/* Title */}
                    <Box>
                        <Text fontSize='3xl' bold>Mandarin Oriental</Text>
                    </Box>
                    {/* Location */}
                    <Box flexDirection='row' justifyContent='flex-start'>
                        <Text fontSize='xs'>Bang Rak, Bangkok</Text>
                        <Text marginLeft={3} fontSize='xs'>(1,2 km) 48 Oriental Ave</Text>
                    </Box>
                    {/* price */}
                    <Box my={1} flexDirection='row' justifyContent='flex-end'>
                        <Box flexDirection='column'>
                            <Box flexDirection='row' justifyContent='flex-end'>
                                <Text flexDirection='row' justifyContent='flex-end' fontSize='2xl' bold>Rp 1.000.000</Text>
                            </Box>
                            <Box my={-1} flexDirection='row' justifyContent='flex-end'>
                                <Text fontSize='sm'>Per Night</Text>
                            </Box>
                        </Box>
                    </Box>
                    <Divider my="2" bg="#DFE6E9" thickness="4" />

                    {/* Destination Detail */}
                    <Box>
                        <Text color='#34495E' fontSize='lg' bold >Destination Detail</Text>
                        {/* <Heading color='red'>Destination Detail</Heading> */}
                        <Text color='#34495E' fontSize='sm'>This luxury and well-known hotel overlooking the Chao Phraya river is a 3-minute walk from the nearest ferry stop</Text>
                    </Box>
                    {/* Rating */}
                    {/* <Box my={3} shadow={2}>
                        <Text color='#34495E' fontSize='lg' bold>Rating</Text>
                    </Box> */}

                    {/* BOx card */}
                    <Box alignItems="center" my={3} w="100%">
                        <Box rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                            borderColor: "coolGray.600",
                            backgroundColor: "gray.700"
                        }} _web={{
                            shadow: 2,
                            borderWidth: 0
                        }} _light={{
                            backgroundColor: "gray.50"
                        }}>
                            <Box>
                                {/* <AspectRatio w="100%" ratio={16 / 9}>
                                    <Image source={{
                                        uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
                                    }} alt="image" />
                                </AspectRatio> */}
                                <Center bg="violet.500" _dark={{
                                    bg: "violet.400"
                                }} _text={{
                                    color: "warmGray.50",
                                    fontWeight: "700",
                                    fontSize: "xs"
                                }} position="absolute" bottom="0" px="3" py="1.5">
                                    PHOTOS
                                </Center>
                            </Box>
                            <Stack p="4" space={3}>
                                <Stack space={2}>
                                    {/* <Heading size="md" ml="-1">
                                        The Garden City
                                    </Heading> */}
                                    <Box flexDirection='row' justifyContent='flex-start'>
                                        <Text color='#000000' fontSize='4xl' bold>4,7</Text>
                                        <Box mx={3} my={2}>
                                            <Text color='#000000' fontSize='sm'>Review Summary</Text>
                                            <Text color='#00CEC9' fontSize='sm' fontWeight='semibold'># # # # #</Text>
                                        </Box>
                                    </Box>

                                    {/* <Text fontSize="xs" _light={{
                                        color: "violet.500"
                                    }} _dark={{
                                        color: "violet.400"
                                    }} fontWeight="500" ml="-0.5" mt="-1">
                                        The Silicon Valley of India.
                                    </Text> */}
                                </Stack>
                                {/* <Text fontWeight="400">
                                    Bengaluru (also called Bangalore) is the center of India's high-tech
                                    industry. The city is also known for its parks and nightlife.
                                </Text> */}
                                {/* Rating  5 4 3 2 1 */}
                                <Box>
                                    <Box flexDirection='row' justifyContent='flex-start' alignItems='center'>
                                        <Text bold>
                                            5
                                        </Text>
                                        <Text mx={3} bold color='#00CEC9'>
                                            #
                                        </Text>
                                        <Box w="90%" maxW="400">
                                            <Progress value={90} mx="4" />
                                        </Box>
                                    </Box>
                                    <Box flexDirection='row' justifyContent='flex-start' alignItems='center'>
                                        <Text bold>
                                            4
                                        </Text>
                                        <Text mx={3} bold color='#00CEC9'>
                                            #
                                        </Text>
                                        <Box w="90%" maxW="400">
                                            <Progress value={60} mx="4" />
                                        </Box>
                                    </Box>
                                    <Box flexDirection='row' justifyContent='flex-start' alignItems='center'>
                                        <Text bold>
                                            3
                                        </Text>
                                        <Text mx={3} bold color='#00CEC9'>
                                            #
                                        </Text>
                                        <Box w="90%" maxW="400">
                                            <Progress value={40} mx="4" />
                                        </Box>
                                    </Box>
                                    <Box flexDirection='row' justifyContent='flex-start' alignItems='center'>
                                        <Text bold>
                                            2
                                        </Text>
                                        <Text mx={3} bold color='#00CEC9'>
                                            #
                                        </Text>
                                        <Box w="90%" maxW="400">
                                            <Progress value={20} mx="4" />
                                        </Box>
                                    </Box>
                                    <Box flexDirection='row' justifyContent='flex-start' alignItems='center'>
                                        <Text bold>
                                            1
                                        </Text>
                                        <Text mx={3} bold color='#00CEC9'>
                                            #
                                        </Text>
                                        <Box w="90%" maxW="400">
                                            <Progress value={10} mx="4" />
                                        </Box>
                                    </Box>
                                </Box>
                                {/* <HStack alignItems="center" space={4} justifyContent="space-between">
                                    <HStack alignItems="center">
                                        <Text color="coolGray.600" _dark={{
                                            color: "warmGray.200"
                                        }} fontWeight="400">
                                            6 mins ago
                                        </Text>
                                    </HStack>
                                </HStack> */}
                            </Stack>
                        </Box>
                    </Box>

                    {/* Maps awal */}
                    {/* <MapView
                        style={style.map}
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421
                        }}
                        provider="google"
                    >
                        <Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }} />
                        <Marker
                            coordinate={pin}
                            pinColor="black"
                            draggable={true}
                            onDragStart={(e) => {
                                console.log("Drag start", e.nativeEvent.coordinates)
                            }}
                            onDragEnd={(e) => {
                                setPin({
                                    latitude: e.nativeEvent.coordinate.latitude,
                                    longitude: e.nativeEvent.coordinate.longitude
                                })
                            }}
                        >
                            <Callout>
                                <Text>I'm here</Text>
                            </Callout>
                        </Marker>
                        <Circle center={pin} radius={1000} />
                    </MapView> */}
                    {/* Maps akhir */}

                    {/* tombol add to itenarary */}
                    <Button mx={5} borderRadius={70} colorScheme="blue" size="sm" variant={"solid"} _text={{
                        marginLeft: 4,
                        marginRight: 4,
                        color: "white",
                        fontWeight: "bold"
                    }} px="3"
                        onPress={() => navigation.navigate('Root', { screen: 'Tes' })}
                    >
                        ADD TO ITENERARY

                    </Button>
                    {/* <Button
                        title='go to Tes'
                        onPress={() => navigation.navigate('Root', { screen: 'Tes' })}
                    /> */}
                </Box>
            </ScrollView>
        </>
    )
}
