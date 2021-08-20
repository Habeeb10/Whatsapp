import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as colors from "../../../../components/common/colors";

export const ModalList = [
  {
    title: "Mute",
  },
  {
    title: "Contact Info",
  },

  {
    title: "Export Chat",
  },
  {
    title: "Clear Chat",
  },
  {
    title: "Delete Chat",
  },
];

export const ModalCard = ({ title, isActive, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.title, isActive && styles.textcolor]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textcolor: {
    color: colors.red,
  },
  line: {
    width: 350,
    height: 1,
    backgroundColor: colors.grey,
  },
  title: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 20,
    color: colors.blue,
    marginBottom: 10,
  },
});
