import React from 'react'
import { Tabs } from 'expo-router'
import 'nativewind'
import 'tailwindcss/tailwind.css'
import "../../global.css"
import { Ionicons } from 'react-native-vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeLayout from './(home)/_layout'
import Cart from './Cart'
import Favourite from './Favourite'
import Orders from './Orders'


const AppStack = () => {

  const Tabs = createBottomTabNavigator()
  return (

      <Tabs.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: '#BFF6C3',
          tabBarInactiveTintColor: 'gray',
          tabBarHideOnKeyboard: true,
          
          tabBarStyle: {
            backgroundColor: 'white',
            height: 60,
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName

            if (route.name === '(home)') {
              iconName = focused ? 'home' : 'home-outline'
            } else if (route.name === 'Cart') {
              iconName = focused ? 'cart' : 'cart-outline'
            } else if (route.name === 'Favourite') {
              iconName = focused ? 'heart' : 'heart-outline'
            } else if (route.name === 'Orders') {
              iconName = focused ? 'list' : 'list-outline'
            }

            return <Ionicons name={iconName} size={size} color={color} />
          },
        })}
      >
        <Tabs.Screen name="(home)" component={HomeLayout}   options={{ title: "Home", tabBarLabel: "Home",headerShown:false }} />
        <Tabs.Screen name="Cart" component={Cart} options={{ headerShown: false }}/>
        <Tabs.Screen name="Favourite" component={Favourite} options={{ headerShown: false }}/>
        <Tabs.Screen name="Orders" component={Orders} options={{ headerShown: false }}/>
      </Tabs.Navigator>

  )
}

export default AppStack