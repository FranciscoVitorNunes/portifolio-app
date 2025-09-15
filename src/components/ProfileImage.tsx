import React from "react";
import { Image } from "react-native";
import { styles } from './ProfileStyles';
const perfil = require('../../assets/perfil.png');
type Props = {
  uri: string;
  size?: number;
};

export default function ProfileImage({ uri, size = 120 }: Props) {
  return <Image source={perfil} style={[styles.image, { width: size, height: size }]} />;
}