import React, { useState } from 'react';
import { Center, Box, VStack, FormControl, HStack, Link, Button, Select, Input, CheckIcon, ScrollView, View, } from 'native-base'
import DatePicker from 'react-native-neat-date-picker'
import { useDispatch } from 'react-redux';
import { actionCreateItinerary } from '../store/actions/itineraryAction';

export const ItineraryForm = () => {
    let [service, setService] = React.useState("");
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [showDatePicker, setShowDatePicker] = useState(false)
    const [showDatePicker1, setShowDatePicker1] = useState(false)
    const [showDatePicker2, setShowDatePicker2] = useState(false)
    const [formCondition, setFormCondition] = useState(false)
    const dispatch = useDispatch()
    let [inputItinerary, setInputItinerary] = React.useState({
        title: "",
        destination: "",
        dateStart: "",
        dateEnd: "",
        rating: "",
        budget: "",
        type: "",
        sharingMemberSlot: 2,
        nameGroup: "",
        namePlace: "",
        descriptionPlace: "",
        estimatedPricePlace: "",
        ratingPlace: "",
        itineraryOrder: 1,
        datePlace: ""
        // transportationType: "",
        // from: "",
        // to: "",
        // distance: "",
        // estimatedTime: "",
        // estimatedPriceTrans: ""
    })
  
    function handleOnChange(e, name) {
        console.log( e, "===")
        setInputItinerary({ ...inputItinerary, [name]: e })
        if(e === 'solo'){
            setFormCondition(false)
        }else if( e === 'public'){
            setFormCondition(true)
        }else if( e === 'private'){
            setFormCondition(true)
        }
    }

    function prosesSubmit() {
        dispatch(actionCreateItinerary(inputItinerary))
    }

    const openDatePicker = (modal) => {
        if(modal === "startDate"){
            setShowDatePicker(true)
        }else if(modal === "endDate" ){
            setShowDatePicker1(true)
        }
        else{
            setShowDatePicker2(true)
        }
    }

    const onCancel = (modal) => {
        // You should close the modal in here
        if(modal === "startDate"){
            setShowDatePicker(false)
        }if(modal === "datePlace" ){
            setShowDatePicker2(false)
        }
        else{
            setShowDatePicker1(false)
        }
        
    }
    const onConfirm = (date, name) => {
        console.log(date, name, "====")
        // You should close the modal in here
        if(name === "dateStart"){
            setShowDatePicker(false)
            setInputItinerary({ ...inputItinerary, [name]: date.dateString })
        }if(name === "dateEnd"){
            setShowDatePicker1(false)
            setInputItinerary({ ...inputItinerary, [name]: date.dateString })
        }
        else{
            setShowDatePicker2(false)
            setInputItinerary({ ...inputItinerary, [name]: date.dateString })
        }

        // The parameter 'date' is a Date object so that you can use any Date prototype method.
        // console.log(date.getDate())
        
    }
    const onConfirm1 = (date) => {
        // You should close the modal in here
        setShowDatePicker(false)

        // The parameter 'date' is a Date object so that you can use any Date prototype method.
        // console.log(date.getDate())
        setInputItinerary({ ...inputItinerary, dateEnd: date.dateString })
    }
    return (
        <ScrollView>
            <Center w="100%">
                <Box safeArea p="2" py="8" w="90%" maxW="290">
                    <VStack space={3} mt="5">
                        <FormControl>
                            {/* <FormControl.Label>Title</FormControl.Label> */}
                            {/* <Input value={inputItinerary.title} onChangeText={(e)=>handleOnChange(e, "title")}/>
                            <FormControl.Label>Destination</FormControl.Label>
                            <Input value={inputItinerary.destination} onChangeText={(e)=>handleOnChange(e, "destination")}/>

                            <FormControl.Label>Start Date</FormControl.Label>
                            <Input value={inputItinerary.dateStart} onChangeText={(e)=>handleOnChange(e, "dateStart")}/>
                            <FormControl.Label>End Date</FormControl.Label>
                            <Input value={inputItinerary.dateEnd} onChangeText={(e)=>handleOnChange(e, "dateEnd")}/>
                            <FormControl.Label>Rating</FormControl.Label>
                            <Input value={inputItinerary.rating} onChangeText={(e)=>handleOnChange(e, "rating")}/>
                            <FormControl.Label>Budget</FormControl.Label>
                            <Input value={inputItinerary.budget} onChangeText={(e)=>handleOnChange(e, "budget")}/> */}
                            {/* <FormControl.Label>Type</FormControl.Label> */}
                            {/* <Select selectedValue={service} minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose type" _selectedItem={{
                                bg: "teal.600",
                                endIcon: <CheckIcon size="5" />
                            }} mt={1} onValueChange={itemValue => setService(itemValue)}>
                                <Select.Item label="Public" value="Public" />
                                <Select.Item label="Private" value="Private" />
                                <Select.Item label="Solo" value="Solo" />
        
                            </Select> */}
                            {/* <FormControl.Label>Sharing member slot</FormControl.Label>
                            <Input value={inputItinerary.sharingMemberSlot} onChangeText={(e)=>handleOnChange(e, "sharingMemberSlot")}/>
                            <FormControl.Label>Name Group</FormControl.Label>
                            <Input value={inputItinerary.nameGroup} onChangeText={(e)=>handleOnChange(e, "nameGroup")}/>
                            <FormControl.Label>Name Place</FormControl.Label>
                            <Input value={inputItinerary.namePlace} onChangeText={(e)=>handleOnChange(e, "namePlace")}/>
                            <FormControl.Label>Description Place</FormControl.Label>
                            <Input value={inputItinerary.descriptionPlace} onChangeText={(e)=>handleOnChange(e, "descriptionPlace")}/>
                            <FormControl.Label>Estimated Price Place</FormControl.Label>
                            <Input value={inputItinerary.estimatedPricePlace} onChangeText={(e)=>handleOnChange(e, "estimatedPricePlace")}/>
                            <FormControl.Label>Rating Places</FormControl.Label>
                            <Input value={inputItinerary.ratingPlace} onChangeText={(e)=>handleOnChange(e, "ratingPlace")}/>
                            <FormControl.Label>Itinerary Order</FormControl.Label>
                            <Input value={inputItinerary.itineraryOrder} onChangeText={(e)=>handleOnChange(e, "itineraryOrder")}/>
                            <FormControl.Label>Date Place</FormControl.Label>
                            <Input value={inputItinerary.datePlace} onChangeText={(e)=>handleOnChange(e, "datePlace")}/>
                            <FormControl.Label>Transportation type</FormControl.Label>
                            <Input value={inputItinerary.transportationType} onChangeText={(e)=>handleOnChange(e, "transportationType")}/>
                            <FormControl.Label>From</FormControl.Label>
                            <Input value={inputItinerary.from} onChangeText={(e)=>handleOnChange(e, "from")}/>
                            <FormControl.Label>to</FormControl.Label>
                            <Input value={inputItinerary.to} onChangeText={(e)=>handleOnChange(e, "to")}/>
                            <FormControl.Label>Distance</FormControl.Label>
                            <Input value={inputItinerary.distance} onChangeText={(e)=>handleOnChange(e, "distance")}/>
                            <FormControl.Label>Estimated Time</FormControl.Label>
                            <Input value={inputItinerary.estimatedTime} onChangeText={(e)=>handleOnChange(e, "estimatedTime")}/>
                            <FormControl.Label>Estimated PriceTrans</FormControl.Label>
                            <Input value={inputItinerary.estimatedPriceTrans} onChangeText={(e)=>handleOnChange(e, "estimatedPriceTrans")}/>
                            <FormControl.Label>Type</FormControl.Label>
                            <Input value={inputItinerary.type} onChangeText={(e)=>handleOnChange(e, "type")}/> */}
                            <FormControl.Label>Title</FormControl.Label>
                            <Input value={inputItinerary.title} onChangeText={(val) => handleOnChange(val, "title")} />
                            <FormControl.Label>Destination</FormControl.Label>
                            <Select selectedValue={service} minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose destination" _selectedItem={{
                                bg: "teal.600",
                                endIcon: <CheckIcon size="5" />
                            }} mt={1} onValueChange={itemValue => handleOnChange(itemValue, "destination")}>
                                <Select.Item label="Bali" value="Bali" />
                                <Select.Item label="NTT" value="BTT" />
                                <Select.Item label="Lombok" value="Lombok" />
                                <Select.Item label="Malang" value="Malang" />
                                <Select.Item label="Sumbawa" value="Sumbawa" />
                            </Select>

                            <FormControl.Label>Start Date</FormControl.Label>
                            <Button mx={5} borderRadius={70} width={130} colorScheme="red" size="sm" variant={"solid"} _text={{
                                marginLeft: 4,
                                marginRight: 4,
                                color: "white",
                                fontWeight: "bold"
                            }} px="3" onPress={() => openDatePicker('startDate')}>
                                Pick Date
                            </Button>
                            <DatePicker
                                isVisible={showDatePicker}
                                mode={'single'}
                                onCancel={() => onCancel("startDate")}
                                onConfirm={(val) => onConfirm(val, "dateStart")}
                            // onChangeText={(val)=> handleOnChange(val, "dateStart")}
                            // onConfirm={(date) => {
                            //     setOpen(false)
                            //     setDate(date)
                            // }}
                            // onCancel={() => {
                            //     setOpen(false)
                            // }}
                            />
                            {/* <Input /> */}
                            <FormControl.Label>End Date</FormControl.Label>
                            <Button mx={5} borderRadius={70} width={130} colorScheme="red" size="sm" variant={"solid"} _text={{
                                marginLeft: 4,
                                marginRight: 4,
                                color: "white",
                                fontWeight: "bold"
                            }} px="3" onPress={() => openDatePicker("endDate")}>
                                Pick Date
                            </Button>

                            <DatePicker
                                isVisible={showDatePicker1}
                                mode={'single'}
                                onCancel={() => onCancel("endDate")}
                                onConfirm={(val) => onConfirm(val,"dateEnd")}
                            />
                            <FormControl.Label>Rating</FormControl.Label>
                            <Input value={inputItinerary.rating.toString()} onChangeText={(val) => handleOnChange(val, "rating")} />
                            <FormControl.Label>Budget</FormControl.Label>
                            <Input value={inputItinerary.budget.toString()} onChangeText={(val) => handleOnChange(val, "budget")} />
                            <FormControl.Label>Type</FormControl.Label>
                            <Select selectedValue={service} minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose type" _selectedItem={{
                                bg: "teal.600",
                                endIcon: <CheckIcon size="5" />
                            }} mt={1} onValueChange={itemValue => handleOnChange(itemValue, "type")}>
                                <Select.Item label="Public" value="public" />
                                <Select.Item label="Private" value="private" />
                                <Select.Item label="Solo" value="solo" />

                            </Select>
                            { formCondition ?
                            <View> 
                                <FormControl.Label>Sharing member slot</FormControl.Label>
                                <Input value={inputItinerary.sharingMemberSlot.toString()} onChangeText={(val) => handleOnChange(val, "sharingMemberslot")} />
                            </View>
                            :
                            null
                            }
                            
                            <FormControl.Label>Name Group</FormControl.Label>
                            <Input value={inputItinerary.nameGroup} onChangeText={(val)=>handleOnChange(val, "nameGroup")}/>
                            <FormControl.Label>Name Place</FormControl.Label>
                            <Input value={inputItinerary.namePlace} onChangeText={(val)=>handleOnChange(val, "namePlace")}/>
                            <FormControl.Label>Description Place</FormControl.Label>
                            <Input value={inputItinerary.descriptionPlace} onChangeText={(val)=>handleOnChange(val, "descriptionPlace")}/>
                            <FormControl.Label>Estimated Price Place</FormControl.Label>
                            <Input value={inputItinerary.estimatedPricePlace} onChangeText={(val)=>handleOnChange(val, "estimatedPricePlace")}/>
                            <FormControl.Label>Rating Places</FormControl.Label>
                            <Input value={inputItinerary.ratingPlace.toString()} onChangeText={(val)=>handleOnChange(val, "ratingPlace")}/>
                            <FormControl.Label>Itinerary Order</FormControl.Label>
                            <Input value={inputItinerary.itineraryOrder.toString()} onChangeText={(val)=>handleOnChange(val, "itineraryOrder")}/>
                            <FormControl.Label>Date Place</FormControl.Label>
                            <Button mx={5} borderRadius={70} width={130} colorScheme="red" size="sm" variant={"solid"} _text={{
                                marginLeft: 4,
                                marginRight: 4,
                                color: "white",
                                fontWeight: "bold"
                            }} px="3" onPress={() => openDatePicker('datePlace')}>
                                Pick Date
                            </Button>
                            <DatePicker
                                isVisible={showDatePicker2}
                                mode={'single'}
                                onCancel={() => onCancel("datePlace")}
                                onConfirm={(val) => onConfirm(val,"datePlace")}
                            />
                            {/* <Input value={inputItinerary.datePlace} placeholder="yyyy-mm-dd" onChangeText={(val)=>handleOnChange(val, "datePlace")}/> */}
                            {/* <FormControl.Label>Transportation type</FormControl.Label>
                            <Input value={inputItinerary.transportationType} onChangeText={(val)=>handleOnChange(val, "transportationType")}/>
                            <FormControl.Label>From</FormControl.Label>
                            <Input value={inputItinerary.from} onChangeText={(val)=>handleOnChange(val, "from")}/>
                            <FormControl.Label>to</FormControl.Label>
                            <Input value={inputItinerary.to} onChangeText={(val)=>handleOnChange(val, "to")}/>
                            <FormControl.Label>Distance</FormControl.Label>
                            <Input value={inputItinerary.distance.toString()} onChangeText={(val)=>handleOnChange(val, "distance")}/>
                            <FormControl.Label>Estimated Time</FormControl.Label>
                            <Input value={inputItinerary.estimatedTime} onChangeText={(val)=>handleOnChange(val, "estimatedTime")}/>
                            <FormControl.Label>Estimated PriceTrans</FormControl.Label>
                            <Input value={inputItinerary.estimatedPriceTrans} onChangeText={(val)=>handleOnChange(val, "estimatedPriceTrans")}/> */}
                            {/* <FormControl.Label>Type</FormControl.Label>
                            <Input value={inputItinerary.type} onChangeText={(val)=>handleOnChange(val, "type")}/> */}
                        </FormControl>
                        <Button mt="2" colorScheme="indigo" type="submit" onPress={() => prosesSubmit()} >
                            Create Itinerary
                        </Button>
                    </VStack>
                </Box>
            </Center>

        </ScrollView>
    )
}