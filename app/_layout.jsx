import React, { useContext } from 'react';
import ContextProvider, { Context } from '../Context/Context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppStack from './(AppStack)/_layout';
import Login from './Login';
import SignUp from './SignUp';
import "../global.css"
import OnboardingUI from './Onboarding';

const RootLayout = () => {
  return (
    <ContextProvider>
      <InnerLayout />
    </ContextProvider>
  );
};

const InnerLayout = () => {
  const { userToken } = useContext(Context);
  const Stack =  createNativeStackNavigator();

  return (
    <>
      {userToken == null ? (
        <Stack.Navigator initialRouteName="Onboarding">
          <Stack.Screen name="Onboarding" component={OnboardingUI} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        </Stack.Navigator>
      ) : (
        <AppStack/>
      )}
    </>
  );
};

export default RootLayout;