import "react-native-gesture-handler";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Read } from "../../../../../assets/svg";
import * as colors from "../../../../components/common/colors";
import { TouchableOpacity } from "react-native-gesture-handler";

export const ChatList = [
  {
    icon: require("../../../../../assets/images/Andrew.png"),
    title: "Andrew Parker",
    chat: "What kind of strategy is better?",
    read: <Read />,
    date: "11/16/19",
  },
  {
    icon: require("../../../../../assets/images/castilla.png"),
    title: "Karen Castillo",
    chat: "",
    date: "11/15/19",
  },

  {
    icon: require("../../../../../assets/images/jacob.png"),
    title: "Maximillian Jacobson",
    chat: "Bro, I have a good idea! ",
    read: <Read />,
    date: "10/30/19",
  },
  {
    icon: require("../../../../../assets/images/martha.png"),
    title: "Martha Craig",
    chat: "Photo",
    date: "10/28/19",
  },
  {
    icon: require("../../../../../assets/images/tabitha.png"),
    title: "Tabitha Potter",
    chat: "online business plan on our…",
    date: "8/25/19",
  },
  {
    icon: require("../../../../../assets/images/maisy.png"),
    title: "Maisy Humphrey",
    chat: "Welcome, to make design process faster,look at Pixsellz",

    read: <Read />,
    date: "8/20/19",
  },
  {
    icon: require("../../../../../assets/images/dotson.png"),
    title: "Kieron Dotson",
    chat: "Ok, have a good trip!",
    read: <Read />,
    date: "7/29/19",
  },
];

export const ItemCard = ({ icon, title, chat, read, svg, date }) => {
  return (
    <View>
      <View style={styles.line}></View>
      <View style={styles.base}>
        <TouchableOpacity
          style={{
            width: 20,
            height: 20,
            borderRadius: 15,
            borderWidth: 1,
            borderColor: colors.arsh,
            marginTop: 40,
          }}
        ></TouchableOpacity>
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  date: {
    marginTop: 30,
    color: colors.gray,
  },
  chat: {
    fontSize: 14,
    width: 200,
  },
  line: {
    width: "80%",
    height: 0.5,
    backgroundColor: colors.gray,
    alignSelf: "flex-end",
  },

  chatbox: {
    alignItems: "center",
    marginTop: 5,
    flexDirection: "row",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },

  read: {
    marginTop: 10,
  },
  top: {
    marginLeft: 10,
  },
  image: {
    marginTop: 10,
    width: 50,
    height: 50,
    marginLeft: 10,
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
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
});
