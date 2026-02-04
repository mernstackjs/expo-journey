import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, View } from "react-native";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "red",
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: "blue" },
        headerStyle: { backgroundColor: "blue" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
          title: "Homeas",
        }}
      />

      <Tabs.Screen
        name="products"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="storefront-sharp" size={size} color={color} />
          ),

          title: "Products",
          headerRight: () => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ color: "#fff", fontWeight: "bold" }}>
                LoAhmedgout
              </Text>
              <Text style={{ color: "#fff", fontWeight: "bold" }}>Logout</Text>
            </View>
          ),
          headerLeft: () => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ color: "#fff", fontWeight: "bold" }}>
                LoAhmedgout
              </Text>
              <Text style={{ color: "#fff", fontWeight: "bold" }}>Logout</Text>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="user"
        options={{
          title: "User",
          headerShown: false,
          headerLeft: () => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ color: "#fff", fontWeight: "bold" }}>
                LoAhmedgout
              </Text>
              <Text style={{ color: "#fff", fontWeight: "bold" }}>Logout</Text>
            </View>
          ),
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="person-circle" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
