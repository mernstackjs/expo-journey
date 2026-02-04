import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { useAuth } from "@/utils/authContext";

export default function FourScreen() {
  return (
    <View
      style={{
        backgroundColor: "red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <Text>FourScreen a</Text>
      <Link href="/(auth)/login">Login </Link>
    </View>
  );
}
