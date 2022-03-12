
import { Center, Heading, Box, VStack, FormControl, HStack, Link, Button, Select, Input, CheckIcon} from 'native-base'
import InputFiles from 'react-input-files';
export const ItineraryVerifikasi = () => {
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
                        <FormControl.Label>Upload Image</FormControl.Label>
                        <InputFiles onChange={files => console.log(files)}>
                            <button>Upload</button>
                        </InputFiles>;
                        <FormControl.Label>KTP</FormControl.Label>
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