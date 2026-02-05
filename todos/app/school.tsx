import { useSchoolStore } from "@/store/schoolStore";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
export default function SchoolScreen() {
  const schools = useSchoolStore((state) => state.schools);
  console.log(schools);
  const router = useRouter();
  return (
    <View
      style={{ padding: 40, position: "relative", display: "flex", flex: 1 }}
    >
      <Text>SchoolScreen</Text>

      {schools?.map((school) => (
        <View key={school.id}>
          <Text>{school.school_name}</Text>
        </View>
      ))}

      <AntDesign
        onPress={() => router.push("/add_school")}
        style={{
          position: "absolute",
          right: 30,
          bottom: 50,
          borderWidth: 1,
          borderRadius: 100,
          padding: 10,
        }}
        name="plus"
        size={32}
        color="black"
      />
    </View>
  );
}
