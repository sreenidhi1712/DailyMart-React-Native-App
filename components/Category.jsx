import { View, Text, Pressable } from 'react-native'
import React from 'react'
import veggies from "../assets/images/veggiecategory.png";
import fruit from "../assets/images/fruitcategory.png";
import meat from "../assets/images/meatcategory.png";
import dairy from "../assets/images/dairycategory.png";
import bakery from "../assets/images/bakerycategory.png";
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const categories = [
    {
        name: "Vegetables",
        image:veggies
    },
    {
        name: "Fruits",
        image: fruit
    },
    {
        name: "Meat",
        image: meat
    },
    {
        name: "Dairy",
        image: dairy
    },
    {
        name: "Bakery",
        image: bakery
    }
]


const Category = () => {
    const navigation = useNavigation();
    const handleCategory = (category) => {
        navigation.navigate('Category', {category:category});
    }
  return (
    <View className="w-full flex flex-row justify-evenly mt-3">
        {categories.map((category) => (
            <Pressable onPress={() => handleCategory(category.name)} key={category.name}>  
            <View className="flex flex-col items-center" >
                <View className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                <Image
                    className="h-[70%] w-[70%] object-cover rounded-lg"
                    source={category.image}
                />
                  </View>
                <Text className="text-center font-bold text-xs">{category.name}</Text>
            </View>
            </Pressable>
        ))}
    </View>
  )
}

export default Category