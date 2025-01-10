
import React from 'react'
import { Stack } from 'expo-router'



const HomeLayout = () => {
  return (
    <Stack>
        <Stack.Screen name="index"   options={{title:"Home",headerShown:false}} />
        <Stack.Screen name="ProductDetails"  options={{title:"Products",headerShown:false}}/>
        <Stack.Screen name='ProductList'  options={{title:"ProductList",headerShown:false}}/>
        <Stack.Screen name='Category'  options={{title:"Category",headerShown:false}}/>
        <Stack.Screen name='OrderDetails'  options={{headerShown: true,
          headerLeft: () => "", 
          headerTitleAlign:"left"
        }}/>
    </Stack>
  )
}

export default HomeLayout