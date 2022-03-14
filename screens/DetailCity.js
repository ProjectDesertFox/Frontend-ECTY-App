import { ScrollView, StyleSheet } from "react-native"
import { Box, Image, Text, Button } from "native-base"

export const DetailCity = ({ navigation }) => {
    return (
        <>
            <Text style={style.sectionTitle}>Popular Destination</Text>
            <ScrollView horizontal={true}>
                <Box
                    alignSelf="center"
                    bg="gray.50"

                    borderRadius={7}
                    width={100}
                    shadow={5}
                    mx={5}
                    my={5}
                >
                    <Image
                        size={120}
                        resizeMode="cover"
                        source={{
                            uri: "https://wallpaperaccess.com/full/317501.jpg"
                        }}
                        alt={"Alternate Text"}
                        borderRadius={10} />
                </Box>
                <Box
                    alignSelf="center"
                    bg="gray.50"

                    borderRadius={7}
                    width={100}
                    shadow={5}
                    mx={5}
                    my={5}
                >
                    <Image
                        size={120}
                        resizeMode="cover"
                        source={{
                            uri: "https://wallpaperaccess.com/full/317501.jpg"
                        }}
                        alt={"Alternate Text"}
                        borderRadius={10} />
                </Box>
                <Box
                    alignSelf="center"
                    bg="gray.50"

                    borderRadius={7}
                    width={100}
                    shadow={5}
                    mx={5}
                    my={5}
                >
                    <Image
                        size={120}
                        resizeMode="cover"
                        source={{
                            uri: "https://wallpaperaccess.com/full/317501.jpg"
                        }}
                        alt={"Alternate Text"}
                        borderRadius={10} />
                </Box>
            </ScrollView>
            <Text style={style.sectionTitle}>Explore Destination</Text>
            <ScrollView>
                {/* card Destination */}
                <Box
                    alignSelf="center"
                    bg="gray.50"

                    borderRadius={7}
                    width="95%"
                    shadow={5}
                    marginTop={5}
                >
                    <Box mx={5} my={5} Flex flexDirection="row" justifyContent="flex-start">
                        <Image
                            size={120}
                            resizeMode="cover"
                            source={{
                                uri: "https://wallpaperaccess.com/full/317501.jpg"
                            }}
                            alt={"Alternate Text"}
                            borderRadius={10} />
                        <Box ml={7} Flex direction="column" justifyContent="space-between">
                            <Box>
                                <Text fontSize="lg" bold>Hotel Sengigi</Text>
                                <Text fontSize="xs"> Lombok, Indonesia</Text>
                                <Text fontSize="xs" italic> (1.2 km) </Text>
                            </Box>
                            <Box>
                                <Text fontSize="md" bold>Rp. 1.000.000</Text>
                                <Text fontSize="xs" italic> Rating Bintang</Text>
                                <Button borderRadius={50} mt={3} colorScheme="red" size="sm" _text={{
                                    marginLeft: 4,
                                    marginRight: 4,
                                    color: "white",
                                    fontWeight: "bold",
                                    fontSize: "xs"
                                }}
                                    onPress={() => navigation.navigate('DetailDestination')}
                                >Detail</Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box
                    alignSelf="center"
                    bg="gray.50"

                    borderRadius={7}
                    width="95%"
                    shadow={5}
                    marginTop={5}
                >
                    <Box mx={5} my={5} Flex flexDirection="row" justifyContent="flex-start">
                        <Image
                            size={120}
                            resizeMode="cover"
                            source={{
                                uri: "https://wallpaperaccess.com/full/317501.jpg"
                            }}
                            alt={"Alternate Text"}
                            borderRadius={10} />
                        <Box ml={7} Flex direction="column" justifyContent="space-between">
                            <Box>
                                <Text fontSize="lg" bold>Hotel Sengigi</Text>
                                <Text fontSize="xs"> Lombok, Indonesia</Text>
                                <Text fontSize="xs" italic> (1.2 km) </Text>
                            </Box>
                            <Box>
                                <Text fontSize="md" bold>Rp. 1.000.000</Text>
                                <Text fontSize="xs" italic> Rating Bintang</Text>
                                <Button borderRadius={50} mt={3} colorScheme="red" size="sm" _text={{
                                    marginLeft: 4,
                                    marginRight: 4,
                                    color: "white",
                                    fontWeight: "bold",
                                    fontSize: "xs"
                                }}
                                    onPress={() => navigation.navigate('DetailDestination')}
                                >Detail</Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box
                    alignSelf="center"
                    bg="gray.50"

                    borderRadius={7}
                    width="95%"
                    shadow={5}
                    marginTop={5}
                >
                    <Box mx={5} my={5} Flex flexDirection="row" justifyContent="flex-start">
                        <Image
                            size={120}
                            resizeMode="cover"
                            source={{
                                uri: "https://wallpaperaccess.com/full/317501.jpg"
                            }}
                            alt={"Alternate Text"}
                            borderRadius={10} />
                        <Box ml={7} Flex direction="column" justifyContent="space-between">
                            <Box>
                                <Text fontSize="lg" bold>Hotel Sengigi</Text>
                                <Text fontSize="xs"> Lombok, Indonesia</Text>
                                <Text fontSize="xs" italic> (1.2 km) </Text>
                            </Box>
                            <Box>
                                <Text fontSize="md" bold>Rp. 1.000.000</Text>
                                <Text fontSize="xs" italic> Rating Bintang</Text>
                                <Button borderRadius={50} mt={3} colorScheme="red" size="sm" _text={{
                                    marginLeft: 4,
                                    marginRight: 4,
                                    color: "white",
                                    fontWeight: "bold",
                                    fontSize: "xs"
                                }}
                                    onPress={() => navigation.navigate('DetailDestination')}
                                >Detail</Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </ScrollView>
        </>
    )
}

const style = StyleSheet.create({
    sectionTitle: {
        marginHorizontal: 20,
        marginVertical: 20,
        fontWeight: 'bold',
        fontSize: 18
    }

})