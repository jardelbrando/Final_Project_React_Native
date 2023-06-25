import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import InputComponent from '../components/InputComponent';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../views/Home';
import Meet from '../views/Meet';
import Login from '../views/Login';
import Pasta from '../views/Pasta';
import Salad from '../views/Salad';
import Card from '../views/Card';
import Drinks from '../views/Drinks';
import Onboarding from '../views/Onboarding';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ListItem } from '@rneui/base';
import Dessert from '../views/Dessert';



export default props => {

    const Stack = createNativeStackNavigator();

    const Tab = createMaterialTopTabNavigator();


    function HomeScreen (){
        return(
            <Tab.Navigator screenOptions={{tabBarScrollEnabled: true, 
                headerShown: false, 
                tabBarStyle: {
                    paddingTop: 50, 
                    backgroundColor: '#c93e22',
                },
                tabBarLabelStyle: {
                    fontSize: 14,
                    color: 'white',
                    fontWeight: 'bold'
                }
            }}>
                <Tab.Screen name='Home' component={Home}/>
                <Tab.Screen name='Carnes' component={Meet}/>
                <Tab.Screen name='Massas' component={Pasta}/>
                <Tab.Screen name='Saladas' component={Salad}/>
                <Tab.Screen name='Bebidas' component={Drinks}/>
                <Tab.Screen name='Sobremesas' component={Dessert}/>
            </Tab.Navigator>
        );
    }

    function ModalScreen({ navigation }) {
        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 30 }}>Tuvalu</Text>
            <Button onPress={() => navigation.goBack()} title="Dismiss" />
          </View>
        );
      }

    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='Onboarding' component={Onboarding} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
            <Stack.Screen name='Card' component={Card} />
            <Stack.Screen name='ModalScreen' component={ModalScreen} />
        </Stack.Navigator>
    )
}