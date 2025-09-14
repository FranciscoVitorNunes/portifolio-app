import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SkillItem from "./SkillItem";

type Skill = {
  skill: string;
  level: string;
};

export default function SkillTree({ skills }: { skills: Skill[] }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas Habilidades</Text>
      {skills.map((s, index) => (
        <SkillItem key={index} skill={s.skill} level={s.level} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 20 },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
});
