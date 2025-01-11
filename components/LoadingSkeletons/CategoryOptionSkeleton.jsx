import { View, Text } from 'react-native'
import React from 'react'

const CategoryOptionSkeleton = () => {
  return (
    <View className="w-full flex flex-row items-center px-4 mt-3 mb-5 justify-evenly">
            <View key={104} className="w-14 h-14 bg-gray-200 rounded-full animate-shimmer"></View>
            <View key={46} className="w-14 h-14 bg-gray-200 rounded-full animate-shimmer"></View>
            <View key={54} className="w-14 h-14 bg-gray-200 rounded-full animate-shimmer"></View>
            <View key={89} className="w-14 h-14 bg-gray-200 rounded-full animate-shimmer"></View> 
    </View>
  )
}

export default CategoryOptionSkeleton