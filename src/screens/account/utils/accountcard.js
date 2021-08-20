import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import * as colors from "../../../components/common/colors";

export const ItemCard = ({ title, svg, onPress }) => {
  return (
    <View>
      <View style={styles.line}></View>
      <TouchableOpacity style={styles.base} onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity style={styles.svg}>{svg}</TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    width: "95%",
    height: 0.5,
    backgroundColor: colors.gray,
    alignSelf: "flex-end",
  },
  svg: {
    marginLeft: 35,
  },
  title: {
    marginTop: 10,
    fontSize: 16,
    color: colors.black,
    marginBottom: 10,
  },
  base: {
    backgroundColor: colors.white,
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
});
