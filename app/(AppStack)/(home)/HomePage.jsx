
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProductContainer from '../../../components/ProductContainer';
import { Context } from '../../../Context/Context';
import { FlatList, Image, Pressable, ScrollView, Text, View } from 'react-native';
import Navbar from '../../../components/Navbar';
import Category from '../../../components/Category';
import { useNavigation } from '@react-navigation/native';
import useProductActions from '../../../utils/useProductActions';
import HomePageSkeleton from '../../../components/LoadingSkeletons/HomePageSkeleton';
import CardOffer1 from "../../../assets/images/cardoffer1.png"
import CardOffer2 from "../../../assets/images/offer2.png"
import CardOffer3 from "../../../assets/images/offer3.png"


const CardOfferData =[
  {
id:1,
offerTitle:" Get 50% off on your first order",
image:CardOffer1,
bgColor:"bg-amber-300"
  },
  {
id:2,
offerTitle:"Everyday fresh offers on fruits and vegetables",
image:CardOffer2,
bgColor:"bg-red-300"
  },
  {
id:3,
offerTitle:"Make your breakfast healthy with our dairy products",
image:CardOffer3,
bgColor:"bg-orange-300"
  },
]

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

      <View className="w-full flex  pb-4 mt-5">
             <FlatList
             data={CardOfferData}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <View className={`w-80 ${item.bgColor} rounded-3xl  h-44 ml-5 flex flex-row`}>
          
            <View className="w-[50%] h-full flex items-center justify-center">
                  <Text className="text-xl font-extrabold  text-white ml-3 ">
                      {item.offerTitle}
                  </Text>
            </View>
            <View className="w-[50%] h-full flex items-center justify-center">
                      <Image className="h-[90%] w-[100%] object-contain" source={item.image}/>
            </View>
           

          </View>
              )}
              />
      </View>
 
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

