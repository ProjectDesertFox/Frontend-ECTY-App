import React from 'react';
import { Center, Heading, Box, VStack, FormControl, HStack, Link, Button, Select, Input, CheckIcon, } from 'native-base'
export const Transportation = () => {
    let [service, setService] = React.useState("");
    return (
        <Center w="100%">
        <Box safeArea p="2" py="8" w="90%" maxW="290">
            <VStack space={3} mt="5">
                <FormControl>
                    <FormControl.Label>Transportation</FormControl.Label>
                    <Select selectedValue={service} minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Transportation" _selectedItem={{
                        bg: "teal.600",
                        endIcon: <CheckIcon size="5" />
                    }} mt={1} onValueChange={itemValue => setService(itemValue)}>
                        <Select.Item label="Mobil" value="Mobil" />
                        <Select.Item label="Motor" value="Motor" />
                        <Select.Item label="Jalan" value="Jalan" />
                    </Select>
                </FormControl>
                <Button mt="2" colorScheme="indigo">
                    Create Itinerary
                </Button>
            </VStack>
        </Box>
    </Center>
    )
}