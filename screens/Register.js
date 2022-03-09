import { Box, Input, Button, Text, Center, Heading, VStack, FormControl, Link, HStack } from 'native-base'
export const Register = () => {
    return <Center w="100%">
        <Box safeArea p="2" w="90%" maxW="290" py="8">
            <Heading mt="1" color="coolGray.600">
            <Text>Register</Text>
            </Heading>
            <VStack space={3} mt="5">
                <FormControl>
                    <FormControl.Label>Username</FormControl.Label>
                    <Input />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Email</FormControl.Label>
                    <Input />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Password</FormControl.Label>
                    <Input type="password" />
                </FormControl>
                <FormControl>
                    <FormControl.Label>PhoneNumber</FormControl.Label>
                    <Input />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Address</FormControl.Label>
                    <Input />
                </FormControl>
                <Button mt="2" colorScheme="indigo">
                    Sign up
                </Button>
            </VStack>
        </Box>
    </Center>;
};