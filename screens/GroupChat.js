import { Text, Box, Icon, ScrollView, VStack, Heading, Input, ZStack, Center } from 'native-base'
import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react'
import io from "socket.io-client";

const socket = io("https://ecty-backend.herokuapp.com/");

export const GroupChat = () => {

    // function Chat({ }) {
    const [currentMessage, setCurrentMessage] = useState("");
    const [messageList, setMessageList] = useState([]);

    function sendMessage() {
        if (currentMessage !== "") {
            const messageData = {
                room: 12,
                author: 'desert',
                message: currentMessage,
                time: new Date(Date.now()).getHours() +
                    ":" +
                    new Date(Date.now()).getMinutes(),
            };

            socket.emit("send_message", messageData);
            setMessageList((list) => [...list, messageData]);
            setCurrentMessage("");
        }
    }
    // }

    useEffect(() => {
        socket.on("receive_message", (data) => {
            setMessageList((list) => [...list, data]);
        });
    }, [socket])

    return (
        <>
            <ScrollView>
                <Heading size="md" mt={3} ml={3}>Group Chat</Heading>
                <VStack space="2" mt="4" px="2">

                    {messageList.map((e, index) => {
                        return (
                            <Box key={index} flexDirection='column' justifyContent='flex-start'>
                                <Box alignSelf="center" width='85%' bg="lightBlue.300" p={3} borderRadius={20} _text={{
                                    fontSize: "sm",
                                    fontWeight: "medium",
                                    color: "#000000",
                                    letterSpacing: "lg"
                                }}>
                                    {e.message}
                                </Box>
                                <Box flexDirection='row' justifyContent='flex-end' alignSelf="center" width='90%' p={3} borderRadius={15} _text={{
                                    fontSize: "xs",
                                    fontWeight: "medium",
                                    color: "#000000",
                                    letterSpacing: "lg"
                                }}>
                                    3 : 00 PM
                                </Box>
                            </Box>
                        )
                    })
                    }

                    {/* <Box flexDirection='column' justifyContent='flex-start'>
                        <Box alignSelf="center" width='85%' bg="lightBlue.300" p={3} borderRadius={20} _text={{
                            fontSize: "sm",
                            fontWeight: "medium",
                            color: "#000000",
                            letterSpacing: "lg"
                        }}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis aliquid libero nihil quis tenetur mollitia eum amet, recusandae
                        </Box>
                        <Box flexDirection='row' justifyContent='flex-end' alignSelf="center" width='90%' p={3} borderRadius={15} _text={{
                            fontSize: "xs",
                            fontWeight: "medium",
                            color: "#000000",
                            letterSpacing: "lg"
                        }}>
                            3 : 00 PM
                        </Box>
                    </Box> */}

                </VStack>
                <Center h="40">
                    <Box mt="-32">
                        <ZStack mt="3" ml={-50}>
                            <Box bg="primary.700" size="20" rounded="lg" shadow={3} />
                            <Box bg="primary.500" mt="5" ml="5" size="20" rounded="lg" shadow={5} />
                            <Box bg="primary.300" mt="10" ml="10" size="20" rounded="lg" shadow={7} />
                        </ZStack>
                    </Box>
                </Center>;
                <Text>ini adalah pesan untuk anda</Text>
                {/* <Box width="100%">
                    <Input
                        value={currentMessage}
                        onChangeText={(text) => setCurrentMessage(text.target.value)}
                        placeholder="Message" variant="filled" width="90%" bg="gray.200" my={3} mx={5} borderRadius={20} py={1} px={2} _web={{
                            _focus: {
                                borderColor: 'muted.300',
                                style: {
                                    boxShadow: 'none'
                                }
                            }
                        }} InputLeftElement={<Icon size="sm" ml={2} color="#00CEC9" as={<Ionicons name="attach" />} />} />
                </Box> */}
            </ScrollView>
        </>
    )
}
