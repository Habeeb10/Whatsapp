import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import * as colors from "../components/common/colors";

export const Header = ({
  right,
  left,
  icon,
  onPress,
  rightstyle,
  leftstyle,
}) => {
  return (
    <View style={styles.headerbox}>
      <TouchableOpacity onPress={onPress}>
        <Text style={[styles.left, leftstyle]}>{left}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress}>
        <Text style={[styles.right, rightstyle]}>{right}</Text>
      </TouchableOpacity>
      <TouchableOpacity>{icon}</TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  headerbox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    paddingHorizontal: 15,
  },
  left: {
    fontSize: 17,
    color: colors.black,
    fontWeight: "600",
  },
  right: {
    fontSize: 17,
    fontWeight: "600",
    color: colors.arsh,
  },
});
