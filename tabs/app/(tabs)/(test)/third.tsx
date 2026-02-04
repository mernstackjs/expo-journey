import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

export default function ThirdScreen() {
  const router = useRouter();
  return (
    <View style={{ padding: 30 }}>
      <Text>ThirdScreen</Text>
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={40} color="#333" />
      </TouchableOpacity>
    </View>
  );
}
