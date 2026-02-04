import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

export default function ProductsScreen() {
  const params = useLocalSearchParams();
  console.log(params);
  return (
    <View>
      <Text>ProductsScreen</Text>
    </View>
  );
}
