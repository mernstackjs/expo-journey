import React from "react";
import { Stack } from "expo-router";
import { AuthProvider } from "@/utils/authContext";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen name="(Protected)" options={{ headerShown: false }} />

        <Stack.Screen name="(auth)/login" options={{ title: "Login" }} />
      </Stack>
    </AuthProvider>
  );
}
