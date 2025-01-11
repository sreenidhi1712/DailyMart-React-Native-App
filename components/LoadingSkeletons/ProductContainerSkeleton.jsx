import { View, Text } from 'react-native'
import React from 'react'

const ProductContainerSkeleton = () => {
  return (
     <View className="w-[45%] h-64 bg-gray-200 rounded-lg flex items-center py-2">
                  <View className="w-[90%] h-[50%] bg-gray-300 rounded-lg animate-shimmer" key={3845}>
                     
                  </View>
                  <View className="w-[90%] h-[50%]  rounded-lg mt-1 flex items-center ">
                      <View className="w-[60%] h-5 bg-gray-300 rounded-lg self-start mt-1 animate-shimmer" key={3784}></View>
                      <View className="w-[40%] h-5 bg-gray-300 rounded-lg self-start mt-1 animate-shimmer" key={691}></View>
                      <View className="w-[60%] h-5 bg-gray-300 rounded-lg self-start mt-1 animate-shimmer " key={69564}></View>
                      <View className="w-[70%] h-10 bg-gray-300 rounded-lg  mt-1 animate-shimmer" key={5154512}></View>
                   </View>
            </View>
  )
}

export default ProductContainerSkeleton