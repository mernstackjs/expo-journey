import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

export default function UserScreen() {
  return (
    <View style={styles.container}>
      <Text>UserScreen</Text>
      <Link style={styles.link} href={"/"}>
        Go Back Index
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  link: {
    backgroundColor: "green",
    color: "white",
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
  },
});
