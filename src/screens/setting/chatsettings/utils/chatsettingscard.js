import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import * as colors from "../../../../components/common/colors";

export const ChatCard = ({ title, onPress }) => {
  const color = title === "Archive All Chats" ? colors.blue : colors.red;

  return (
    <View>
      <TouchableOpacity style={styles.base} onPress={onPress}>
        <Text style={[styles.title, { color }]}>{title}</Text>
      </TouchableOpacity>
      <View style={styles.line}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    width: "95%",
    height: 0.4,
    backgroundColor: colors.gray,
    alignSelf: "flex-end",
  },
  svg: {
    marginLeft: 35,
  },
  title: {
    marginTop: 10,
    fontSize: 16,
    marginBottom: 10,
    color: colors.blue,
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
