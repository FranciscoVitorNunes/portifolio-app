import React from "react";
import { View, StyleSheet } from "react-native";
import ProfileImage from "../components/ProfileImage";
import ProfileName from "../components/ProfileName";
import SkillTree from "../components/SkillTree";

export default function SkillScreen() {
  const skills = [
    { skill: "React Native", level: "Avançado" },
    { skill: "TypeScript", level: "Intermediário" },
    { skill: "Node.js", level: "Intermediário" },
    { skill: "Python", level: "Básico" },
  ];

  return (
    <View style={styles.container}>
      <ProfileImage uri="https://placekitten.com/200/200" size={100} />
      <ProfileName name="Francisco Vitor" />
      <SkillTree skills={skills} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", padding: 20 },
});
