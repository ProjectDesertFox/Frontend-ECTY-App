import React, { useState } from 'react';
import { Center, Text, Box, VStack, FormControl, HStack, Link, Button, Select, Input, CheckIcon, ScrollView, } from 'native-base'

export const Destination = () => {
    let [service, setService] = React.useState("");

    return (
        <ScrollView>
            <Center w="100%">
                <Box safeArea p="2" py="8" w="90%" maxW="290">
                    <VStack space={3} mt="5">
                        <FormControl>
                            <FormControl.Label>Destination pilahan</FormControl.Label>
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
                        </FormControl>
                        <Button>Submit</Button>
                    </VStack>
                </Box>
            </Center>

        </ScrollView>
    )
}