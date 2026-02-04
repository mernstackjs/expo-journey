import { View, Text, Pressable } from "react-native";
import React from "react";
import { Redirect } from "expo-router";
import { useAuth } from "@/utils/authContext";

export default function LoginScreen() {
  const { isLoggedIn, logIn } = useAuth();
  console.log(isLoggedIn);
  if (isLoggedIn) {
    return <Redirect href={"/(Protected)/(tabs)"} />;
  }
  return (
    <View>
      <Text>LoginScreen</Text>
      <Pressable onPress={() => logIn()}>
        <Text
          style={{
            color: "red",
            borderColor: "black",
            borderWidth: 1,
            width: 80,
            padding: 10,
            fontSize: 18,
            borderRadius: 5,
          }}
        >
          Login
        </Text>
      </Pressable>
    </View>
  );
}
