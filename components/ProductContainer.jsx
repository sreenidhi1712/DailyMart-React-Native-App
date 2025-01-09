import { View, Text, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from 'react-native-vector-icons'
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { Context } from '../Context/Context';
import { useContext } from 'react';
import useProductActions from '../utils/useProductActions';
const url = "https://daily-mart-mern-stack-project.onrender.com";

const ProductContainer = ({items, addToCart,favouritings,favourites}) => {

    const navigation = useNavigation();
     const{cart} = useContext(Context);
     const {increment, decrement, RemoveItem } = useProductActions();

    const [toggleAddtoCart, setToggleAddtoCart] = useState(false);
 const [currentItem, setCurrentItem] = useState(null);

    useEffect(() => {
      // eslint-disable-next-line react/prop-types
      const isCurrentItemInCart = cart.some((item) => item.item === items._id);
      if (isCurrentItemInCart) {
        setToggleAddtoCart(true);
        // eslint-disable-next-line react/prop-types
        setCurrentItem(cart.find((item) => item.item === items._id));
      } else {
        setToggleAddtoCart(false);
      }
      // eslint-disable-next-line react/prop-types
    }, [cart, items._id]);
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

            <View className="w-[60%] flex flex-row justify-center items-center self-center">
                          {!toggleAddtoCart? (
                           <Pressable onPress={()=>addToCart(items)}>
                               <View className="border-2 border-green-200 rounded-lg p-2 mb-2">
                                <Text className="text-green-300 font-bold">Add to Cart</Text>
                               </View>
                           </Pressable>):(
                           <View className="flex flex-row gap-2 items-center">
                           <View className="flex flex-row items-center mt-3 mb-2 gap-2 border-2 border-green-200 h-10 w-36 justify-evenly rounded-md">
                           <Pressable onPress={() =>decrement(items)}>
                                <View className="border-r-2 px-2 border-green-200">
                                        <Text className="font-bold text-2xl text-green-600">-</Text>
                                </View>
                                </Pressable>
                                <View>
                                        <Text className="font-bold text-green-600">{currentItem?.quantity}</Text>
                                </View>
                                <Pressable onPress={() =>increment(items)}>
                                <View className="border-green-200 border-l-2 px-2">
                                        <Text className="font-bold text-lg text-green-600">+</Text>
                                </View>
                                </Pressable>
                           </View>
                           <Pressable onPress={()=>RemoveItem(items)}> 
                                 <Ionicons name="trash" size={20} color="red"/>
                           </Pressable>
                           
                           </View>
                           )
                        }
                        </View>

        <View className={`absolute ${favourites.some((favItem) => favItem.favouriteProduct === items._id) ? 'bg-red-100' : 'bg-green-200'} right-2 top-2 p-2 rounded-full flex items-center justify-center`}>
           <Ionicons name="heart" size={24} color={`${favourites.some((favItem) => favItem.favouriteProduct === items._id) ? 'red' : 'green'}`} onPress={() => favouritings(items)}/>
        </View>
       

    </View>
  )
}

export default ProductContainer