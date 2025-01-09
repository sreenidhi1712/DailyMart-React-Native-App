
import React from 'react'
import { Stack } from 'expo-router'
import ProductList from './ProductList'


const HomeLayout = () => {
  return (
    <Stack>
        <Stack.Screen name="index"   options={{title:"Home",headerShown:false}} />
        <Stack.Screen name="ProductDetails"  options={{title:"Products",headerShown:false}}/>
        <Stack.Screen name='ProductList'  options={{title:"ProductList",headerShown:false}}/>
        <Stack.Screen name='Category'  options={{title:"Category",headerShown:false}}/>
    </Stack>
  )
}

export default HomeLayout