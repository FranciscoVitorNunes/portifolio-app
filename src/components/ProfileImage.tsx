import React from "react";
import { Image, StyleSheet } from "react-native";

type Props = {
  uri: string;
  size?: number;
};

export default function ProfileImage({ uri, size = 120 }: Props) {
  return <Image source={{ uri }} style={[styles.image, { width: size, height: size }]} />;
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 999,
    marginBottom: 12,
  },
});
