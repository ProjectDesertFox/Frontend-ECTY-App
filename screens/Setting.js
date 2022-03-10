import { Divider, Image, Center, Box, Text, Button } from "native-base";
export default function Profile (props) {
    return (
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
                <Text mt={5} fontWeight='bold' color='yellow.500' bold fontSize="md"> Premium </Text>
            </Center>
            <Box Flex flexDirection='row' justifyContent='space-between' px={5} mt={5}>
                <Text fonstSize='lg'>Username</Text>
                <Text fonstSize='lg'>IqbalSanusi</Text>
            </Box>
            <Divider my="2" mx="5" bg="#DFE6E9" thickness="2" />
            <Box Flex flexDirection='row' justifyContent='space-between' px={5} mt={5}>
                <Text fonstSize='lg'>Email</Text>
                <Text fonstSize='lg'>desert@fox.com</Text>
            </Box>
            <Divider my="2" mx="5" bg="#DFE6E9" thickness="2" />
            <Box Flex flexDirection='row' justifyContent='space-between' px={5} mt={5}>
                <Text fonstSize='lg'>Phone</Text>
                <Text fonstSize='lg'>0812345678910</Text>
            </Box>
            <Divider my="2" mx="5" bg="#DFE6E9" thickness="2" />
            <Box Flex flexDirection='row' justifyContent='space-between' px={5} mt={5}>
                <Text fonstSize='lg'>Date of Birth</Text>
                <Text fonstSize='lg'>12-12-2022</Text>
            </Box>
            <Divider my="2" mx="5" bg="#DFE6E9" thickness="2" />
            <Box Flex flexDirection='row' justifyContent='space-between' px={5} mt={5}>
                <Text fonstSize='lg'>Address</Text>
                <Text fonstSize='lg'>Canberra ACT2601, Australia</Text>
            </Box>
            <Divider my="2" mx="5" bg="#DFE6E9" thickness="2" />
            <Box Flex flexDirection='row' justifyContent='space-between' px={5} mt={5}>
                {/* <Button colorScheme="success"
                onPress={() => navigation.navigate("Login", {
                })}
                >
                    Login
                </Button> */}
                <Button colorScheme="success">
                    Register
                </Button>
            </Box>
        </Box>
    )
}