import { Divider, Image, Center, Box, Text, AspectRatio, Stack, HStack, ScrollView, Progress, Button } from "native-base";
const destination = require('../data/destination.json')
const hotel = require('../data/hotel.json')
export const DetailDestination = ({ navigation, route }) => {
    console.log(route)
    const idDestination = route.params.id
    const idHotel = route.params.id

    const type = route.params.otherParam
    console.log(idHotel)
    const destinationFilter = destination.filter((e) => {
        return e.id === idDestination
    })

    const hotelFilter = hotel.filter((e) => {
        return e.id === idHotel
    })

    return (
        <>
            {
                type === "destination" ?
                <ScrollView>
                <Center>
                    <AspectRatio w="100%" ratio={16 / 9}>
                        <Image source={{
                            uri: destinationFilter[0].image
                        }} alt="image" />
                    </AspectRatio>
                </Center>
                <Box mx={4} my={2}>
                    {/* Title */}
                    <Box>
                        <Text fontSize='3xl' bold>{destinationFilter[0].destinationName}</Text>
                    </Box>
                    {/* Location */}
                    <Box flexDirection='row' justifyContent='flex-start'>
                        <Text fontSize='xs'>{destinationFilter[0].city}</Text>
                    </Box>
                    {/* price */}
                    <Box my={1} flexDirection='row' justifyContent='flex-end'>
                        <Box flexDirection='column'>
                            <Box flexDirection='row' justifyContent='flex-end'>
                                <Text flexDirection='row' justifyContent='flex-end' fontSize='2xl' bold>Rp.{destinationFilter[0].pricePerOrg}</Text>
                            </Box>
                            <Box my={-1} flexDirection='row' justifyContent='flex-end'>
                                <Text fontSize='sm'>Per Person</Text>
                            </Box>
                        </Box>
                    </Box>
                    <Divider my="2" bg="#DFE6E9" thickness="4" />

                    {/* Destination Detail */}
                    <Box>
                        <Text color='#34495E' fontSize='lg' bold >Destination Detail</Text>
                        {/* <Heading color='red'>Destination Detail</Heading> */}
                        <Text color='#34495E' fontSize='sm'>{destinationFilter[0].description}</Text>
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
                                        <Text color='#000000' fontSize='4xl' bold>{destinationFilter[0].rating}</Text>
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
            :
            // <Text>{JSON.stringify(hotelFilter)}</Text>

                <ScrollView>
                <Center>
                    <AspectRatio w="100%" ratio={16 / 9}>
                        <Image source={{
                            uri: hotelFilter[0].imageHotel
                        }} alt="image" />
                    </AspectRatio>
                </Center>
                <Box mx={4} my={2}>
                    {/* Title */}
                    <Box>
                        <Text fontSize='3xl' bold>{hotelFilter[0].nameHotel}</Text>
                    </Box>
                    {/* Location */}
                    <Box flexDirection='row' justifyContent='flex-start'>
                        <Text fontSize='xs'>{hotelFilter[0].city}</Text>
                    </Box>
                    {/* price */}
                    <Box my={1} flexDirection='row' justifyContent='flex-end'>
                        <Box flexDirection='column'>
                            <Box flexDirection='row' justifyContent='flex-end'>
                                <Text flexDirection='row' justifyContent='flex-end' fontSize='2xl' bold>Rp.{hotelFilter[0].price}</Text>
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
                        <Text color='#34495E' fontSize='sm'>{hotelFilter[0].description}</Text>
                    </Box>
                    <Box>
                        <Text color='#34495E' fontSize='md' bold >Facilities</Text>
                        {/* <Heading color='red'>Destination Detail</Heading> */}
                        <Text color='#34495E' fontSize='sm'>{hotelFilter[0].facilities}</Text>
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
                                        <Text color='#000000' fontSize='4xl' bold>{hotelFilter[0].rating}</Text>
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
                                            <Progress value={80} mx="4" />
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
                                            <Progress value={50} mx="4" />
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
                                            <Progress value={30} mx="4" />
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
                    {/* ini adalah add to ititenrary kalau jadi dijalankan */}
                    {/* <Button mx={5} borderRadius={70} colorScheme="blue" size="sm" variant={"solid"} _text={{
                        marginLeft: 4,
                        marginRight: 4,
                        color: "white",
                        fontWeight: "bold"
                    }} px="3"
                        onPress={() => navigation.navigate('Root', { screen: 'Tes' })}
                    >
                        ADD TO ITENERARY
                    </Button> */}
                    {/* <Button
                        title='go to Tes'
                        onPress={() => navigation.navigate('Root', { screen: 'Tes' })}
                    /> */}
                </Box>
                </ScrollView>
            }
         
        </>
    )
}
