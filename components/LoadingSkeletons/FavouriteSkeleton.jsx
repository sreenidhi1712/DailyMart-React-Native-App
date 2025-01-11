import { View, Text } from 'react-native'
import React from 'react'
import ProductContainerSkeleton from './ProductContainerSkeleton'

const FavouriteSkeleton = () => {
  return (
    <View className="w-full flex-1 bg-white flex items-center ">
        <View className="w-[95%] flex flex-row justify-center py-5 gap-5 flex-wrap">
            <ProductContainerSkeleton/>
            <ProductContainerSkeleton/> 
            <ProductContainerSkeleton/>
            <ProductContainerSkeleton/> 
            <ProductContainerSkeleton/>
            <ProductContainerSkeleton/> 
        </View>
    </View>
  )
}

export default FavouriteSkeleton