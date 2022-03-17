import { HStack, Spinner, Heading } from "native-base"
import { StyleSheet } from 'react-native';
export default function loading(props){
  return (
    <HStack style={styles.container} space={2} justifyContent="center">
      <Spinner accessibilityLabel="Loading posts" />
      <Heading color="primary.500" fontSize="md">
        Loading
      </Heading>
    </HStack>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFFDF5',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
});
