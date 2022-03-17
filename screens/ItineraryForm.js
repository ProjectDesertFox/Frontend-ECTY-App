import React, { useState } from 'react';
import { Center, Box, VStack, FormControl, HStack, Link, Button, Select, Input, CheckIcon, ScrollView, View, } from 'native-base'
import DatePicker from 'react-native-neat-date-picker'
import { useDispatch } from 'react-redux';
import { actionCreateItinerary } from '../store/actions/itineraryAction';
import { Ionicons } from '@expo/vector-icons';
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
        ratingItinerary: "",
        budget: "",
        type: "",
        sharingMemberSlot: "",
        nameGroup: "",
        namePlace: "",
        descriptionPlace: "",
        estimatedPricePlace: "",
        ratingPlace: "",
        itineraryOrder: 1,
        datePlace: "",
        // transportationType: "",
        // from: "",
        // to: "",
        // distance: "",
        // estimatedTime: "",
        // estimatedPriceTrans: ""
    })
    console.log()
    function handleOnChange(e, name) {
        setInputItinerary({ ...inputItinerary, [name]: e })
        if (e === 'solo') {
            setFormCondition(false)
        } else if (e === 'public') {
            setFormCondition(true)
        } else if (e === 'private') {
            setFormCondition(true)
        }
    }

    function prosesSubmit() {
        dispatch(actionCreateItinerary(inputItinerary))
    }

    const openDatePicker = (modal) => {
        if (modal === "startDate") {
            setShowDatePicker(true)
        } else if (modal === "endDate") {
            setShowDatePicker1(true)
        }
        else {
            setShowDatePicker2(true)
        }
    }

    const onCancel = (modal) => {
        // You should close the modal in here
        if (modal === "startDate") {
            setShowDatePicker(false)
        } if (modal === "datePlace") {
            setShowDatePicker2(false)
        }
        else {
            setShowDatePicker1(false)
        }

    }
    const onConfirm = (date, name) => {
        console.log(date, name, "====")
        // You should close the modal in here
        if (name === "dateStart") {
            setShowDatePicker(false)
            setInputItinerary({ ...inputItinerary, [name]: date.dateString })
        } if (name === "dateEnd") {
            setShowDatePicker1(false)
            setInputItinerary({ ...inputItinerary, [name]: date.dateString })
        }
        else {
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
                            <FormControl.Label>Title</FormControl.Label>
                            <Input value={inputItinerary.title} onChangeText={(val) => handleOnChange(val, "title")} />
                            <FormControl.Label>Destination</FormControl.Label>
                            <Select selectedValue={service} minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose destination" _selectedItem={{
                                bg: "teal.600",
                                endIcon: <CheckIcon size="5" />
                            }} mt={1} onValueChange={itemValue => handleOnChange(itemValue, "destination")}>
                                <Select.Item label="Bali" value="Bali" />
                                <Select.Item label="NTT" value="NTT" />
                                <Select.Item label="Lombok" value="Lombok" />
                                <Select.Item label="Malang" value="Malang" />
                                <Select.Item label="Sumbawa" value="Sumbawa" />
                            </Select>
                            <Box flexDirection="row" justifyContent="space-around">
                                <Box flexDirection="row" justifyContent="flex-start" alignItems="center" mx={2}>
                                    <FormControl.Label mt={1}>Start Date</FormControl.Label>
                                    <Ionicons name="calendar" color="#00CEC9" size={27} onPress={() => openDatePicker('startDate')} />
                                    {/* <Button mx={5} borderRadius={70} width={130} colorScheme="red" size="sm" variant={"solid"} _text={{
                                marginLeft: 4,
                                marginRight: 4,
                                color: "white",
                                fontWeight: "bold"
                            }} px="3" onPress={() => openDatePicker('startDate')}>
                                Pick Date
                            </Button> */}
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
                                </Box>
                                <Box  flexDirection="row" justifyContent="flex-start"  alignItems="center" mx={2}>
                                    <FormControl.Label mt={1}>End Date</FormControl.Label>
                                    <Ionicons name="calendar" color="#00CEC9" size={27} onPress={() => openDatePicker("endDate")} />
                                    {/* <Button mx={5} borderRadius={70} width={130} colorScheme="red" size="sm" variant={"solid"} _text={{
                                marginLeft: 4,
                                marginRight: 4,
                                color: "white",
                                fontWeight: "bold"
                            }} px="3" onPress={() => openDatePicker("endDate")}>
                                Pick Date
                            </Button> */}

                                    <DatePicker
                                        isVisible={showDatePicker1}
                                        mode={'single'}
                                        onCancel={() => onCancel("endDate")}
                                        onConfirm={(val) => onConfirm(val, "dateEnd")}
                                    />
                                </Box>
                            </Box>

                            {/* <Input /> */}

                            <FormControl.Label>Rating</FormControl.Label>
                            <Input value={inputItinerary.ratingItinerary.toString()} placeholder="1-5" onChangeText={(val) => handleOnChange(val, "ratingItinerary")} />
                            <FormControl.Label>Budget</FormControl.Label>
                            <Input value={+inputItinerary.budget} onChangeText={(val) => handleOnChange(val, "budget")} />
                            <FormControl.Label>Type</FormControl.Label>
                            <Select selectedValue={service} minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose type" _selectedItem={{
                                bg: "teal.600",
                                endIcon: <CheckIcon size="5" />
                            }} mt={1} onValueChange={itemValue => handleOnChange(itemValue, "type")}>
                                <Select.Item label="Public" value="public" />
                                <Select.Item label="Private" value="private" />
                                <Select.Item label="Solo" value="solo" />

                            </Select>
                            {formCondition ?
                                <View>
                                    <FormControl.Label>Sharing member slot</FormControl.Label>
                                    {/* <Input value={inputItinerary.sharingMemberSlot} onChangeText={(val)=>handleOnChange(val, "sharingMemberslot")}/> */}
                                    <Input value={+inputItinerary.sharingMemberSlot} onChangeText={(val) => handleOnChange(val, "sharingMemberSlot")} />
                                </View>
                                :
                                null
                            }

                            <FormControl.Label>Name Group</FormControl.Label>
                            <Input value={inputItinerary.nameGroup} onChangeText={(val) => handleOnChange(val, "nameGroup")} />
                            <FormControl.Label>Name Place</FormControl.Label>
                            <Input value={inputItinerary.namePlace} onChangeText={(val) => handleOnChange(val, "namePlace")} />
                            <FormControl.Label>Description Place</FormControl.Label>
                            <Input value={inputItinerary.descriptionPlace} onChangeText={(val) => handleOnChange(val, "descriptionPlace")} />
                            <FormControl.Label>Estimated Price Place</FormControl.Label>
                            <Input value={+inputItinerary.estimatedPricePlace} onChangeText={(val) => handleOnChange(val, "estimatedPricePlace")} />
                            <FormControl.Label>Rating Places</FormControl.Label>
                            <Input value={inputItinerary.ratingPlace.toString()} placeholder="1 - 5" onChangeText={(val) => handleOnChange(val, "ratingPlace")} />
                            <FormControl.Label>Itinerary Order</FormControl.Label>
                            <Input value={+inputItinerary.itineraryOrder} onChangeText={(val) => handleOnChange(val, "itineraryOrder")} />
                            <Box flexDirection="row" justifyContent="flex-start" alignItems="center" mx={2}>
                            <FormControl.Label>Date Place</FormControl.Label>
                            <Ionicons name="calendar" color="#00CEC9" size={27} onPress={() => openDatePicker('datePlace')} />
                            {/* <Button mx={5} borderRadius={70} width={130} colorScheme="red" size="sm" variant={"solid"} _text={{
                                marginLeft: 4,
                                marginRight: 4,
                                color: "white",
                                fontWeight: "bold"
                            }} px="3" onPress={() => openDatePicker('datePlace')}>
                                Pick Date
                            </Button> */}
                            <DatePicker
                                isVisible={showDatePicker2}
                                mode={'single'}
                                onCancel={() => onCancel("datePlace")}
                                onConfirm={(val) => onConfirm(val, "datePlace")}
                            />
                            </Box>
                            
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
                        <Button mt="2" color="#00CEC9" type="submit" onPress={() => prosesSubmit()} >
                            Create Itinerary
                        </Button>
                    </VStack>
                </Box>
            </Center>

        </ScrollView>
    )
}