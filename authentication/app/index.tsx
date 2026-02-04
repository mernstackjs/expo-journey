import { View, Text } from "react-native";
import React from "react";
import { Link, Redirect } from "expo-router";
import { useAuth } from "@/utils/authContext";

export default function Index() {
  const { isLoggedIn } = useAuth();
  if (isLoggedIn) {
    return <Redirect href={"/(Protected)/(tabs)"} />;
  }
  return (
    <View
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Welcome</Text>
      <Link href="/(auth)/login">Login</Link>
    </View>
  );
}
