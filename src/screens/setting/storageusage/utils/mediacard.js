import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Arrowright from "../../../../../assets/svg";
import * as colors from "../../../../components/common/colors";
import { TouchableOpacity } from "react-native-gesture-handler";

export const StorageList = [
  {
    title: "Photo",
    svg: <Arrowright />,
    cellular: "Wi-Fi and Cellular",
  },
  {
    title: "Audio",
    svg: <Arrowright />,
    wifi: "Wi-Fi",
  },
  {
    title: "Videos",
    svg: <Arrowright />,
    wifi: "Wi-Fi",
  },
  {
    title: "Document",
    svg: <Arrowright />,
    wifi: "Wi-Fi",
  },
];

export const MediaCard = ({ title, wifi, svg, cellular, onPress }) => {
  return (
    <View>
      <TouchableOpacity style={styles.base} onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.mediabox}>
          <Text style={styles.cellular}>{cellular}</Text>
          <Text style={styles.cellular}>{wifi}</Text>
          <Text style={styles.svg}>{svg}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.line}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  mediabox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  cellular: {
    fontSize: 16,
    color: colors.harsh,
    fontWeight: "400",
  },
  line: {
    width: "97%",
    height: 0.5,
    backgroundColor: colors.gray,
    alignSelf: "flex-end",
  },
  svg: {
    marginTop: 7,
    marginLeft: 10,
  },

  title: {
    fontSize: 16,
    color: colors.black,
    fontWeight: "400",
    marginBottom: 20,
    marginTop: 20,
  },

  base: {
    backgroundColor: colors.white,
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
});
