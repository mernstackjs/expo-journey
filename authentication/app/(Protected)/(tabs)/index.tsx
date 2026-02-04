import { View, Text, Pressable } from "react-native";
import React from "react";
import { useAuth } from "@/utils/authContext";

export default function HomeScreen() {
  const { logOut } = useAuth();
  return (
    <View>
      <Text>HomeScreen</Text>
      <Pressable onPress={() => logOut()}>
        <Text
          style={{
            color: "red",
            borderColor: "black",
            borderWidth: 1,
            width: 80,
            padding: 10,
            fontSize: 18,
            borderRadius: 5,
          }}
        >
          Logout
        </Text>
      </Pressable>
    </View>
  );
}
