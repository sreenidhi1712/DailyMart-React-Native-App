import { View, Text } from 'react-native'
import React from 'react'

const CartSkeleton = () => {
  return (
    <View className="w-full flex-1 bg-white flex items-center">

        <View className="h-10 w-[50%] rounded-lg bg-gray-200 animate-shimmer" key={424546}></View>
        <View className="w-[90%] h-20 bg-gray-100 p-2 mt-10 rounded-lg flex flex-row items-center justify-evenly">
            <View className=" h-[30%] w-[20%] bg-gray-300 animate-shimmer rounded-lg" key={87545}/>
            <View className=" h-[60%] w-[30%] bg-gray-300 animate-shimmer rounded-lg" key={87546}/>
            <View className=" h-[30%] w-[20%] bg-gray-300 animate-shimmer rounded-lg" key={87547}/>
        </View>

        <View className="w-[90%] h-64 bg-gray-100 p-2 mt-10 rounded-lg flex  items-center justify-evenly">
            <View className=" h-[7%] w-[90%] bg-gray-300 animate-shimmer rounded-lg" key={87545}/>
            <View className=" h-[7%] w-[90%] bg-gray-300 animate-shimmer rounded-lg" key={87546}/>
            <View className=" h-[7%] w-[90%] bg-gray-300 animate-shimmer rounded-lg" key={87547}/>
            <View className=" h-[15%] w-[90%] bg-gray-300 animate-shimmer rounded-lg" key={87548}/>
            <View className=" h-[20%] w-[50%] bg-gray-300 animate-shimmer rounded-lg" key={87549}/>
        </View>

        <View className="w-[90%] h-16 bg-gray-100 p-3 mt-10 rounded-lg flex items-center justify-center">
             <View className="w-[90%] h-[60%] bg-gray-200 rounded-lg animate-shimmer" key={54545}/>
        </View>

    </View>
  )
}

export default CartSkeleton