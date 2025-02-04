import React, {  useState ,useContext} from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Context } from './../Context/Context';
const backend_Url = "https://daily-mart-mern-stack-project.onrender.com"; // Replace with your backend URL

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setUserToken ,setUserName} = useContext(Context); 

  const navigation = useNavigation();

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = async () => {
    if (!validateEmail(email)) {
      setError("Invalid email address");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }
    setError("");
    // Handle sign-up logic here
    const data = {
      email: email,
      password: password,
    };

    const url = `${backend_Url}/api/user/login`;
    try {
      const response = await axios.post(url, data);

      if (response.data.success) {
        await AsyncStorage.setItem('userToken', response.data.token);
        setUserName(response.data.name);
        setUserToken(response.data.token)
        Alert.alert("Success", "Login successfully");
        // navigation.navigate('(AppStack)'); // Navigate to the login screen
      } else {
        Alert.alert("Error", response.data.message);
      }
    } catch (error) {
      Alert.alert("Error", "Something went wrong. Please try again.");
    }
  };

  return (
    <View className="flex-1 bg-green-200 justify-center items-center">
      <View className="w-11/12 md:w-1/2 lg:w-1/3 bg-white rounded-xl p-5 shadow-lg">
        <Text className="text-3xl font-extrabold mt-5 text-center">Login</Text>
        <View className="w-full mt-5">
         
          <TextInput
            style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10, marginTop: 5 }}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            className="w-full h-14  placeholder:text-gray-400"
          />
         
          <TextInput
            style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10, marginTop: 25 }}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            className="w-full h-14 placeholder:text-gray-400"
          />
          <TouchableOpacity
            onPress={handleSubmit}
            className="bg-green-400 w-full text-white text-xl font-bold h-12 mt-8 rounded-md justify-center items-center"
          >
            <Text className="text-white  text-2xl font-bold">Login</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center items-center w-full mt-5">
          <Text className="text-sm font-bold">Don't have an account ? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text className="text-blue-500 text-sm ml-1 font-bold">SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Login;