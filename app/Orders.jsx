import { View, Text, SafeAreaView, ScrollView, Image, Pressable } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { Context } from '../Context/Context';
import useProductActions from '../utils/useProductActions';
import { useNavigation } from '@react-navigation/native';


const url = "https://daily-mart-mern-stack-project.onrender.com";

const Orders = () => {
  const navigation = useNavigation();
  const { orders, products} = useContext(Context);
  const {getOrders} = useProductActions();
  const sortedOrders = [...orders].sort((a, b) => new Date(b.date) - new Date(a.date))
  useEffect(() => {
    getOrders();
  }, [orders]);
  return (
      <SafeAreaView className="flex-1  ">
      
       
      <View className="w-full flex items-center p-3">
      <Text className="text-3xl text-green-800 font-extrabold">Orders</Text>
      </View>
      <ScrollView className="w-full " showsVerticalScrollIndicator={false} >

<View className="w-full flex items-center p-3 gap-4">
  
      {orders.length === 0 ? 
      <View className="text-center text-gray-700">
      <Text className="text-xl">No orders placed yet.</Text>
    </View> :
      sortedOrders.map((order) => (
          <View className="w-full flex items-center p-3 bg-white rounded-lg relative" key={order._id}>
              
              
               <Text className="self-start font-bold text-lg">Address - {order.address}</Text>
               <Text className="self-start font-bold text-sm">Order Status - {order.status}</Text>
               <Text className="self-start font-extrabold ">Rs {order.amount}</Text>
               <View className="w-[100%] flex flex-row flex-wrap">
               {order.orderItems.map((item,index) => {
        const product = products.find((product) => product._id === item.item);
        return (
              <Text key={index} className="font-light">{product.name}*{item.quantity}, </Text>
    );
      })}
      </View>
            <Text className="self-start font-bold"> {new Date(order.date).toLocaleDateString()}</Text>
            <Pressable className="flex items-center absolute right-3 top-2" onPress={() => {navigation.navigate('(home)',{screen:'OrderDetails',params:{order}})}}>
               <Text className="font-light text-sm">View Details</Text>
            </Pressable>
          </View>
          
         
      ))}
      
</View>
   
        
      </ScrollView>
      
    </SafeAreaView>
  )
}

export default Orders