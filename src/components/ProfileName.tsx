import React from "react";
import { Text, StyleSheet } from "react-native";
import { styles } from './ProfileStyles';

export default function ProfileName({ name }: { name: string }) {
  return <Text style={styles.name}>{name}</Text>;
}
