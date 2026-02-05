import { Stack, useRouter } from "expo-router";
import React from "react";

import AntDesign from "@expo/vector-icons/AntDesign";

export default function RootLayout() {
  const router = useRouter();
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="school"
        options={{
          title: "School Manager",

          headerLeft: () => (
            <AntDesign
              onPress={() => router.push("/")}
              name="arrow-left"
              size={24}
              color="black"
            />
          ),
        }}
      />
      <Stack.Screen
        name="add_school"
        options={{ title: "Add New School", presentation: "modal" }}
      />
    </Stack>
  );
}
