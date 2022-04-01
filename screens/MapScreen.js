import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Map from '../components/Map';
import { createStackNavigator } from '@react-navigation/stack';
import NavigateCard from '../components/NavigateCard';
import RideOptionCard from '../components/RideOptionCard';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import tailwind from 'twrnc';
import { useNavigation } from '@react-navigation/native';


const MapScreen = () => {
  const Stack = createStackNavigator();
  const navigation = useNavigation();

  return (
    <View>
      {/* <Text>MapScreen</Text> */}

      <TouchableOpacity 
      onPress={() => navigation.navigate('HomeScreen')}
      style={tailwind`bg-gray-100 z-50 p-3 rounded-full shadow-lg absolute top-16 left-8`} >
        <Icon
          name='menu'
        />
      </TouchableOpacity>
      <View style={tw`h-1/2`}>
        <Map />
      </View>

      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name='NavigateCard'
            component={NavigateCard}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name='RideOptionCard'
            component={RideOptionCard}
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
      </View>

    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})