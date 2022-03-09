import { Box, Input, Button, Text, Center, Heading, VStack, FormControl, Link, HStack } from 'native-base'
import React, { useState, useEffect } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import CodePin from 'react-native-pin-code'

export const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [code, setCode] = useState('')
    function verifyEmail(){
        console.log(email)
    }

    return (
    <>
    <ScrollView>

    <Center w="100%">
        <Box safeArea p="2" w="90%" maxW="290" py="8">
            <Heading mt="1" color="coolGray.600">
            <Text>1. Register Your Active Email</Text>
            </Heading>
            <VStack space={3} mt="5">
                <FormControl>
                    <FormControl.Label>Email</FormControl.Label>
                    <Input placeholder="Insert your email" value={email} onChangeText={setEmail}/>
                </FormControl>
                <Button onPress={() => verifyEmail()} mt="2" colorScheme="indigo">
                    Submit
                </Button>
            </VStack>
        </Box>

        <CodePin
        code="2000" // code.length is used if you not pass number prop
        success={() => console.log('hurray!')} // If user fill '2018', success is called
        text="2. Please Insert The 4 Digit OTP That Was Sent To Your Email" // My title
        error="You fail" // If user fail (fill '2017' for instance)
        autoFocusFirst={false} // disabling auto-focus
        />

        <Box safeArea p="2" w="90%" maxW="290" py="8">
            <Heading mt="1" color="coolGray.600">
            <Text>3. Register Your ECTY Account!</Text>
            </Heading>
            <VStack space={3} mt="5">
                <FormControl>
                    <FormControl.Label>Username</FormControl.Label>
                    <Input placeholder="Insert your username" value={username} onChangeText={setUsername} />
                </FormControl>
                <FormControl>
                    <FormControl.Label>Email</FormControl.Label>
                    <Input type="email" value={email} isDisabled="true"/>
                </FormControl>
                <FormControl>
                    <FormControl.Label>Password</FormControl.Label>
                    <Input type="password" value={password} onChangeText={setPassword} />
                </FormControl>
                <Button mt="2" colorScheme="indigo">
                    Sign up
                </Button>
            </VStack>
        </Box>
    </Center>
    </ScrollView>
    </>
    )
};