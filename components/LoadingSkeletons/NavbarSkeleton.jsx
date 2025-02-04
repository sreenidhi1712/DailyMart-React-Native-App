import { View, Text } from 'react-native'
import React from 'react'

const NavbarSkeleton = () => {
  return (
   <View className="w-full flex items-center pb-4 fixed top-0 left-0 bg-white ">
    <View className={`w-[60%] h-8 bg-gray-200 rounded-md  self-start ml-5 overflow-hidden animate-shimmer`}>   
    </View>

    <View className="w-[95%] mt-5 bg-gray-100 flex items-center rounded-3xl p-3">
        <View key={1} className="w-[60%] h-8 bg-gray-200 rounded-md  self-start animate-shimmer"></View>
        <View  key={100} className="w-[90%] h-20 bg-gray-200 rounded-lg mt-5 self-start animate-shimmer"></View>
    </View>
 
    </View> 
  )
}

export default NavbarSkeleton