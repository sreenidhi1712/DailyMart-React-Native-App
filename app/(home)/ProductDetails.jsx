import { View, Text, FlatList, ScrollView, Image, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import { useRoute } from '@react-navigation/native'
import useProductActions from '../../utils/useProductActions'
import { Ionicons } from 'react-native-vector-icons'
import { useContext,useState } from 'react'
import { Context } from '../../Context/Context'
import ProductContainer from '../../components/ProductContainer'


const url = "https://daily-mart-mern-stack-project.onrender.com";

export default function ProductDetails({  }) {

  const route = useRoute()
  const { itemID } = route.params
  const {products,cart,favourite} = useContext(Context);
  const [currentItem, setCurrentItem] = useState(null);
  const [toggleAddtoCart, setToggleAddtoCart] = useState(false);
  

  const individualProduct = products.find((product) => product._id === itemID);
  const relatedProducts = products.filter(
    (product) =>
      product.category === individualProduct.category && product._id !== itemID
  );

  const {addToCart, addtofavourites, increment, decrement, RemoveItem } = useProductActions();

  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    const isCurrentItemInCart = cart.some(
      (item) => item.item === individualProduct._id
    );
    if (isCurrentItemInCart) {
      setToggleAddtoCart(true);
      // eslint-disable-next-line react/prop-types
      setCurrentItem(
        cart.find((item) => item.item === individualProduct._id)
      );
    } else {
      setToggleAddtoCart(false);
    }
    {
      /* eslint-disable-next-line react/prop-types */
    }
  }, [cart, individualProduct._id]);

  return (
    <ScrollView 
    showsHorizontalScrollIndicator={false}
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{alignItems: 'center'}}
    className="w-full flex-1 flex  bg-slate-100">
      <View className="w-full flex items-center h-10 justify-center rounded-b-lg bg-white fixed top-0 left-0">
        <Text className="text-3xl font-bold ">
        {individualProduct.name}
        </Text>
      </View>

      <View className="w-[92%] bg-white mt-5 rounded-lg relative flex items-center">
          <View className="py-5 w-[95%] rounded-lg mt-5 border-2 border-slate-200 flex justify-center items-center">
               <Image   
               className="h-36 w-[70%]  object-cover rounded-lg"
                source={{uri: `${url}/images/${individualProduct.image}`}}/>
          </View>

          <View className="m-5 w-[95%] flex flex-row justify-between items-center px-2 rounded-lg border-2 border-slate-200 py-5">

                <View className="flex w-[50%]">
                    <Text className="font-bold text-xl">{individualProduct.name}</Text>
                    <Text><Text className="font-bold">Price :</Text>Rs {individualProduct.price}</Text>
                </View>

                <View className="w-[50%] flex flex-row justify-center items-center">
                  {!toggleAddtoCart? (
                   <Pressable onPress={()=>addToCart(individualProduct)}>
                       <View className="border-2 border-green-200 rounded-lg p-3">
                        <Text className="text-green-300 font-bold">Add to Cart</Text>
                       </View>
                   </Pressable>):(
                   <View className="flex flex-row gap-2 items-center mt-3 mb-2">
                   <View className="flex flex-row items-center mt-3 mb-2 gap-2 border-2 border-green-200 h-10 w-36 justify-evenly rounded-md">
                   <Pressable onPress={() =>decrement(individualProduct)}>
                        <View className="border-r-2 px-2 border-green-200">
                                <Text className="font-bold text-2xl text-green-600">-</Text>
                        </View>
                        </Pressable>
                        <View>
                                <Text className="font-bold text-green-600">{currentItem?.quantity}</Text>
                        </View>
                        <Pressable onPress={() =>increment(individualProduct)}>
                        <View className="border-green-200 border-l-2 px-2">
                                <Text className="font-bold text-lg text-green-600">+</Text>
                        </View>
                        </Pressable>
                   </View>
                   <Pressable onPress={()=>RemoveItem(individualProduct)}> 
                         <Ionicons name="trash" size={20} color="red"/>
                   </Pressable>
                   
                   </View>
                   )
                }
                </View>

          </View>
           <View className={`absolute ${favourite.some((favItem) => favItem.favouriteProduct === individualProduct._id) ? 'bg-red-200' : 'bg-green-200'} right-2 top-2 p-2 rounded-full flex items-center justify-center`}>
                     <Ionicons name="heart" size={24}  color={`${favourite.some((favItem) => favItem.favouriteProduct === individualProduct._id) ? 'red' : 'green'}`}  onPress={() => addtofavourites(individualProduct)}/>
          </View>
      </View>
      <View className="flex flex-col w-[92%] mt-3 items-center rounded-lg bg-white p-4">
        <Text className="text-justify">{individualProduct.description}</Text>
      </View>
      <Text className="self-start ml-3 font-bold mt-2 text-xl">Related Products</Text>
      <View className="lap:hidden  flex overflow-x-scroll hide-scrollbar w-full lap:overflow-hidden lap:flex-wrap lap:justify-evenly mb-16">
      <FlatList
        data={relatedProducts}
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
      />
      </View>
    </ScrollView>
  )
}