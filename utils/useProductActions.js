import axios from 'axios';
import { Context } from '../Context/Context';
import { useContext } from 'react';

  const url = "https://daily-mart-mern-stack-project.onrender.com";
  // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZGQ3OTQxYWE3YWYwZjA3Zjc4MjJkMiIsImlhdCI6MTcyNTk1MTM2M30.ZITLummc9bVbRM3LrJ-_u07IVsJdQYgP3AIJPhedC18";
  
const useProductActions =()=>{

    const {
        cart,
        favourite,
        setCart,
        setFavourite,
        setOrders,
        setOrderLoading,
        userToken
        
      } = useContext(Context);
      
const addToCart =  async (item) => {
    try {
      const cartItems = [{ item: item._id, quantity: 1 }];
       await axios.post(`${url}/api/cart/add`, { cart: cartItems },{headers: { token :userToken }});

           // Update local state
           setCart((prevCart) => {
      const isItemPresent = prevCart.find((cartItem) => cartItem.item === item._id);
      if (isItemPresent) {
        return prevCart.map((cartItem) =>
          cartItem.item === item._id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { item: item._id, quantity: 1 }];
      }
    });

      
     } catch (error) {
       console.error('Error incrementing item', error);
     }
  
   };

   const addtofavourites =  async (item) => {
    const isItemPresent = favourite.find((favouriteItem) => favouriteItem.favouriteProduct === item._id);
    console.log(isItemPresent);
    if(isItemPresent){
      try {
        await axios.post(`${url}/api/favourite/remove`, {
          itemId: item._id,
        },{headers: { token :userToken }});
         // Update local state
         setFavourite((prevFavourites) =>
        prevFavourites.filter((favouriteItem) => favouriteItem.favouriteProduct !== item._id)
      );

      } catch (error) {
        console.error('Error incrementing item', error);
      }
    }else{
      try {
        const favouriteItems = [{ favouriteProduct: item._id }];
         await axios.post(`${url}/api/favourite/add`, {
          favouriteItems,
         },{headers: { token :userToken }});
           // Update local state
      setFavourite((prevFavourites) => [
        ...prevFavourites,
        { favouriteProduct: item._id },
      ]);

        
       } catch (error) {
         console.error('Error incrementing item', error);
       }
    }
  
    }

    const increment = async (item) => {
      try {
         await axios.post(`${url}/api/cart/increment`, {
           itemId: item._id,
         },{headers: { token :userToken }});
  
         setCart((prevCart) =>
          prevCart.map((cartItem) =>
            cartItem.item === item._id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          )
        );
        
       } catch (error) {
         console.error('Error incrementing item', error);
       }
   
     };
     const decrement = async (item) => {
      try {
         await axios.post(`${url}/api/cart/decrement`, {
           itemId: item._id,
         },{headers: { token :userToken }});
  
         const itemIndex = cart.findIndex(cartItem => cartItem.item === item._id);
         if (itemIndex !== -1) {
          if (cart[itemIndex].quantity > 1) {
            setCart((prevCart) =>
              prevCart.map((cartItem) =>
                cartItem.item === item._id
                  ? { ...cartItem, quantity: cartItem.quantity - 1 }
                  : cartItem
              )
            );
          } else if (cart[itemIndex].quantity === 1) {
            setCart((prevCart) =>
              prevCart.filter((cartItem) => cartItem.item !== item._id)
            );
          }
        } else {
         console.error('Item not found in cart');
        }
        
       } catch (error) {
         console.error('Error decrementing item', error);
       }
   
     };
  
     const RemoveItem =  async (item) => {
      try {
         await axios.post(`${url}/api/cart/remove`, {
           itemId: item._id,
         },{headers: { token :userToken }});
  
           // Update local state
      setCart((prevCart) =>
        prevCart.filter((cartItem) => cartItem.item !== item._id)
      );
        
       } catch (error) {
         console.error('Error incrementing item', error);
       }
   
     };

    //  const removefavourites =  async (item) => {
    //   try {
    //      await axios.post(`${url}/api/favourite/remove`, {
    //        itemId: item._id,
    //      },{headers: { token }});
 
    //      setFavourite((prevFavourites) =>
    //        prevFavourites.filter((favouriteItem) => favouriteItem.favouriteProduct !== item._id)
    //      );
   
        
    //    } catch (error) {
    //      console.error('Error incrementing item', error);
    //    }
   
    //  };

    const getOrders = async () => {
      try {
        const response =await axios.post(`${url}/api/order/userorders`, {},
          { headers : { token :userToken } })
        const Orders =  response.data.data; 
        setOrders(Orders);
      } catch (error) {
        console.error('Error fetching user data', error);
      }
    }

    const handleCheckout = async (navigation,cart,total,address) => {
      try {
        const response = await axios.post(`${url}/api/order/place`, {
          items: cart,
          amount: total,
          address:address,
        }, {
          headers: { token :userToken }
        });
        if (response.data.success) {
          try {
           await axios.post(`${url}/api/cart/clear`, {}, {
              headers: { token  :userToken }
            });
            if(response.data.success){
              setCart([]);
              navigation.navigate('Orders');
            }
          } catch (error) {
            console.error('Error emptying cart', error);
          }
        }
      } catch (error) {
        console.error('Error placing order', error);
      }
    };

    return { addToCart, addtofavourites, increment, decrement, RemoveItem ,getOrders,handleCheckout};
};

export default useProductActions;