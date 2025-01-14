import { StyleSheet, View } from 'react-native'
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
      backgroundColor: '#f2f2f2',
      image: (
        <View style={styles.lottie}>  <LottieView source={require('../assets/OnboardingAnimation!.json')} autoPlay loop /></View>
    ) ,
      title: 'Onboarding',
      subtitle: 'Done with React Native Onboarding Swiper',
    },
{
    backgroundColor: '#1cb654',
    image: (
        <View style={styles.lottie}>  <LottieView source={require('../assets/OBAnimation2.json')} autoPlay loop /></View>
    ) ,
    title: 'Onboarding',
    subtitle: 'Done with React Native Onboarding Swiper',
},
{
    backgroundColor: '#af2626',
    image: (
        <View style={styles.lottie}> <LottieView source={require('../assets/OBAnimation3.json')} autoPlay loop /></View>
    ) ,
    title: 'Onboarding',
    subtitle: 'Done with React Native Onboarding Swiper',
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
        height: 200
    }
})