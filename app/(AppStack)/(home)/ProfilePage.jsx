import { View, Text, Pressable, Modal } from 'react-native'
import React, { useContext, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Context } from '../../../Context/Context';
import {  SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from 'react-native-vector-icons'
import { useNavigation } from '@react-navigation/native';



const ProfilePage = () => {

    const {setUserToken,userName} = useContext(Context);
    const navigation = useNavigation();
    const [isOpen,setIsOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('userToken');
      setUserToken(null);
    } catch (error) {
      console.error('Error logging out', error);
    }
  };
  const handleNavigation = (route) => {
    navigation.navigate(route);
  }

  return (
    <SafeAreaView className="flex-1 flex items-center bg-white">
        <View className="flex w-[100%] p-3 items-start mt-10">
            <Text className="font-bold text-4xl ml-7">{userName}</Text>
        <Ionicons name="person-circle-outline" size={130} color="gray" className="mt-5 ml-5 "/>
        </View>

        <View className="w-[100%] flex  mt-10">
            <View  className=" border-t-2 border-slate-200 w-[100%]  p-5 flex flex-row items-start justify-between">
                 <Text className="font-bold text-gray-400 text-xl">My Wishlist</Text>
                 <Pressable onPress={()=>handleNavigation('Favourite')}>
                 <Ionicons className="mr-2" name="chevron-forward" color="gray" size={20}/>
                 </Pressable>
            </View>
            <View  className="  border-t-2 border-slate-200 w-[100%]  p-5 flex flex-row items-start justify-between">
                    <Text className="font-bold text-gray-400 text-xl">My Cart</Text>
                    <Pressable onPress={()=>handleNavigation('Cart')}>
                    <Ionicons className="mr-2" name="chevron-forward" color="gray" size={20}/>
                    </Pressable>
              </View>
              <View  className="border-y-2 border-slate-200 w-[100%]  p-5 flex flex-row items-start justify-between">
                    <Text className="font-bold text-gray-400 text-xl">My Orders</Text>
                    <Pressable onPress={()=>handleNavigation('Orders')}>
                    <Ionicons className="mr-2" name="chevron-forward" color="gray" size={20}/>
                    </Pressable>
              </View>

        </View>

        <Pressable  className="w-[30%] bg-red-500 p-3 rounded-lg mt-10 flex items-center justify-center " onPress={()=>setIsOpen(true)}>
            <Text className="text-white font-extrabold text-2xl">Logout</Text>
        </Pressable>


           <Modal
             animationType="slide"
             transparent={true}
             visible={isOpen}
             statusBarTranslucent={true}
           >
                    <View className="flex flex-1 justify-center items-center bg-zinc-900/40 bg-opacity-50">
                         <View className="w-[80%] h-[25%] bg-white rounded-xl p-5 flex items-center">
                                   <Text className="text-3xl text-red-500 font-extrabold">
                                        Logout
                                   </Text>
                                   <Text className="text-xl text-gray-400 mt-2 text-center">
                                        Are you sure you want to logout? you'll need to login again to use this app
                                   </Text>
                                   <View className="w-[100%] flex flex-row justify-evenly mt-5 mx-5">
                                       <Pressable className="w-[40%] border-2 border-red-500 p-2 rounded-lg flex items-center justify-center" onPress={()=>setIsOpen(false)}>
                                          <Text className="text-red-500 font-bold text-xl">cancel</Text>
                                       </Pressable>
                                       <Pressable className="w-[40%] bg-red-500 p-2 rounded-lg flex items-center justify-center" onPress={handleLogout}>
                                          <Text className="text-white font-bold text-xl">Logout</Text>
                                       </Pressable>
                                       
                                   </View>
                         </View>
                    </View>
           </Modal>
            
      
   
    </SafeAreaView>
  )
}

export default ProfilePage