import { Box, Input, Button, Text, Center, Heading, VStack, FormControl, Link, HStack } from 'native-base'
import React, {useState} from 'react';
export  const Login = ({navigation}) => {
    const [value, setValue] = useState({email: '', password: ''})
    
    return <Center w="100%">
        <Text>{JSON.stringify(value)}</Text>
        <Box safeArea p="2" py="8" w="90%" maxW="290">
            <Heading mt="1">
            <Text>Log In</Text>
            </Heading>
            <VStack space={3} mt="5">
                <FormControl>
                    <FormControl.Label>Email</FormControl.Label>
                    <Input />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Password</FormControl.Label>
                    <Input type="password" />
                </FormControl>
                <Button mt="2" colorScheme="indigo">
                    Sign in
                </Button>
                <HStack mt="6" justifyContent="center">
                    <Text fontSize="sm" color="coolGray.600" _dark={{
                        color: "warmGray.200"
                    }}>
                        Don't have an account yet? . {" "}
                    </Text>
                <Text onPress={() => navigation.navigate('Settings')}>Sign up</Text>
                </HStack>
            </VStack>
        </Box>
    </Center>;
};