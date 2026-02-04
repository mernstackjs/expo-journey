import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#4caf50" },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          headerBackVisible: false,
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="users"
        options={{ title: "users", headerBackTitle: "ahmed" }}
      />
      <Stack.Screen name="posts" options={{ title: "posts" }} />
    </Stack>
  );
}
