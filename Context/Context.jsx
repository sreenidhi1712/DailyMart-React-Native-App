import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

export const Context = createContext();

const ContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [cart, setCart] = useState([]);
  const [favourite, setFavourite] = useState([]);
  const [orderLoading, setOrderLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);


  const fruitsAndVegetables = products.filter((item) => item.category === 'Fruits' || item.category === 'Vegetables');
  const  dairyProduct = products.filter((item) => item.category === 'Dairy');
  const cookingEssentials = products.filter((item) => item.category === 'Cooking Essentials');
  const beveragesAndSnacks = products.filter((item) => item.category !== 'Fruits' && item.category !== 'Vegetables' && item.category !== 'Meat' && item.category !== 'Dairy' && item.category !== 'Cooking Essentials'&& item.category !== 'Oil');

  const contextValue = {
    isLoggedIn,
    setIsLoggedIn,
    loading,
    setLoading,
    products,
    setProducts,
    dairyProduct,
    cookingEssentials,
    beveragesAndSnacks,
    fruitsAndVegetables,
    orders,
    setOrders,
    cart,
    setCart,
    favourite,
    setFavourite,
    orderLoading,
    setOrderLoading,
    userToken,
    setUserToken,
  };

  useEffect(() => {
    const fetchToken = async () => {
        console.log('im in auth context')
      await AsyncStorage.getItem('userToken').then((value) => {
        if (value !== null) {
          setUserToken(value);
          
        }
      });
    };
    fetchToken();
  }, []);


  return (
    // eslint-disable-next-line react/prop-types
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
