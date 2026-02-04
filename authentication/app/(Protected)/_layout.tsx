import { useAuth } from "@/utils/authContext";
import { Redirect, Stack } from "expo-router";
import React from "react";

const isLoggedIn = true;

export default function ProtectedLayout() {
  const { isLoggedIn, isReady } = useAuth();

  if (!isReady) {
    return null;
  }
  if (!isLoggedIn) {
    return <Redirect href={"/login"} />;
  }
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
