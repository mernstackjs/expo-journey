import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Link, useLocalSearchParams } from "expo-router";
import { posts } from "@/db";

export default function PostComents() {
  const { postId } = useLocalSearchParams();
  console.log(postId);

  const post = posts.find((post) => post?.id == postId);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Comments for: {post?.title}</Text>
      {post?.comments.map((comment) => (
        <View key={comment.id} style={styles.commentCard}>
          <Text style={styles.username}>{comment.username}:</Text>
          <Text style={styles.comment}>{comment.comment}</Text>
          <Link
            style={styles.button}
            href={`/posts/${post.id}/coments/${comment.id}`}
          >
            See More{" "}
          </Link>
        </View>
      ))}
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
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  commentCard: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  username: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  comment: {
    fontSize: 16,
    color: "#333",
  },
  notFound: {
    fontSize: 18,
    color: "#888",
    marginTop: 50,
  },
  button: {
    backgroundColor: "#4caf50",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
});
