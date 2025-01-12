import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../Context/Context';
import useProductActions from '../../utils/useProductActions';
import ProductContainer from '../../components/ProductContainer';
import { Ionicons } from 'react-native-vector-icons'
import FavouriteSkeleton from '../../components/LoadingSkeletons/FavouriteSkeleton';

const Favourite = () => {

  const { favourite, products,loading } = useContext(Context);
  const {addToCart,addtofavourites} = useProductActions();
  const [favouriteProduct, setFavouriteProduct] = useState([]);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        // Map cart items to include product details
        const favouriteItemWithDetails = favourite.map(favouriteItem => {
          const product = products.find(item => item._id === favouriteItem.favouriteProduct);
          return {
            ...product,
          };
        });
  
        setFavouriteProduct(favouriteItemWithDetails);
      } catch (error) {
        console.error('Error fetching product details', error);
      }
    };
  
    fetchProductDetails();
  }, [favourite, products]);

  return (
    <SafeAreaView className="w-full flex items-center">
      {loading ? <FavouriteSkeleton/>: <View className="w-full flex items-center">

   
      <View className="w-full flex items-center p-3">
      <Text className="text-3xl font-extrabold text-green-800 ">Favourites</Text>
      </View>
    
      {
      favouriteProduct.length === 0 && <View className='flex   items-center mt-20 w-[80%]'> 
        <Ionicons name="heart" color="black" size={70} />
        <Text className='text-4xl  mt-5'>No favourites,please add some</Text>
        </View> 
        }
     <FlatList
        data={favouriteProduct}
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
         </View>}
    </SafeAreaView>
  )
}

export default Favourite