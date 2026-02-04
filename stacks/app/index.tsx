import { Link, Stack, useRouter } from "expo-router";
import { Button, Text, View, StyleSheet } from "react-native";

export default function Index() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button title="Go User Screen" onPress={() => router.push("/users")} />
      <Link href="/products/1">Go Product 1</Link>
      <Link href="/products/2">Go Product 2</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "blue",
    color: "white",
  },
});
