
import React from 'react'
import { Stack } from 'expo-router'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeComponent from '.'
import ProductDetails from './ProductDetails'
import ProductList from './ProductList'
import OrderDetails from './OrderDetails'
import Category from './Category'
import ProfilePage from './ProfilePage'



const HomeLayout = () => {

  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator>
        <Stack.Screen name="index"  component={HomeComponent}  options={{title:"Home",headerShown:false}} />
        <Stack.Screen name="ProductDetails"  component={ProductDetails} options={{title:"Products",headerShown:false}}/>
        <Stack.Screen name='ProductList' component={ProductList} options={{title:"ProductList",headerShown:false}}/>
        <Stack.Screen name='Category'  component={Category} options={{title:"Category",headerShown:false}}/>
        <Stack.Screen name='OrderDetails' component={OrderDetails}  options={{headerShown: true,
          headerLeft: () => "", 
          headerTitleAlign:"left"
        }}/>
        <Stack.Screen name='Profile' component={ProfilePage}options={{title:"Profile",headerShown:false}} />
    </Stack.Navigator>
  )
}

export default HomeLayout