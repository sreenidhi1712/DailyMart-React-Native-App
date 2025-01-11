
import { View, Text } from 'react-native'
import React from 'react'
import NavbarSkeleton from './NavbarSkeleton'
import CategoryOptionSkeleton from './CategoryOptionSkeleton'
import ProductContainerSkeleton from './ProductContainerSkeleton'
import {
    configureReanimatedLogger,
    ReanimatedLogLevel,
  } from 'react-native-reanimated';
  
  // This is the default configuration
  configureReanimatedLogger({
    level: ReanimatedLogLevel.warn,
    strict: true, // Reanimated runs in strict mode by default
  });

const HomePageSkeleton = () => {
  return (
    <View className="w-full flex-1 bg-white">
         <NavbarSkeleton/>
    
    <CategoryOptionSkeleton/>

    <View key={49} className="w-[50%] h-10 bg-gray-200 self-start ml-4 rounded-lg animate-shimmer"></View>

    <View className="w-full flex items-center flex-row gap-3  mt-5 px-4">
         <ProductContainerSkeleton/>
         <ProductContainerSkeleton/>
         <ProductContainerSkeleton/>
    </View>
   
    <View className="w-[50%] h-10 bg-gray-200 self-start ml-4 rounded-lg mt-5 animate-shimmer" key={47}></View>

    <View className="w-full flex items-center flex-row gap-3  mt-5 px-4">
        <ProductContainerSkeleton/>
         <ProductContainerSkeleton/>
       <ProductContainerSkeleton/>

    </View>


  


    </View>
  )
}

export default HomePageSkeleton