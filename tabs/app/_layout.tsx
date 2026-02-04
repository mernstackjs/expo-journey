import Ionicons from "@expo/vector-icons/Ionicons";
import { Stack, Tabs, useRouter } from "expo-router";
import { Pressable, Text } from "react-native";

export default function RootLayout() {
  const router = useRouter();
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="model"
        options={{
          title: "my bank",
          headerBackTitle: "Back To Home",
          headerLeft: () => (
            <Pressable
              onPress={() => router.replace("/user")}
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <Ionicons name="arrow-back" size={22} />
              <Text style={{ marginLeft: 4 }}>Back To Home Me</Text>
            </Pressable>
          ),
        }}
      />
    </Stack>
  );
}
