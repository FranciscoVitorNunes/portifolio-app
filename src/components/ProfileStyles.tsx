import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // Estilo da imagem do perfil
  image: {
    borderRadius: 999, // deixa circular
    borderWidth: 2,
    borderColor: "#332710ff",
    marginBottom: 15,
  },

  // Estilo do nome do perfil
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000ff",
    textAlign: "center",
    marginBottom: 10,
  },

  // Estilo dos links do perfil
  link: {
    fontSize: 16,
    backgroundColor: "#096975ff",
    paddingVertical: 10,
    paddingHorizontal: 35,
    borderRadius: 5,
    color: "#ffffffff",
    textAlign: "left",
    marginVertical: 5,
    textDecorationLine: "none",
  },
});
