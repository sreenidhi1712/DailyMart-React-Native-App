import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const backend_url = "https://daily-mart-mern-stack-project.onrender.com"; // Replace with your backend URL

function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const navigation = useNavigation();

  const gotologin = () => {
    navigation.navigate('Login');
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleChange = (name, value) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const getFullName = (formData) => {
    return `${formData.firstName} ${formData.lastName}`;
  };

  const handleSubmit = async () => {
    const fullName = getFullName(formData);
    const { email, password, confirmPassword } = formData;

    if (!validateEmail(email)) {
      setError("Invalid email address");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setError("");
    // Handle registration logic here
    const data = {
      name: fullName,
      email: email,
      password: password,
    };

    const url = `${backend_url}/api/user/register`;
    try {
      const response = await axios.post(url, data);

      if (response.data.success) {
        Alert.alert("Success", `Registration successful, your user name is ${fullName}`);
        gotologin();
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
        <Text className="text-3xl font-bold mt-5 text-center">Signup</Text>
        <View className="w-full mt-5">
        
          <TextInput
            style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10, marginTop: 5 }}
            placeholder="First Name"
            value={formData.firstName}
            onChangeText={(value) => handleChange('firstName', value)}
            className="w-full h-14 placeholder:text-gray-400"
          />
        
          <TextInput
            style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10, marginTop: 20 }}
            placeholder="Last Name"
            value={formData.lastName}
            onChangeText={(value) => handleChange('lastName', value)}
            className="w-full h-14 placeholder:text-gray-400"
          />
       
          <TextInput
            style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10, marginTop: 20 }}
            placeholder="Email"
            value={formData.email}
            onChangeText={(value) => handleChange('email', value)}
            className="w-full h-14 placeholder:text-gray-400"
          />
        
          <TextInput
            style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10, marginTop: 20 }}
            placeholder="Password"
            value={formData.password}
            onChangeText={(value) => handleChange('password', value)}
            secureTextEntry
            className="w-full h-14 placeholder:text-gray-400"
          />
         
          <TextInput
            style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10, marginTop: 20 }}
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChangeText={(value) => handleChange('confirmPassword', value)}
            secureTextEntry
            className="w-full h-14 placeholder:text-gray-400"
          />
          {error && <Text className="text-red-500 mt-2">{error}</Text>}
          <TouchableOpacity
            onPress={handleSubmit}
            className="bg-green-400 w-full text-white text-xl font-bold h-12 mt-5 rounded-md justify-center items-center"
          >
            <Text className="font-bold text-white text-2xl">Signup</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center items-center w-full mt-5">
          <Text className="text-sm font-bold">Already registered? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text className="text-blue-500 text-sm ml-1 font-bold">Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default SignUp;