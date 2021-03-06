import { Box, Input, Button, Text, Center, Heading, VStack, FormControl, Link, HStack } from 'native-base'
import React, {useState, useEffect} from 'react';
import { getAccessToken, loginUser, userError } from '../store/actions/userActions';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../components/loading'
import Alerting from '../components/alert';
export  const Login = ({navigation}) => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const userLoading = useSelector(state => state.user.userLoading)
    const userError = useSelector(state => state.user.userError)

    useEffect(() => {
        dispatch(getAccessToken())
    }, [])
    async function login(){
        dispatch(loginUser(email, password, navigation))
    }

    return (
        <>
        {
            userLoading ?
            <Loading></Loading>
            : userError ?
            <Alerting alert={userError}></Alerting>
            :
            <Center w="100%">
            <Box safeArea p="2" py="8" w="90%" maxW="290">
                <Heading mt="1">
                <Text>Log In</Text>
                </Heading>
                <VStack space={3} mt="5">
                    <FormControl>
                        <FormControl.Label>Email</FormControl.Label>
                        <Input placeholder="Insert your email" value={email} onChangeText={setEmail}/>
                    </FormControl>
                    <FormControl>
                        <FormControl.Label>Password</FormControl.Label>
                        <Input type="password" placeholder="Insert your password" value={password} onChangeText={setPassword} />
                    </FormControl>
                    <Button onPress={() => login()} mt="2" colorScheme="indigo">
                        Sign in
                    </Button>
                    <HStack mt="6" justifyContent="center">
                        <Text fontSize="sm" color="coolGray.600" _dark={{
                            color: "warmGray.200"
                        }}>
                            Don't have an account yet?{" "}
                        </Text>
                    <Text style={{color:'red'}} onPress={() => navigation.navigate('Register')}>Sign up</Text>
                    </HStack>
                </VStack>
            </Box>
            </Center>
        }
        </>
    )
};