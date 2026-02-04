import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import users from "@/db";

export default function UserNameLists() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "username" }} />
      <Text>UserNameLists</Text>
      {users?.map((user) => (
        <View style={styles.card} key={user.id}>
          <Text>Name: {user.name}</Text>
          <Text>Age: {user.age}</Text>
          <Text>Email: {user.email}</Text>
          <Text>Role: {user.role}</Text>
          <Link style={styles.link} href={`/user/username/${user.id}`}>
            see user
          </Link>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    padding: 15,
  },
  card: {
    borderWidth: 1,
    borderColor: "black",
    marginBlock: 10,
    padding: 10,
    borderRadius: 10,
  },
  link: {
    color: "red",
    marginBlock: 10,
    fontSize: 19,
  },
});
