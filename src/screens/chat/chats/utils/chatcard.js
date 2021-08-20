import "react-native-gesture-handler";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Arrowright, { Read } from "../../../../../assets/svg";
import * as colors from "../../../../components/common/colors";
import { TouchableOpacity } from "react-native-gesture-handler";

export const ChatList = [
  {
    icon: require("../../../../../assets/images/Andrew.png"),
    title: "Andrew Parker",
    chat: "What kind of strategy is better?",
    svg: <Arrowright />,
    read: <Read />,
    date: "11/16/19",
  },
  {
    icon: require("../../../../../assets/images/castilla.png"),
    title: "Karen Castillo",
    chat: "",
    svg: <Arrowright />,
    date: "11/15/19",
  },

  {
    icon: require("../../../../../assets/images/jacob.png"),
    title: "Maximillian Jacobson",
    chat: "Bro, I have a good idea! ",
    svg: <Arrowright />,
    read: <Read />,
    date: "10/30/19",
  },
  {
    icon: require("../../../../../assets/images/martha.png"),
    title: "Martha Craig",
    chat: "Photo",
    svg: <Arrowright />,
    date: "10/28/19",
  },
  {
    icon: require("../../../../../assets/images/tabitha.png"),
    title: "Tabitha Potter",
    chat: "online business plan on our…",
    svg: <Arrowright />,
    date: "8/25/19",
  },
  {
    icon: require("../../../../../assets/images/maisy.png"),
    title: "Maisy Humphrey",
    chat: "Welcome, to make design process faster,look at Pixsellz",
    svg: <Arrowright />,
    read: <Read />,
    date: "8/20/19",
  },
  {
    icon: require("../../../../../assets/images/dotson.png"),
    title: "Kieron Dotson",
    chat: "Ok, have a good trip!",
    svg: <Arrowright />,
    read: <Read />,
    date: "7/29/19",
  },
];

export const ItemCard = ({ icon, title, chat, read, svg, date, onPress }) => {
  return (
    <View>
      <View style={styles.line}></View>
      <TouchableOpacity style={styles.base} onPress={onPress}>
        <View style={styles.left}>
          <Image resizeMode="contain" style={styles.image} source={icon} />
          <View style={styles.top}>
            <View>
              <Text style={styles.title}>{title}</Text>
            </View>

            <View style={styles.chatbox}>
              {read && <Read />}
              <Text style={styles.chat}>{chat}</Text>
            </View>
          </View>
        </View>
        <View style={styles.box}>
          <Text style={styles.date}>{date}</Text>
          <TouchableOpacity style={styles.svg}>{svg}</TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  chat: {
    fontSize: 14,
  },
  line: {
    width: "100%",
    height: 0.5,
    backgroundColor: colors.gray,
    alignSelf: "flex-end",
  },
  svg: {
    marginLeft: 35,
  },
  date: {
    fontSize: 14,
    color: colors.gray,
    marginBottom: 10,
    marginRight: 10,
  },

  chatbox: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },

  read: {
    marginTop: 10,
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

  container: {
    flex: 1,
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
