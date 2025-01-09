import { SafeAreaView, FlatList } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../Context/Context';
import ProductContainer from '../../components/ProductContainer';
import useProductActions from '../../utils/useProductActions';
import { useRoute } from '@react-navigation/native'

const Category = () => {

   const route = useRoute();
   const { category } = route.params;
    const {addtofavourites,addToCart} =  useProductActions();
    const [data, setData] = useState([]);
    const {
        products,
        favourite,
      } = useContext(Context);

        useEffect(() => {
            if(category === 'Bakery'){
                const filteredData = products.filter((item) => item.category !== 'Fruits' && item.category !== 'Vegetables' && item.category !== 'Meat' && item.category !== 'Dairy' && item.category !== 'Cooking Essentials'&& item.category !== 'Oil');
                setData(filteredData);
              }else {const filteredData = products.filter((item) => item.category === category);
              setData(filteredData);
              }
            }, [category, products]);
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
            width={44}
            addToCart={addToCart}
            favouritings={addtofavourites}
            favourites={favourite}
          />
        )}
      />
    </SafeAreaView>
  )
}

export default Category