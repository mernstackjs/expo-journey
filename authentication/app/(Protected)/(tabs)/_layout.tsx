import React from "react";
import { Tabs } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function BottomTabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "First",
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="filter-1" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="second"
        options={{
          title: "Second",
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="filter-2" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="third"
        options={{
          title: "Third",
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="filter-3" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="four"
        options={{
          title: "Four",
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="filter-4" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
