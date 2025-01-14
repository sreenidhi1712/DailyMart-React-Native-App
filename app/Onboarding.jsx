import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

const OnboardingUI = () => {
const navigation = useNavigation();
    const gotoLogin = () => {
        navigation.navigate('Login');
    }
  return (
    <View  className="flex-1">
    <Onboarding
    containerStyles={{paddingHorizontal: 15}}
    onSkip={gotoLogin}
    onDone={gotoLogin}
  pages={[
    {
      backgroundColor: '#FEF3C7',
      image: (
        <View >  <LottieView style={styles.lottie} source={require('../assets/OnboardingAnimation!.json')} autoPlay loop /></View>
    ) ,
      title: (<Text className="text-orange-600 text-7xl font-bold">DailyMart</Text>),
      subtitle: (<Text className="text-grat-600 text-2xl font-bold">All yout daily needs in one place</Text>),
    },
{
    backgroundColor: '#22c55e',
    image: (
        <View >  <LottieView style={styles.lottie} source={require('../assets/OBAnimation2.json')} autoPlay loop /></View>
    ) ,
    title: (<Text className="text-white text-5xl text-center font-bold">Your Wishlist, Your Way</Text>),
    subtitle: (<Text className="text-gray-100 text-lg text-center font-bold">Create and Customize your perfect grocery list</Text>),
},
{
    backgroundColor: '#fff',
    image: (
        <View > <LottieView  style={styles.lottie} source={require('../assets/OBAnimation3.json')} autoPlay loop /></View>
    ) ,
    title: (<Text className="text-green-700 text-5xl text-center font-bold">Welcome to DailyMart</Text>),
    subtitle: (<Text className="text-gray-800 text-2xl text-center font-bold">Your one-stop for all daily essentials, delivered with care</Text>),
}
  ]}
/>
    </View>
  )
}

export default OnboardingUI

const styles = StyleSheet.create({
    lottie:{
        width: 200,
        height: 200,
    }
})