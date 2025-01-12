import { View, Text, SafeAreaView, Pressable, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useContext, useState,useEffect } from 'react'
import { Context } from '../../Context/Context';
import { useNavigation } from '@react-navigation/native';
import useProductActions from '../../utils/useProductActions';
import { Ionicons } from 'react-native-vector-icons'
import CartSkeleton from '../../components/LoadingSkeletons/CartSkeleton';

const Cart = () => {

  const { products ,cart,loading} = useContext(Context);
  const navigate = useNavigation();
  const {increment,decrement,handleCheckout} = useProductActions();
  const [total, setTotal] = useState(0);
  const [productWithDetails, setProductWithDetails] = useState([]);
  const [address, setAddress] = useState('');

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const cartWithDetails = cart.map(cartItem => {
          const product = products.find(item => item._id === cartItem.item);
          return {
            ...product,
            quantity: cartItem.quantity,
          };
        });

        setProductWithDetails(cartWithDetails);

        let newTotal = 0;
        cartWithDetails.forEach(item => {
          newTotal += item.quantity * item.price;
        });
        setTotal(newTotal);
      } catch (error) {
        console.error('Error fetching product details', error);
      }
    };

    fetchProductDetails();
  }, [ cart, products]);

 const checkoutButton = async(navigate,cart,total,address)=>{
    await handleCheckout(navigate,cart,total,address);
    setAddress('');
 }

  return (
    <SafeAreaView className="flex-1  ">
      {loading ?<CartSkeleton/>: <View className="w-full ">
        
     

      <ScrollView className="w-full h-full bg-slate-100 " showsVerticalScrollIndicator={false} >

      <KeyboardAvoidingView  className="w-full flex-1 flex items-center bg-slate-100">

     
      {/* Items and its quantity display here */}
      <View>
        <Text className="text-3xl font-extrabold mt-5 text-green-800 mb-2">Cart</Text>
      </View>

       {cart.length === 0 ? <View className='flex   items-center mt-20 w-[80%]'> 
        <Ionicons name="cart" color="black" size={70} />
       <Text className='text-4xl  mt-5'>No Items in cart,please add some</Text>
       </View> :<>
      <View className="w-[90%] bg-white rounded-xl mt-5 h-auto  flex items-center">
      {productWithDetails.map((items) => (
                <View className="w-[100%]  p-2 flex flex-row justify-between items-center" key={items._id}>
                    <Text className="font-bold">
                      {items.name}
                    </Text>
                    <View className="flex flex-row items-center h-[100%] w-[60%] gap-3">
                    <View className="flex flex-row items-center mt-3 mb-2 gap-2 border-2 border-slate-200 h-10 w-32 justify-evenly rounded-md">
                                               <Pressable onPress={() =>decrement(items)}>
                                                    <View className="border-r-2 px-2 border-slate-200">
                                                            <Text className="font-bold text-2xl text-green-600">-</Text>
                                                    </View>
                                                    </Pressable>
                                                    <View>
                                                            <Text className="font-bold text-black">{items.quantity}</Text>
                                                    </View>
                                                    <Pressable onPress={() =>increment(items)}>
                                                    <View className="border-l-2 px-2 border-slate-200">
                                                            <Text className="font-bold text-lg text-green-600">+</Text>
                                                    </View>
                                                    </Pressable>
                    </View>

                    <Text className="font-bold">
                        Rs {items.price*items.quantity}
                    </Text>
                    </View>
                       

                </View>
        ))}
      </View>


{/* Items total display here */}

      <View className="w-[90%] bg-white rounded-xl mt-5 h-auto p-3 flex items-center">
           <View className='flex flex-row justify-between items-center w-[100%] p-2'>
               <Text className="font-bold text-slate-500">
                  item Total
               </Text>
               <Text className="font-bold">
                  Rs {total}
               </Text>
           </View>
            <View className='flex flex-row justify-between items-center w-[100%] p-2'>
                <Text className="font-bold text-slate-500">
                    Delivery Charges
                </Text>
                <Text className="font-bold">
                    Rs 0
                </Text>
            </View>
           <View className='flex flex-row justify-between items-center w-[100%] p-2'>
               <Text className="font-bold text-slate-500">
                  to pay
               </Text>
               <Text className="font-bold">
                  Rs {total}
               </Text>
           </View>

           <View className="`w-[100%] p-2">
            <TextInput
                placeholder="Enter Address"
                value={address}
                onChangeText={setAddress}
                className="border-2 border-slate-200 rounded-lg p-2 w-[100%] mt-2"
                multiline={true}
                numberOfLines={4}
                style={{ width: 300 }}
                />
           </View>

           <View>
                <Pressable onPress={()=>checkoutButton(navigate,cart,total,address)} disabled={address === ''} >
                    <View className={`w-[100%] bg-green-300 justify-center rounded-lg  flex items-center p-4 mt-5 ${address === '' ? 'bg-slate-200' : ''}`}>
                        <Text className="text-xl text-white font-bold ">Checkout</Text>
                    </View>
                </Pressable>
           </View>
      </View>
      <View className="w-[90%] bg-white rounded-xl mt-5 h-auto p-3 flex items-center mb-7">
         <Text className="font-bold">Kindly note - Accepting only Cash On Delivery</Text>
      </View>
      </>
}
      </KeyboardAvoidingView>
</ScrollView>

</View>}
    </SafeAreaView>
  )
}

export default Cart

