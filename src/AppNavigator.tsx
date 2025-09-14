import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "./screens/MainScreen";
import SkillScreen from "./screens/SkillScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={MainScreen} options={{ title: "Perfil" }} />
      <Stack.Screen name="Skills" component={SkillScreen} options={{ title: "Habilidades" }} />
    </Stack.Navigator>
  );
}
