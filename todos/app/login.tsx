import { View, Text, Pressable } from "react-native";
import React from "react";
import { useAuth } from "@/libs/AuthContext";

export default function LoginScreen() {
  const { logIn, isLoggedIn } = useAuth();
  console.log(isLoggedIn);
  return (
    <View style={{ padding: 40 }}>
      <Text>LoginScreen</Text>
      <Pressable onPress={() => logIn()}>
        <Text style={{ color: "red", marginBlock: 40 }}>Login</Text>
      </Pressable>
    </View>
  );
}
