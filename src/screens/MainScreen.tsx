import React from "react";
import { View, Button, StyleSheet } from "react-native";
import ProfileImage from "../components/ProfileImage";
import ProfileName from "../components/ProfileName";
import ProfileLinks from "../components/ProfileLinks";

export default function MainScreen({ navigation }: any) {
  const links = [
    { label: "LinkedIn", url: "https://linkedin.com/in/seu-perfil" },
    { label: "GitHub", url: "https://github.com/seu-usuario" },
    { label: "Email", url: "mailto:seuemail@gmail.com" },
  ];

  return (
    <View style={styles.container}>
      <ProfileImage uri="https://placekitten.com/200/200" />
      <ProfileName name="Francisco Vitor" />
      <ProfileLinks links={links} />
      <Button title="Ver Habilidades" onPress={() => navigation.navigate("Skills")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", padding: 20 },
});
