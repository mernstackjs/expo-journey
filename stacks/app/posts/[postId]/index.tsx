import React from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { Link, Stack, useLocalSearchParams } from "expo-router";
import { posts } from "@/db";

export default function PostDetailsScreen() {
  const { postId } = useLocalSearchParams();
  const post = posts.find((post) => post.id === Number(postId));

  if (!post) {
    return (
      <View style={styles.container}>
        <Text style={styles.notFound}>Post not found</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Stack.Screen options={{ title: post.title }} />

      <View style={styles.card}>
        <Text style={styles.title}>{post.title}</Text>
        <Text style={styles.author}>By {post.author}</Text>
        <Text style={styles.date}>{post.date}</Text>
        <Text style={styles.content}>{post.content}</Text>
        <Link style={styles.button} href={`/posts/${post.id}/coments`}>
          See Comments
        </Link>
      </View>

      <Link href="/posts" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Back to Posts</Text>
        </Pressable>
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
  },
  card: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  author: {
    fontSize: 14,
    color: "#555",
    marginBottom: 5,
  },
  date: {
    fontSize: 12,
    color: "#999",
    marginBottom: 15,
  },
  content: {
    fontSize: 16,
    lineHeight: 22,
    color: "#333",
  },
  button: {
    backgroundColor: "#4caf50",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  notFound: {
    fontSize: 18,
    color: "#888",
    marginTop: 50,
  },
});
