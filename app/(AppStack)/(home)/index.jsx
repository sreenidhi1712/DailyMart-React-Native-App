
import React from 'react'
import HomePage from './HomePage'
import { useContext,useEffect } from 'react'
import { Context } from '../../../Context/Context'
import axios from 'axios'
const url = "https://daily-mart-mern-stack-project.onrender.com";
// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZGQ3OTQxYWE3YWYwZjA3Zjc4MjJkMiIsImlhdCI6MTcyNTk1MTM2M30.ZITLummc9bVbRM3LrJ-_u07IVsJdQYgP3AIJPhedC18";

const HomeComponent= () => {

    const {
        setProducts,
        setLoading,
        setCart,
        setFavourite,userToken
      } = useContext(Context);
      useEffect(() => {

        const getUser = async () => {
          try {
            const response = await axios.post(`${url}/api/user/getUser`, {},{
              headers: { token :userToken }
            });
         
            const productsResponse = await axios.get(`${url}/api/product/list`); 
            const Products = productsResponse.data.data; 
            setCart(response.data.user.cartData);
            setFavourite(response.data.user.favouriteItem);
            setProducts(Products);
          } catch (error) {
            console.error('Error fetching user data', error);
          }finally{
            setLoading(false);
          }
        }
    
        getUser();
      }, [ setCart, setFavourite, setLoading, setProducts]);
  return (
    
            <HomePage/>
  
  )
}

export default HomeComponent;
