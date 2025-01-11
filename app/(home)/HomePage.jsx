
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProductContainer from '../../components/ProductContainer';
import { Context } from '@/Context/Context';
import { FlatList, Pressable, ScrollView, Text, View } from 'react-native';
import Navbar from '../../components/Navbar';
import Category from '../../components/Category';
import { useNavigation } from '@react-navigation/native';
import useProductActions from '../../utils/useProductActions';
import HomePageSkeleton from '../../components/LoadingSkeletons/HomePageSkeleton';



const HomePage = () => {
const navigation = useNavigation();
    const {
        fruitsAndVegetables,
        dairyProduct,
        cookingEssentials,
        beveragesAndSnacks,
        favourite,
        loading,
        
      } = useContext(Context);

      const { addToCart, addtofavourites } = useProductActions();


  return (
    <SafeAreaView style={{flex: 1,alignItems:"center"}} > 
    {loading ? <View className="w-full h-full bg-white">
       <HomePageSkeleton/>
    </View> :
    <View className="w-full h-full bg-white">
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
        </View>
}
    </SafeAreaView>
  )
}

export default HomePage

