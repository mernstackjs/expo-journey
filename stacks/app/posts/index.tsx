import { posts } from "@/db";
import { Link, Stack } from "expo-router";
import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

export default function PostsScreen() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "posts" }} />
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()} // <-- important for TS
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>Author: {item.author}</Text>
            <Text>{item.content}</Text>
            <Text>Date: {item.date}</Text>
            <Link style={styles.link} href={`/posts/${item.id}`}>
              Read More
            </Link>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  item: {
    backgroundColor: "lightgreen",
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
  },
  title: { fontSize: 16, fontWeight: "bold" },
  link: {
    backgroundColor: "blue",
    color: "white",
    padding: 10,
    marginBlock: 10,
  },
});
