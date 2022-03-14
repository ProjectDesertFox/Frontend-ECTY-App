import { SafeAreaView } from "react-native-safe-area-context"
import COLORS from '../style/colors';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    Dimensions,
    Image,
    SPACING
   
  } from 'react-native';
const {width} = Dimensions.get('screen');
import rates from "../data/bestRate"
import { Button, ScrollView } from "native-base";
import { createNativeStackNavigator } from '@react-navigation/native-stack';



export const Itinerary = ({navigation}) => {

    const BestRate = ({rate})=>{
        return (
            <View style={{flexDirection:'row',padding:10,marginBottom:10,width:'100%',backgroundColor:'rgba(255,255,255,0.8)',borderRadius:10,shadowColor:'black',shadowOffset:{width:0,height:10},shadowOpacity:0.3,shadowRadius:20}}>
                <Image style={{width:100,height:100, marginBottom:5,padding:SPACING}} source={{uri: rate.image}}/>
                <View style={{paddingLeft:7}}>
                    <Text>{rate.name}</Text>
                </View>
            </View>
        )
    }
    return (
        // <SafeAreaView style={{flex:1}}>
        <>
           
            <ScrollView>
                <View >
                    <Button onPress={() => navigation.navigate('ItineraryForm')} style={{marginLeft:15, width:135,marginBottom:15, marginTop:10}}>Create Itenerary</Button>
                    <FlatList nestedScrollEnabled
                        contentContainerStyle={{paddingLeft:15,paddingRight:20}}
                        data={rates}
                        renderItem={({item}) => <BestRate rate={item} />}
                        />
                </View>
            </ScrollView>
        
        </>
        // </SafeAreaView>
    )
}

const style = StyleSheet.create({
    cardImage:{
        height:180,  
        width: width / 3,
        marginRight:20,
        padding:10,
        overflow:'hidden'
    },
    imageItenerary:{
        height:80,  
        width: width / 5.5,
        borderRadius: 50,
        marginLeft:20
    },
    imageCity:{
        width:140,
        height:200
        
    }
})
