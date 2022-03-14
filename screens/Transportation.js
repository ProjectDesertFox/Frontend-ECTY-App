import React from 'react';
import { Center, Text, Box, VStack, FormControl, HStack, Link, Button, Select, Input, CheckIcon, } from 'native-base'
export const Transportation = () => {
    let [service, setService] = React.useState("");
    return (
        <Center w="100%">
        <Box safeArea p="2" py="8" w="90%" maxW="290">
            <VStack space={3} mt="5">
                <FormControl>
                    <FormControl.Label>Transportasi pilihan</FormControl.Label>
                    <Select selectedValue={service} minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Transportation" _selectedItem={{
                        bg: "teal.600",
                        endIcon: <CheckIcon size="5" />
                    }} mt={1} onValueChange={itemValue => setService(itemValue)}>
                        <Select.Item label="Mobil" value="Mobil" />
                        <Select.Item label="Motor" value="Motor" />
                        <Select.Item label="Bus" value="Bus" />
                        <Select.Item label="Kereta" value="Kereta" />
                    </Select>
                </FormControl>
                <Button>Submit</Button>
            </VStack>
        </Box>
    </Center>
    )
}