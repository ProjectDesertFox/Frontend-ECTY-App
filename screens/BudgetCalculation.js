import { Text, Box, Center, Image, AspectRatio } from 'native-base'
import React from 'react'

export default function BudgetCalculation() {
    return (
        <>
            <Text mx={4} my={2} fontSize='2xl' bold>Estimated Budget</Text>
            {/* Price Budget Estimation */}
            <Box mx={2} my={2} bg="gray.200" flexDirection='row' justifyContent='space-between'>
                <Box mx={5} my={4}>
                    <Text>Start - Finish</Text>
                    <Text bold fontSize={15}>18 Mar 222 - 20 Mar 22</Text>
                    <Text>Total Budget</Text>
                    <Text bold fontSize={15}>Rp 5.000.000</Text>
                </Box>
                <Box mx={5} my={4}>
                    <Text>Number of Person</Text>
                    <Text bold fontSize={15}>5 Person</Text>
                    <Text>Budget Per Person</Text>
                    <Text bold fontSize={15}>Rp 1.000.000</Text>
                </Box>
            </Box>

            {/* Card Detail */}
            <Center my={4}>
                <Box w='90%' shadow='1' bg='gray.100'>
                    <AspectRatio w="100%" ratio={16 / 9}>
                        <Image source={{
                            uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
                        }} alt="image" />
                    </AspectRatio>
                    <Box mx={1} my={2} flexDirection='row' justifyContent='space-between' alignItems='center'>
                        <Box mx={4} my={2}>
                            <Text fontSize='2xl' bold>Hotel Senggigi</Text>
                            <Text fontSize='xs' >Lombok, Indonesia</Text>
                        </Box>
                        <Box mx={4} my={2}>
                            <Text fontSize='lg' bold>Rp 1.000.000</Text>
                            <Text fontSize='xs' >Per Night</Text>
                        </Box>
                    </Box>
                </Box>
            </Center>
        </>
    )
}
