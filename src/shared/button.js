import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import * as colors from "../components/common/colors";

export const Button = ({ title, onPress, style, titleStyle }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[styles.container, style]}
    >
      <Text style={[styles.button, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%",
    height: 50,
    backgroundColor: colors.black,
    borderRadius: 50,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  button: {
    color: colors.blue,
    fontSize: 20,
    fontWeight: "500",
  },
});
