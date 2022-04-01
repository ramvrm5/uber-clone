import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc';

import React from 'react'
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env'
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';
import NavFavourites from '../components/NavFavourites';

const HomeScreen = () => {
    const dispatch = useDispatch();

    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image
                    style={{
                        width: 100, height: 100, resizeMode: 'contain'
                    }}
                    source={{
                        uri: 'https://links.papareact.com/gzs'
                    }}
                />
            </View>

            <GooglePlacesAutocomplete 
                placeholder='Where From?'
                styles={{
                    container: {
                        flex: 0,
                    },
                    textInput: {
                        fontSize: 18,
                    }
                }}
                enablePoweredByContainer={false}
                minLength={2}
                onPress={( data, details = null ) => {
                    dispatch(setOrigin({
                        location:details.geometry.location,
                        description: data.description
                    }))

                    dispatch(setDestination(null))
                }}
                fetchDetails={true}
                returnKeyType={"Search"}
                query={{
                    key: GOOGLE_MAPS_APIKEY,
                    language:'en'
                }}
                nearbyPlacesAPI='GooglePlacesSearch'
                debounce={400}
            />
            <NavOptions/>
            <NavFavourites/>

        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({

})