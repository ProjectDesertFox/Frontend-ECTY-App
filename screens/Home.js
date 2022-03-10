import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TextInput,
  ImageBackground,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Image,
  SPACING
 
} from 'react-native';
import { Modal ,FormControl, Input,Button } from 'native-base';
import places from '../data/recomendation';
import iteneraries from '../data/itenerary';
import cities from '../data/city';
import rates from '../data/bestRate'
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete"
import MapView, { Callout, Circle, Marker } from "react-native-maps"
// import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../style/colors';
const {width} = Dimensions.get('screen');
export const Home = () => {
    const ItenerariesCard=({itenerary}) =>{

        const [showModal, setShowModal] = useState(false);
        const [showModal2, setShowModal2] = useState(false);
        const [showModal3, setShowModal3] = useState(false);
        return(
            
            <View>
                <TouchableOpacity       
                activeOpacity={0.8}
                onPress={() => setShowModal(true)}
                >
                <Image style={style.imageItenerary} source={{uri: itenerary.destination}} />
                <Text style={{marginRight:20}}>
                    {itenerary.user}'s Itenerary
                </Text>
                </TouchableOpacity>
                <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                    <Modal.Content maxWidth="400px">
                        <Modal.CloseButton />
                        <Modal.Header>Detail Itenerary</Modal.Header>
                        <Modal.Body>
                            {/* <FormControl>
                            <FormControl.Label>Name</FormControl.Label>
                            <Input />
                            </FormControl>
                            <FormControl mt="3">
                            <FormControl.Label>Email</FormControl.Label>
                            <Input />
                            </FormControl> */}
                            <Image style={{height:150, width:'100%'}} source={{uri:itenerary.destination}}/>
                            <Text>Destination: {itenerary.description}</Text>
                            <Text>City: {itenerary.kota}</Text>
                            <Text>Transportation: {itenerary.transportation}</Text>
                            <Text>Budget: {itenerary.budget}</Text>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button.Group space={2}>
                            <Button onPress={() => {
                            setShowModal(false);
                            }}>
                                Join
                            </Button>
                            </Button.Group>
                        </Modal.Footer>
                    </Modal.Content>
                </Modal>
            </View>

        )
    }

    const RecomendedCard = ({place}) => {
        return (
          <TouchableOpacity       
            activeOpacity={0.8}
           
            >
            <ImageBackground style={style.cardImage} source={{uri: place.image}} > 
              <Text
                style={{
                  color: COLORS.white,
                  fontSize: 17,
                  fontWeight: 'bold',
                  marginTop: 5,
                }}>
                {place.name}
              </Text>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  alignItems: 'flex-end',
                }}>
                <View style={{flexDirection: 'row'}}>
                  {/* <Icon name="place" size={20} color={COLORS.white} /> */}
                  <Text style={{marginLeft: 5, color: COLORS.white}}>
                    {place.kota}
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        );
    };
    const [ pin, setPin ] = React.useState({
		latitude: 37.78825,
		longitude: -122.4324
	})
	const [ region, setRegion ] = React.useState({
		latitude: 37.78825,
		longitude: -122.4324,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421
	})

    const GridCity = ({city})=>{
        return (
            <View style={{flex:1,flexDirection:'column',marginRight:5, marginLeft:5, marginBottom:5 }}>
                <ImageBackground style={{width:'100%', height:120}}source={{uri: city.image}}>
                <View
                style={{
                    flex: 1,
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    padding:6
                }}>
                <View style={{flexDirection: 'row'}}>
                  {/* <Icon name="place" size={20} color={COLORS.white} /> */}
                  <Text style={{marginLeft: 5, color: COLORS.white, fontSize:17,fontWeight:'bold'}}>
                    {city.name}
                  </Text>
                </View>
              </View>
                </ImageBackground>
            </View>
        )
    }

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
        <SafeAreaView>
            <ScrollView>
                <View style={{flex:1/6}}>
                {/* <GooglePlacesAutocomplete
                    placeholder="Search"
                    fetchDetails={true}
                    GooglePlacesSearchQuery={{
                        rankby: "distance"
                    }}
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        console.log(data, details)
                        setRegion({
                            latitude: details.geometry.location.lat,
                            longitude: details.geometry.location.lng,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421
                        })
                    }}
                    query={{
                        key: "KEY",
                        language: "en",
                        components: "country:us",
                        types: "establishment",
                        radius: 30000,
                        location: `${region.latitude}, ${region.longitude}`
                    }}
                    styles={{
                        container: { flex: 0, position: "absolute", width: "100%", zIndex: 1 },
                        listView: { backgroundColor: "white" }
                    }}
                /> */}
                <MapView
                    style={style.map}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }}
                    provider="google"
                >
                    <Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }} />
                    <Marker
                        coordinate={pin}
                        pinColor="black"
                        draggable={true}
                        onDragStart={(e) => {
                            console.log("Drag start", e.nativeEvent.coordinates)
                        }}
                        onDragEnd={(e) => {
                            setPin({
                                latitude: e.nativeEvent.coordinate.latitude,
                                longitude: e.nativeEvent.coordinate.longitude
                            })
                        }}
                    >
                        <Callout>
                            <Text>I'm here</Text>
                        </Callout>
                    </Marker>
                    <Circle center={pin} radius={1000} />
                </MapView>
            </View>
                <View>
                    <Text style={style.sectionTitle}>Iteneraries Available</Text>
                    <FlatList nestedScrollEnabled
                        contentContainerStyle={{paddingLeft: 15, paddingBottom: 15}}
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        data={iteneraries}
                        renderItem={({item})=> <ItenerariesCard itenerary={item}/>}
                        />
                </View>
                <View>
                    <Text style={style.sectionTitle}>Recomended</Text>
                    <FlatList nestedScrollEnabled
                        snapToInterval={width - 15}
                        contentContainerStyle={{paddingLeft: 15, paddingBottom: 15}}
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        data={places}
                        renderItem={({item}) => <RecomendedCard place={item} />}
                        />
                </View>
                <View>
                    <Text style={style.sectionTitle}>Explore</Text>
                    <FlatList nestedScrollEnabled
                        numColumns={3}
                        contentContainerStyle={{paddingLeft: 15, paddingBottom: 15, paddingRight:15}}
                        data={cities}
                        renderItem={({item})=> <GridCity city={item}/>}
                        keyExtractor={(_,index)=> index.toString()}
                        />
                </View>
                <View>
                    <Text style={style.sectionTitle}>Best Rate</Text>
                    <FlatList nestedScrollEnabled
                        contentContainerStyle={{paddingLeft:15,paddingRight:20}}
                        data={rates}
                        renderItem={({item}) => <BestRate rate={item} />}
                        />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


const style = StyleSheet.create({
    container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	},
	map: {
		width: Dimensions.get("window").width,
		height: 300
	},
    sectionTitle:{
        marginHorizontal:20,
        marginVertical:20,
        fontWeight:'bold',
        fontSize:20
    },
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