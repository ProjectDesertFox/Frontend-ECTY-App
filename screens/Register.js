import { Box, Input, Button, Text, Center, Heading, VStack, FormControl, Link, HStack } from 'native-base'
import React, { useState, useEffect } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import CodePin from 'react-native-pin-code'
import { checkUserVerification, stepOneEmail, stepThreeRegisterAccount, stepTwoVerifyEmail } from '../store/actions/userActions';
import { useSelector, useDispatch } from 'react-redux';

export const Register = ({ navigation }) => {
    const dispatch = useDispatch()
    //for verification
    const [email, setEmail] = useState('')
    const status = useSelector(state => state.user.statusValidEmail)
    const userEmailCode = useSelector(state => state.user.userEmailCode)
    //for registering account
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function stepOne() { //sending email to verify
        let check = await dispatch(checkUserVerification(email))
        if (!check) {
            let stepOne = dispatch(stepOneEmail(email))
        }
    }

    function stepTwoSuccess() { //verifying email
        let stepTwo = dispatch(stepTwoVerifyEmail(email, userEmailCode))
    }

    function stepThree() { //registering account
        dispatch(stepThreeRegisterAccount(username, email, password))
    }

    return (
        <>
            <ScrollView>
                <Center w="100%">
                    <Box safeArea p="2" w="90%" maxW="290" py="8">
                        {
                            status === '1' ?
                                <>
                                    <Heading mt="1" color="coolGray.600">
                                        <Text>1. Register Your Active Email</Text>
                                    </Heading>
                                    <VStack space={3} mt="5">
                                        <FormControl>
                                            <FormControl.Label>Email</FormControl.Label>
                                            <Input placeholder="Insert your email" value={email} onChangeText={setEmail} />
                                        </FormControl>
                                        <Button onPress={() => stepOne()} mt="2" colorScheme="indigo">
                                            Submit
                                        </Button>
                                    </VStack>
                                </>
                                : status === '2' ?
                                    <CodePin
                                        code={userEmailCode} // code.length is used if you not pass number prop
                                        success={() => stepTwoSuccess()} // If user fill '2018', success is called
                                        text="2. Please Insert The 4 Digit OTP That Was Sent To Your Email" // My title
                                        error="Wrong OTP" // If user fail (fill '2017' for instance)
                                        autoFocusFirst={false} // disabling auto-focus
                                    />
                                    : status === '3' ?
                                        <>
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
                                                    <Input type="email" value={email} isDisabled="true" />
                                                </FormControl>
                                                <FormControl>
                                                    <FormControl.Label>Password</FormControl.Label>
                                                    <Input type="password" value={password} onChangeText={setPassword} />
                                                </FormControl>
                                                <Button onPress={() => stepThree()} mt="2" colorScheme="indigo">
                                                    Sign up
                                                </Button>
                                            </VStack>
                                        </>
                                        : status === 'done' ?
                                            <Center>
                                                <Text>You Already Have Ecty Account!</Text>
                                                <Button onPress={() => navigation.navigate('Login')} mt="2" colorScheme="indigo">
                                                    Log In
                                                </Button>
                                            </Center>
                                            :
                                            null
                        }
                    </Box>
                </Center>
            </ScrollView>
        </>
    )
};