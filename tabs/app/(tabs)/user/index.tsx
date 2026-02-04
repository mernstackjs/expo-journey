import { View, Text } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

export default function UsersTabs() {
  return (
    <View>
      <Stack.Screen options={{ title: "Ahmed" }} />
      <Text>UsersTabs</Text>
      <Link href="/user/username">Go Username</Link>
    </View>
  );
}
