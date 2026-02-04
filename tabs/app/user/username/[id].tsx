import { View, Text } from "react-native";
import React from "react";
import { Link, Stack, useLocalSearchParams } from "expo-router";
import users from "@/db";

export default function UserId() {
  const { id } = useLocalSearchParams();
  const user = users.find((u) => u.id == id);
  console.log(user);
  return (
    <View>
      <Stack.Screen options={{ title: user?.name }} />
      <Text>{user?.name}</Text>
      <Text>{user?.age}</Text>
      <Text>{user?.email}</Text>
      <Link href="/user/username/">Back Users </Link>
    </View>
  );
}
