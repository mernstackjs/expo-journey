import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Link, Stack, useLocalSearchParams, useRouter } from "expo-router";
import users from "@/db";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function UserId() {
  const { id } = useLocalSearchParams();
  const user = users.find((u) => u.id == id);
  const router = useRouter();
  console.log(user);
  return (
    <View>
      <Stack.Screen options={{ title: user?.name }} />
      <Text>{user?.name}</Text>
      <Text>{user?.age}</Text>
      <Text>{user?.email}</Text>
      <Link href="/user/username/">Back Users </Link>
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={40} color="#333" />
      </TouchableOpacity>
    </View>
  );
}
