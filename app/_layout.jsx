import React from 'react'
import { Tabs } from 'expo-router'
import 'nativewind'
import 'tailwindcss/tailwind.css'
import "../global.css"
import ContextProvider from '@/Context/Context'
import { Ionicons } from 'react-native-vector-icons'


const _layout = () => {
  return (
    <ContextProvider>
      <Tabs
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: '#BFF6C3',
          tabBarInactiveTintColor: 'gray',
          tabBarHideOnKeyboard: true,
          
          tabBarStyle: {
            backgroundColor: 'white',
            height: 70,
            paddingBottom: 10,
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
        <Tabs.Screen name="(home)"  options={{ title: "Home", tabBarLabel: "Home",headerShown:false }} />
        <Tabs.Screen name="Cart" options={{ headerShown: false }}/>
        <Tabs.Screen name="Favourite" options={{ headerShown: false }}/>
        <Tabs.Screen name="Orders" options={{ headerShown: false }}/>
      </Tabs>
    </ContextProvider>
  )
}

export default _layout