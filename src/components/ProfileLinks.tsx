import React from "react";
import { View, Text, Linking, Pressable, StyleSheet } from "react-native";
import { styles } from './ProfileStyles';

type Link = {
  label: string;
  url: string;
};

export default function ProfileLinks({ links }: { links: Link[] }) {
  return (
    <View>
      {links.map((link, index) => (
        <Pressable key={index} onPress={() => Linking.openURL(link.url)}>
          <Text style={styles.link}>{link.label}</Text>
        </Pressable>
      ))}
    </View>
  );
}

