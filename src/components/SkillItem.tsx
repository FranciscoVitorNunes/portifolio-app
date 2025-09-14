import React from "react";
import { View, Text, StyleSheet } from "react-native";

type Props = {
  skill: string;
  level: string;
};

export default function SkillItem({ skill, level }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.skill}>{skill}</Text>
      <Text style={styles.level}>{level}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  skill: { fontSize: 16 },
  level: { fontSize: 14, color: "gray" },
});
