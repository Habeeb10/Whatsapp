import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import * as colors from "../components/common/colors";

export const Input = ({
  placeHolder,
  style,
  type,
  onChange,
  secure,
  value,
  label,
  inputStyle,
  icon,
}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.cont}>
        <TextInput
          style={[styles.input, inputStyle]}
          placeholder={placeHolder}
          placeholderTextColor={colors.black}
        />
        <View>{icon}</View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  cont: {
    width: "100%",
    fontSize: 15,
    height: 60,
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderColor: colors.gray,
    flexDirection: "row",
    alignItems: "center",
  },

  label: {
    fontWeight: "400",
    fontSize: 16,
    color: colors.brownie,
    lineHeight: 22,
    marginLeft: 20,
    marginBottom: 10,
    marginTop: 30,
  },
  input: {
    fontSize: 17,
    marginLeft: 20,
  },
});
