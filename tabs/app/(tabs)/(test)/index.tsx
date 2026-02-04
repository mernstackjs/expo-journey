import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function TestIndex() {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <Text>TestIndex</Text>
      <Link
        style={{
          backgroundColor: "blue",
          padding: 10,
          marginBlock: 10,
          color: "white",
        }}
        href="/second"
      >
        Second
      </Link>
      <Link
        style={{
          backgroundColor: "green",
          padding: 10,
          marginBlock: 10,
          color: "white",
        }}
        href="/third"
      >
        Second
      </Link>
    </View>
  );
}
