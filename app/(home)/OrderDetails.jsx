import { View, Text, SafeAreaView } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { useRoute } from '@react-navigation/native'
import { Context } from '../../Context/Context';
import { useNavigation } from 'expo-router';


const OrderDetails = () => {
    const route = useRoute();
    const { order } = route.params;
    const {  products} = useContext(Context);
    const navigation = useNavigation()
    useEffect(() => {
        navigation.setOptions({ title: `ORDER #${order._id}` })
      }, [navigation])

  return (
    <SafeAreaView className="w-[100%] flex-1 bg-white ">
    <View className="w-[100%] h-[100%]  flex items-center ">
        <View className="w-full flex items-start p-3 bg-slate-100 mt-10">
           <Text className="self-start font-light text-lg ">View Details</Text>
        </View>
        <View className="w-full flex items-start p-3 bg-white">
        {order.orderItems.map((item,index) => {
        const product = products.find((product) => product._id === item.item);
        return (
        <View key={index} className="w-[100%] flex flex-row justify-between items-center p-3">
              <Text className="font-light">{item.quantity} * {product.name}</Text>
                <Text className="font-light">Rs {product.price*item.quantity}</Text>
        </View>
        )})}  
         </View>  

         <View className="w-full flex items-start p-3 bg-slate-100">
           <Text className="self-start font-light text-lg ">Bill Details</Text>
        </View>

        <View className="w-full flex flex-row items-center justify-between p-3 ">
           <Text className="font-light ">Item Bill</Text>
           <Text className="font-light ">Rs {order.amount}</Text>
        </View>
        <View className="w-full flex flex-row items-center justify-between p-3 ">
           <Text className="font-light ">Delivery Fee</Text>
           <Text className="font-light ">Rs 0</Text>
        </View>
        <View style={{ width: '96%', height: 1, backgroundColor: '#ccc', marginVertical: 10 }} />
        <View className="w-full flex flex-row items-center justify-between p-3 ">
           <Text className="font-light ">Grand Total</Text>
           <Text className="font-light ">Rs {order.amount}</Text>
        </View>
    </View>
    </SafeAreaView>
  )
}

export default OrderDetails