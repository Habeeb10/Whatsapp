import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as colors from "../../../../components/common/colors";
import {
  Addphoto,
  Cam,
  Contact,
  Document,
  Library,
  Location,
  Photo,
} from "../../../../../assets/svg";

export const ModalList = [
  {
    title: "Camera",
    icon: <Cam />,
  },
  {
    title: "Photo & Video Library",
    icon: <Library />,
  },
  {
    title: "Document",
    icon: <Document />,
  },
  {
    title: "Location",
    icon: <Location />,
  },
  {
    title: "Contact",
    icon: <Contact />,
  },
];

export const ModalCard = ({ title, onPress, icon }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {icon}
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },

  title: {
    fontSize: 20,
    color: colors.blue,
    marginLeft: 20,
    marginTop: 15,
    marginBottom: 15,
  },
});
