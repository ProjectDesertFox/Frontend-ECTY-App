import { Box, Icon, Input, Image, Text, Flex, Button } from "native-base";
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from "react-native";
export const IteneraryInviteFriends = () => {
    return (
        <>
            <Box width="100%">
                <Input placeholder="Search" variant="filled" width="90%" bg="gray.200" my={3} mx={5} borderRadius={20} py={1} px={2} _web={{
                    _focus: {
                        borderColor: 'muted.300',
                        style: {
                            boxShadow: 'none'
                        }
                    }
                }} InputLeftElement={<Icon size="sm" ml={2} color="#00CEC9" as={<Ionicons name="ios-search" />} />} />
            </Box>
            <ScrollView>
                <Box Flex flexDirection="row" justifyContent="space-between" alignItems='center'>
                    <Box mx={5} my={2} Flex flexDirection="row" justifyContent="flex-start" alignItems='center'>
                        <Image
                            size={60}
                            resizeMode="cover"
                            source={{
                                uri: "https://wallpaperaccess.com/full/317501.jpg"
                            }}
                            alt={"Alternate Text"}
                            borderRadius={100} />
                        <Box ml={5} maxW="60%" overflow="hidden">
                            <Box>
                                <Text fontSize="lg" bold>Bella cantik</Text>
                            </Box>
                        </Box>
                    </Box>
                    <Button mx={5} borderRadius={70} colorScheme="red" size="sm" variant={"solid"} _text={{
                        marginLeft : 4,
                        marginRight : 4,
                        color: "white",
                        fontWeight: "bold"
                    }} px="3">
                        INVITE
                    </Button>
                </Box>
                <Box Flex flexDirection="row" justifyContent="space-between" alignItems='center'>
                    <Box mx={5} my={2} Flex flexDirection="row" justifyContent="flex-start" alignItems='center'>
                        <Image
                            size={60}
                            resizeMode="cover"
                            source={{
                                uri: "https://wallpaperaccess.com/full/317501.jpg"
                            }}
                            alt={"Alternate Text"}
                            borderRadius={100} />
                        <Box ml={5} maxW="60%" overflow="hidden">
                            <Box>
                                <Text fontSize="lg" bold>Bella cantik</Text>
                            </Box>
                        </Box>
                    </Box>
                    <Button mx={5} borderRadius={70} colorScheme="red" size="sm" variant={"solid"} _text={{
                        marginLeft : 4,
                        marginRight : 4,
                        color: "white",
                        fontWeight: "bold"
                    }} px="3">
                        INVITE
                    </Button>
                </Box>
                <Box Flex flexDirection="row" justifyContent="space-between" alignItems='center'>
                    <Box mx={5} my={2} Flex flexDirection="row" justifyContent="flex-start" alignItems='center'>
                        <Image
                            size={60}
                            resizeMode="cover"
                            source={{
                                uri: "https://wallpaperaccess.com/full/317501.jpg"
                            }}
                            alt={"Alternate Text"}
                            borderRadius={100} />
                        <Box ml={5} maxW="60%" overflow="hidden">
                            <Box>
                                <Text fontSize="lg" bold>Bella cantik</Text>
                            </Box>
                        </Box>
                    </Box>
                    <Button mx={5} borderRadius={70} colorScheme="red" size="sm" variant={"solid"} _text={{
                        marginLeft : 4,
                        marginRight : 4,
                        color: "white",
                        fontWeight: "bold"
                    }} px="3">
                        INVITE
                    </Button>
                </Box>
                <Box Flex flexDirection="row" justifyContent="space-between" alignItems='center'>
                    <Box mx={5} my={2} Flex flexDirection="row" justifyContent="flex-start" alignItems='center'>
                        <Image
                            size={60}
                            resizeMode="cover"
                            source={{
                                uri: "https://wallpaperaccess.com/full/317501.jpg"
                            }}
                            alt={"Alternate Text"}
                            borderRadius={100} />
                        <Box ml={5} maxW="60%" overflow="hidden">
                            <Box>
                                <Text fontSize="lg" bold>Bella cantik</Text>
                            </Box>
                        </Box>
                    </Box>
                    <Button mx={5} borderRadius={70} colorScheme="red" size="sm" variant={"solid"} _text={{
                        marginLeft : 4,
                        marginRight : 4,
                        color: "white",
                        fontWeight: "bold"
                    }} px="3">
                        INVITE
                    </Button>
                </Box>
                <Box Flex flexDirection="row" justifyContent="space-between" alignItems='center'>
                    <Box mx={5} my={2} Flex flexDirection="row" justifyContent="flex-start" alignItems='center'>
                        <Image
                            size={60}
                            resizeMode="cover"
                            source={{
                                uri: "https://wallpaperaccess.com/full/317501.jpg"
                            }}
                            alt={"Alternate Text"}
                            borderRadius={100} />
                        <Box ml={5} maxW="60%" overflow="hidden">
                            <Box>
                                <Text fontSize="lg" bold>Bella cantik</Text>
                            </Box>
                        </Box>
                    </Box>
                    <Button mx={5} borderRadius={70} colorScheme="red" size="sm" variant={"solid"} _text={{
                        marginLeft : 4,
                        marginRight : 4,
                        color: "white",
                        fontWeight: "bold"
                    }} px="3">
                        INVITE
                    </Button>
                </Box>
                <Box Flex flexDirection="row" justifyContent="space-between" alignItems='center'>
                    <Box mx={5} my={2} Flex flexDirection="row" justifyContent="flex-start" alignItems='center'>
                        <Image
                            size={60}
                            resizeMode="cover"
                            source={{
                                uri: "https://wallpaperaccess.com/full/317501.jpg"
                            }}
                            alt={"Alternate Text"}
                            borderRadius={100} />
                        <Box ml={5} maxW="60%" overflow="hidden">
                            <Box>
                                <Text fontSize="lg" bold>Bella cantik</Text>
                            </Box>
                        </Box>
                    </Box>
                    <Button mx={5} borderRadius={70} colorScheme="red" size="sm" variant={"solid"} _text={{
                        marginLeft : 4,
                        marginRight : 4,
                        color: "white",
                        fontWeight: "bold"
                    }} px="3">
                        INVITE
                    </Button>
                </Box>
            </ScrollView>
        </>
    )
}