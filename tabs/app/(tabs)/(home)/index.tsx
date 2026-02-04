import { Link } from "expo-router";
import { useState } from "react";
import { Modal, Pressable, Text, View } from "react-native";

export default function Index() {
  const [openModal, setModel] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Time for tasbs</Text>
      {!openModal && (
        <Pressable onPress={() => setModel(true)}>
          <Text
            style={{
              backgroundColor: "red",
              padding: 10,
              color: "white",
              fontWeight: "bold",
              borderRadius: 10,
              marginBlock: 10,
            }}
          >
            Open Modal
          </Text>
        </Pressable>
      )}

      <Link href="/model" push asChild>
        <Text
          style={{
            backgroundColor: "red",
            padding: 10,
            color: "white",
            fontWeight: "bold",
            borderRadius: 10,
            marginBlock: 10,
          }}
        >
          Open Router Modal
        </Text>
      </Link>

      <Modal
        visible={openModal}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setModel(false)}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "red",
          }}
        >
          <Text>Asc waa ahmed</Text>
        </View>
      </Modal>
    </View>
  );
}
