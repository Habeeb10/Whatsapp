import "react-native-gesture-handler";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Arrowright, { Read } from "../../../../assets/svg";
import * as colors from "../../../components/common/colors";
import { TouchableOpacity } from "react-native-gesture-handler";

export const ChatList = [
  {
    icon: require("../../../../assets/images/Andrew.png"),
    title: "Andrew Parker",
  },
  {
    icon: require("../../../../assets/images/castilla.png"),
    title: "Karen Castillo",
  },

  {
    icon: require("../../../../assets/images/jacob.png"),
    title: "Maximillian Jacobson",
  },
  {
    icon: require("../../../../assets/images/martha.png"),
    title: "Martha Craig",
  },
  {
    icon: require("../../../../assets/images/tabitha.png"),
    title: "Tabitha Potter",
  },
  {
    icon: require("../../../../assets/images/maisy.png"),
    title: "Maisy Humphrey",
  },
  {
    icon: require("../../../../assets/images/dotson.png"),
    title: "Kieron Dotson",
  },
];

export const ItemCard = ({ icon, title, onPress }) => {
  return (
    <View>
      <TouchableOpacity style={styles.base} onPress={onPress}>
        <View style={styles.left}>
          <Image resizeMode="contain" style={styles.image} source={icon} />
          <View style={styles.top}>
            <View>
              <Text style={styles.title}>{title}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  left: {
    flexDirection: "row",
    alignItems: "center",
  },

  top: {
    marginLeft: 20,
  },
  image: {
    marginTop: 10,
    width: 50,
    height: 50,
  },
  title: {
    marginTop: 10,
    fontSize: 16,
    color: colors.black,
    fontWeight: "bold",
  },

  base: {
    backgroundColor: colors.white,
    flexDirection: "row",
    height: 80,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
});
