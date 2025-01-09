import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { Ionicons } from 'react-native-vector-icons'
import { useNavigation } from '@react-navigation/native';

const url = "https://daily-mart-mern-stack-project.onrender.com";

const ProductContainer = ({items, addToCart,favouritings}) => {

    const navigation = useNavigation();
  return (
    <View className={`relative  rounded-lg border-2 border-green-300 m-1 w-48  gap-2 group bg-white  shadow-lg `}>
        
         <Pressable onPress={() => navigation.navigate('ProductDetails', {itemID: items._id})}>
        <View className="w-full flex flex-col items-center flex-shrink-0">
        <View className="py-6 w-[96%] mt-1 flex items-center justify-center rounded-t-lg bg-green-100">
            <Image
                className="h-36 w-[90%]  object-cover rounded-lg"
                source={{uri: `${url}/images/${items.image}`}}
            />
        </View>
       
        <View className="w-full flex  items-start p-4" >
            <Text className="text-center font-extrabold text-xl">{items.name}</Text>
            <Text className="text-sm font-light">{items.category}</Text>
            <Text className="text-center font-bold text-lg">Rs {items.price}</Text>
        </View> 
        </View>
        </Pressable>
        <View className="absolute bg-green-200 right-2 top-2 p-2 rounded-full flex items-center justify-center">
           <Ionicons name="heart" size={24} color="red" onPress={() => favouritings(items._id)}/>
        </View>
       

    </View>
  )
}

export default ProductContainer