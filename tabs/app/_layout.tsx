import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Modal, Pressable, Text, View } from "react-native";
import { useState } from "react";

export default function RootLayout() {
  const [showProfile, setShowProfile] = useState(false);

  console.log(showProfile);
  return (
    <>
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
                <Text style={{ color: "#fff", fontWeight: "bold" }}>
                  Logout
                </Text>
              </View>
            ),
            headerLeft: () => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ color: "#fff", fontWeight: "bold" }}>
                  LoAhmedgout
                </Text>
                <Text style={{ color: "#fff", fontWeight: "bold" }}>
                  Logout
                </Text>
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="(test)"
          options={{
            title: "Test ",
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="car" size={size} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="user"
          options={{
            title: "User",

            headerRight: () => (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 10,
                }}
              >
                <Pressable onPress={() => setShowProfile(true)}>
                  <Ionicons name="person" size={30} color={"white"} />
                </Pressable>
              </View>
            ),
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="person-circle" size={size} color={color} />
            ),
          }}
        />
      </Tabs>

      <Modal
        visible={showProfile}
        transparent
        animationType="fade"
        onRequestClose={() => setShowProfile(false)}
      >
        <Pressable
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.2)",
          }}
          onPress={() => setShowProfile(false)}
        >
          {/* Dropdown Box */}
          <View
            style={{
              position: "absolute",
              top: 90, // adjust if needed
              right: 10, // align with icon
              width: 200,
              backgroundColor: "white",
              borderRadius: 10,
              padding: 12,
              elevation: 10, // Android shadow
              shadowColor: "#c19999",
              shadowOpacity: 0.2,
              shadowRadius: 4,
            }}
          >
            <Text style={{ fontWeight: "bold", marginBottom: 8 }}>Ahmed</Text>

            <Pressable style={{ paddingVertical: 6 }}>
              <Text>Profile</Text>
            </Pressable>

            <Pressable style={{ paddingVertical: 6 }}>
              <Text>Settings</Text>
            </Pressable>

            <Pressable style={{ paddingVertical: 6 }}>
              <Text style={{ color: "red" }}>Logout</Text>
            </Pressable>
          </View>
        </Pressable>
      </Modal>
    </>
  );
}
