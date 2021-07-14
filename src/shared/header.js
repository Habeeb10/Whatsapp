import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import * as colors from "../components/common/colors";

export const Header = ({ right, left, style, onPress }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 20,
        paddingHorizontal: 15,
      }}
    >
      <Text style={styles.left}>{left}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.right}>{right}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  left: {
    fontSize: 17,
    color: colors.black,
    marginLeft: 120,
    fontWeight: "600",
  },
  right: {
    fontSize: 17,
    fontWeight: "600",
    color: colors.arsh,
  },

  back: {
    fontSize: 14,
    fontWeight: "400",
    marginLeft: 3,
  },
});
