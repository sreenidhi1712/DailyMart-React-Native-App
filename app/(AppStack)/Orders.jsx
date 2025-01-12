import { View, Text, SafeAreaView, ScrollView, Image, Pressable } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { Context } from '../../Context/Context';
import useProductActions from '../../utils/useProductActions';
import { useNavigation } from '@react-navigation/native';
import OrdersSkeleton from '../../components/LoadingSkeletons/OrdersSkeleton';




const Orders = () => {
  const navigation = useNavigation();
  const { orders, products,orderLoading,setOrderLoading} = useContext(Context);
  const {getOrders} = useProductActions();
  const sortedOrders = [...orders].sort((a, b) => new Date(b.date) - new Date(a.date))
  useEffect( () => {
    const fetchOrders = async () =>{
    await getOrders();
    setOrderLoading(false);
    }
    fetchOrders();
  }, [orders, getOrders]);
  return (
      <SafeAreaView className="flex-1  ">
      {orderLoading?<OrdersSkeleton/>:
       <View className="w-full ">
      <View className="w-full flex items-center p-3">
      <Text className="text-3xl text-green-800 font-extrabold">Orders</Text>
      </View>
      <ScrollView className="w-full mb-20" showsVerticalScrollIndicator={false} >

<View className="w-full flex items-center p-3 gap-4">
  
      { sortedOrders.map((order) => (
          <View className="w-full flex items-center p-3 bg-white rounded-lg relative" key={order._id}>
              
              
               <Text className="self-start font-bold text-lg">Address - {order.address}</Text>
               <Text className="self-start font-bold text-sm">Order Status - {order.status}</Text>
               <Text className="self-start font-extrabold ">Rs {order.amount}</Text>
               <View className="w-[100%] flex flex-row flex-wrap">
               {order.orderItems.map((item,index) => {
        const product = products.find((product) => product._id === item.item);
        return (
              <Text key={index} className="font-light">{product?.name}*{item.quantity}, </Text>
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
      </View>
      }
    </SafeAreaView>
  )
}

export default Orders