import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <View>
      <Text>HomeScreen</Text>

      <Link href={"/"}>Go Onboardning</Link>
    </View>
  );
}
