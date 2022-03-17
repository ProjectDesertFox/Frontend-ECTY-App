import { StyleSheet, View } from 'react-native';
import React, { useState, useEffect } from 'react'
import {Center, Image, Text, Box, Collapse, Alert, VStack, HStack, IconButton, CloseIcon, Button} from 'native-base'

export default function Alerting(props) {
  const [show, setShow] = React.useState(true);
  return (
    <>
    <Center>
    <Box w="100%" alignItems="center">
      <Collapse isOpen={show}>
        <Alert w="100%" maxW="400" status="error">
          <VStack space={1} flexShrink={1} w="100%">
            <HStack flexShrink={1} space={2} alignItems="center" justifyContent="space-between">
              <HStack flexShrink={1} space={2} alignItems="center">
                <Alert.Icon />
                <Text fontSize="md" fontWeight="medium" _dark={{
                color: "coolGray.800"
              }}>
                  Please try again later!
                </Text>
              </HStack>
              <IconButton variant="unstyled" icon={<CloseIcon size="3" color="coolGray.600" />} onPress={() => setShow(false)} />
            </HStack>
            <Box pl="6" _dark={{
            _text: {
              color: "coolGray.600"
            }
          }}>
              { props.alert ? props.alert : '' }
            </Box>
          </VStack>
        </Alert>
      </Collapse>
      <Button size={"sm"} onPress={() => setShow(true)} mt={8} mx="auto">
        Re-Open
      </Button>
    </Box>
    </Center>
    </>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: '#EFFDF5'
  }
});
