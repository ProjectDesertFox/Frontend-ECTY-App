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
import { SearchBar,updateSearch,search} from 'react-native-elements';
import { useState } from "react";

export const Friends = () => {
    const [search, setSearch] = useState("");

    const updateSearch = (search) => {
        setSearch(search);
    };
    const BestRate = ({rate})=>{
        return (
            <View style={{flexDirection:'row',padding:10,marginBottom:10,width:'100%'}}>
                <Image style={{width:70,height:70, marginBottom:5,padding:SPACING, borderRadius:70}} source={{uri: rate.image}}/>
                <View style={{paddingLeft:10, marginTop:20}}>
                    <Text>{rate.name}</Text>
                </View>
            </View>
        )
    }
    return (
        // <SafeAreaView style={{flex:1}}>
            <ScrollView>
                <View style={{margin: 10}}>
                <SearchBar
                    placeholder="Add Friends"
                    onChangeText={updateSearch}
                    value={search}
                />
                </View>
                <View >
                    <FlatList nestedScrollEnabled
                        contentContainerStyle={{paddingLeft:15,paddingRight:20}}
                        data={rates}
                        renderItem={({item}) => <BestRate rate={item} />}
                        />
                </View>
            </ScrollView>
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
