import { View, Text, SafeAreaView, ScrollView, FlatList } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../../Context/Context';
import ProductContainer from '../../../components/ProductContainer';
import useProductActions from '../../../utils/useProductActions';
import { useRoute } from '@react-navigation/native'

const ProductList = () => {

   const route = useRoute();
   const { category } = route.params;
    const {addtofavourites,addToCart} =  useProductActions();
    const [data, setData] = useState([]);
    const {
        dairyProduct,
        cookingEssentials,
        beveragesAndSnacks,
        fruitsAndVegetables,
        favourite
      } = useContext(Context);

      useEffect(() => {
        if (category === "products") {
          setData(fruitsAndVegetables);
        } else if (category === "beveragesAndSnacks") {
          setData(beveragesAndSnacks);
        } else if (category === "Dairy") {
          setData(dairyProduct);
        } else if (category === "CookingEssentials") {
          setData(cookingEssentials);
        }
      }, [beveragesAndSnacks, category, cookingEssentials, dairyProduct, fruitsAndVegetables]);
  return (
    <SafeAreaView className="w-full flex items-center">

      <FlatList
        data={data}
        keyExtractor={(item) => item._id}
        numColumns={2} 
        columnWrapperStyle={{ justifyContent: 'space-between' }} 
        showsVerticalScrollIndicator={false}
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
    </SafeAreaView>
  )
}

export default ProductList