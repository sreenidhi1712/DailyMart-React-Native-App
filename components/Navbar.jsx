import React, { useState, useEffect, useContext } from 'react'
import { View, Text, TextInput, FlatList, KeyboardAvoidingView, Pressable } from 'react-native'
import { Context } from '@/Context/Context'
import ProductContainer from './ProductContainer'
import useProductActions from '../utils/useProductActions'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from 'react-native-vector-icons'
// Adjust the import path as needed

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredProducts, setFilteredProducts] = useState([])
  const { products,favourite,setUserToken } = useContext(Context);
    const { addToCart, addtofavourites } = useProductActions;
    const navigation = useNavigation();

  useEffect(() => {
    if (searchTerm) {
      const results = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setFilteredProducts(results)
    } else {
      setFilteredProducts([])
    }
  }, [searchTerm, products])

const handleProfileNavigation =()=>{
navigation.navigate('Profile');
}

  return (
    <View className="w-full flex items-center pb-4 fixed top-0 left-0 bg-white">
      <View className="w-full flex flex-row justify-between items-center p-3 ">
          <Text className="text-3xl font-bold text-green-800 self-start ml-5 mt-5">DailyMart</Text>
          <Pressable onPress={handleProfileNavigation} className="self-end mr-3 " ><Ionicons name="person-circle-outline" size={55} color="gray"/></Pressable>
      </View>
      <View className="w-[95%] mt-1 bg-[#BFF6C3] flex items-center rounded-3xl p-3">
        <Text className="text-3xl font-bold text-green-800">What would you like to order</Text>
        <TextInput
          placeholder="Enter name of product"
          className="w-[90%] mt-10 bg-white rounded-lg"
          value={searchTerm}
          onChangeText={setSearchTerm} // Use onChangeText
        />
      </View>

      {!filteredProducts.length && searchTerm !== '' ? (
        <View className="w-full flex justify-center mb-10">
          <Text className="text-xl font-bold">
            {`! Sorry we don't have products you are searching for`}
          </Text>
        </View>
      ) : null}

      <FlatList
        data={filteredProducts}
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
  )
}

export default Navbar






