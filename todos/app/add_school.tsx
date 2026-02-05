import { useSchoolStore } from "@/store/schoolStore";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

export default function AddSchool() {
  const [school_name, setSchoolName] = useState("");
  const addSchool = useSchoolStore((state) => state.addSchool);
  const router = useRouter();

  const handleAddSchol = () => {
    if (!school_name) return;
    const school = {
      id: Math.floor(Math.random() * 1000),
      school_name,
    };
    addSchool(school);
    setSchoolName("");
    router.replace("/school");
  };
  return (
    <View style={{ padding: 90 }}>
      <Text>AddSchool</Text>
      <View>
        <TextInput
          value={school_name}
          onChangeText={(text) => setSchoolName(text)}
          placeholder="Enter School Name"
          style={{ borderWidth: 1, padding: 10, borderRadius: 10 }}
        />
        <Pressable
          style={{
            backgroundColor: "blue",
            padding: 10,
            borderRadius: 10,
            marginBlock: 10,
          }}
          onPress={handleAddSchol}
        >
          <Text style={{ color: "white" }}>Add School</Text>
        </Pressable>
      </View>
    </View>
  );
}
