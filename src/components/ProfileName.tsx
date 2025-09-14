import React from "react";
import { Text, StyleSheet } from "react-native";

export default function ProfileName({ name }: { name: string }) {
  return <Text style={styles.name}>{name}</Text>;
}

const styles = StyleSheet.create({
  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
