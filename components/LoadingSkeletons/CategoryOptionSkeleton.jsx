import { View, Text } from 'react-native'
import React from 'react'

const CategoryOptionSkeleton = () => {
  return (
    <View className="w-full flex flex-row items-center px-4 mt-3 mb-5 justify-evenly">
            <View className="w-14 h-14 bg-gray-200 rounded-full "></View>
            <View className="w-14 h-14 bg-gray-200 rounded-full "></View>
            <View className="w-14 h-14 bg-gray-200 rounded-full "></View>
            <View className="w-14 h-14 bg-gray-200 rounded-full "></View> 
    </View>
  )
}

export default CategoryOptionSkeleton