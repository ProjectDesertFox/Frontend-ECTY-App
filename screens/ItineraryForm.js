import React, { useState } from 'react';
import { Center, Heading, Box, VStack, FormControl, HStack, Link, Button, Select, Input, CheckIcon, ScrollView, } from 'native-base'
import DatePicker from 'react-native-date-picker'

export const ItineraryForm = () => {
    let [service, setService] = React.useState("");
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    return (
        <ScrollView>
            <Center w="100%">
                <Box safeArea p="2" py="8" w="90%" maxW="290">
                    <VStack space={3} mt="5">
                        <FormControl>
                            <FormControl.Label>Title</FormControl.Label>
                            <Input />
                            <FormControl.Label>Destination</FormControl.Label>
                            <Select selectedValue={service} minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose destination" _selectedItem={{
                                bg: "teal.600",
                                endIcon: <CheckIcon size="5" />
                            }} mt={1} onValueChange={itemValue => setService(itemValue)}>
                                <Select.Item label="Bali" value="Bali" />
                                <Select.Item label="NTT" value="BTT" />
                                <Select.Item label="Lombok" value="Lombok" />
                                <Select.Item label="Malang" value="Malang" />
                                <Select.Item label="Sumbawa" value="Sumbawa" />
                            </Select>

                            <FormControl.Label>Star Date</FormControl.Label>
                            <Button title="Open" onPress={() => setOpen(true)} />
                            <DatePicker
                                modal
                                open={open}
                                date={date}
                                onConfirm={(date) => {
                                    setOpen(false)
                                    setDate(date)
                                }}
                                onCancel={() => {
                                    setOpen(false)
                                }}
                            />
                            {/* <Input /> */}
                            <FormControl.Label>End Date</FormControl.Label>
                            {/* <Button title={'open'} onPress={openDatePicker}/> */}
                            <Button mx={5} borderRadius={70} width={130} colorScheme="red" size="sm" variant={"solid"} _text={{
                                marginLeft: 4,
                                marginRight: 4,
                                color: "white",
                                fontWeight: "bold"
                            }} px="3" onPress={openDatePicker}>
                                Pick Date
                            </Button>

                            <DatePicker
                                isVisible={showDatePicker}
                                mode={'single'}
                                onCancel={onCancel}
                                onConfirm={onConfirm}
                            />
                            <FormControl.Label>Rating</FormControl.Label>
                            <Input />
                            <FormControl.Label>Budget</FormControl.Label>
                            <Input />
                            <FormControl.Label>Type</FormControl.Label>
                            <Select selectedValue={service} minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose type" _selectedItem={{
                                bg: "teal.600",
                                endIcon: <CheckIcon size="5" />
                            }} mt={1} onValueChange={itemValue => setService(itemValue)}>
                                <Select.Item label="Public" value="Public" />
                                <Select.Item label="Private" value="Private" />
                                <Select.Item label="Solo" value="Solo" />

                            </Select>
                            <FormControl.Label>Sharing member slot</FormControl.Label>
                            <Input />
                        </FormControl>
                        <Button mt="2" colorScheme="indigo">
                            Create Itinerary
                        </Button>
                    </VStack>
                </Box>
            </Center>

        </ScrollView>
    )
}