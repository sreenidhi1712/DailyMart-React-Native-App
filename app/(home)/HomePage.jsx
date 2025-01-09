
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProductContainer from '../../components/ProductContainer';
import { Context } from '@/Context/Context';
import axios from 'axios';
import { FlatList, Pressable, ScrollView, Text, View } from 'react-native';
import Navbar from '../../components/Navbar';
import Category from '../../components/Category';
import { useNavigation } from '@react-navigation/native';
import useProductActions from '../../utils/useProductActions';




const url = "https://daily-mart-mern-stack-project.onrender.com";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZGQ3OTQxYWE3YWYwZjA3Zjc4MjJkMiIsImlhdCI6MTcyNTk1MTM2M30.ZITLummc9bVbRM3LrJ-_u07IVsJdQYgP3AIJPhedC18";

const HomePage = () => {
const navigation = useNavigation();
    const {
        fruitsAndVegetables,
        dairyProduct,
        cookingEssentials,
        beveragesAndSnacks,
        favourite
        
      } = useContext(Context);

      const { addToCart, addtofavourites } = useProductActions();


  return (
    <SafeAreaView style={{flex: 1,alignItems:"center"}} > 
       <Navbar/>
    <ScrollView 
        showsVerticalScrollIndicator={false} // Hide vertical scrollbar
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ alignItems: 'center' }}
        className="w-full h-auto py-2 bg-white flex flex-col"
        >
  
    <Category/>
    <View className="w-full flex items-center pb-4 mt-5">
       <Text className="text-3xl font-extrabold  self-start ml-5">Fresh picks for you</Text>
    </View>
    <FlatList
        data={fruitsAndVegetables.slice(0, 5)}
        keyExtractor={(item) => item._id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <ProductContainer
            key={item._id}
            items={item}
            addToCart={addToCart}
            favouritings={addtofavourites}  
            favourites={favourite}
          />
        )}
        ListFooterComponent={()=><Pressable onPress={()=>navigation.navigate("ProductList",{category:"products"})}
        className="w-[100%] mr-2 bg-green-300 justify-center rounded-full  flex items-center p-4 mt-32">
          <Text className="text-xl text-white font-bold ">View All</Text>
        </Pressable>}
      />
      <View className="w-full flex items-center pb-4 mt-5">
       <Text className="text-3xl font-extrabold  self-start ml-5">Beverages and Snacks</Text>
    </View>

    <FlatList
        data={beveragesAndSnacks.slice(0, 5)}
        keyExtractor={(item) => item._id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <ProductContainer
            key={item._id}
            items={item}
            addToCart={addToCart}
            favouritings={addtofavourites}
            favourites={favourite}
            
          />
        )}
        ListFooterComponent={()=><Pressable onPress={()=>navigation.navigate('ProductList',{category:"beveragesAndSnacks"})}
        className="w-[100%] mr-2 bg-green-300 justify-center rounded-full  flex items-center p-4 mt-32">
          <Text className="text-xl text-white font-bold ">View All</Text>
        </Pressable>}
      />

    <View className="w-full flex items-center pb-4 mt-5">
       <Text className="text-3xl font-extrabold  self-start ml-5">
     
        Dairy Products
        </Text>
    </View>

    <FlatList
        data={dairyProduct.slice(0, 5)}
        keyExtractor={(item) => item._id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <ProductContainer
            key={item._id}
            items={item}
            addToCart={addToCart}
            favouritings={addtofavourites}
            favourites={favourite}
            
          />
        )}
        ListFooterComponent={()=><Pressable onPress={()=>navigation.navigate("ProductList",{category:"Dairy"})}
         className="w-[100%] mr-2 bg-green-300 justify-center rounded-full  flex items-center p-4 mt-32">
          <Text className="text-xl text-white font-bold ">View All</Text>
        </Pressable>}
      />

    <View className="w-full flex items-center pb-4 mt-5">
       <Text className="text-3xl font-extrabold  self-start ml-5">Cooking Essentials</Text>
    </View>


    <FlatList
        data={cookingEssentials.slice(0, 5)}
        keyExtractor={(item) => item._id}
        horizontal
        className="mb-10"
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <ProductContainer
            key={item._id}
            items={item}
            addToCart={addToCart}
            favouritings={addtofavourites}
            favourites={favourite}
            
          />
        )}
        ListFooterComponent={()=><Pressable onPress={()=>navigation.navigate("ProductList",{category:"CookingEssentials"})}
        className="w-[100%] mr-2 bg-green-300 justify-center rounded-full  flex items-center p-4 mt-32">
          <Text className="text-xl text-white font-bold ">View All</Text>
        </Pressable>}
      />

        </ScrollView> 
    </SafeAreaView>
  )
}

export default HomePage

