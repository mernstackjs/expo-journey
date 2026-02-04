import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { posts } from "@/db";

export default function CommentsById() {
  const { postId, id } = useLocalSearchParams();

  // Find the post first
  const post = posts.find((p) => p.id === Number(postId));

  if (!post) {
    return (
      <View style={styles.container}>
        <Text style={styles.notFound}>Post not found</Text>
      </View>
    );
  }

  // Find the comment inside the post
  const comment = post.comments.find((c) => c.id === Number(id));

  if (!comment) {
    return (
      <View style={styles.container}>
        <Text style={styles.notFound}>Comment not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Comment by {comment.username}</Text>
      <Text style={styles.comment}>{comment.comment}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  comment: {
    fontSize: 16,
    color: "#333",
  },
  notFound: {
    fontSize: 16,
    color: "#888",
    marginTop: 50,
  },
});
