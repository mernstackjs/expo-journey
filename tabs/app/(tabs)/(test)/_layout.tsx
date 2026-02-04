import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function TestLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Test kale", headerShown: false }}
      />
    </Stack>
  );
}
