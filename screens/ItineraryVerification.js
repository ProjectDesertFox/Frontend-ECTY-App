
import { Center, Heading, Box, VStack, FormControl, HStack, Link, Button, Select, Input, CheckIcon, } from 'native-base'
export const ItineraryForm = () => {
    return (
        <Center w="100%">
            <Box safeArea p="2" py="8" w="90%" maxW="290">
                <VStack space={3} mt="5">
                    <FormControl>
                        <FormControl.Label>Name</FormControl.Label>
                        <Input />
                        <FormControl.Label>Email</FormControl.Label>
                        <Input />
                        <FormControl.Label>PhoneNumber</FormControl.Label>
                        <Input />
                    </FormControl>
                    <Button mt="2" colorScheme="indigo">
                        Create Itinerary
                    </Button>
                </VStack>
            </Box>
        </Center>
    )
}