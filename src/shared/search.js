import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Search } from "../../assets/svg";
import * as colors from "../components/common/colors";

export const Searchinput = ({ placeholder, icon }) => {
  return (
    <View style={styles.container}>
      <View>{(icon = <Search />)}</View>

      <TextInput style={styles.textInput} placeholder={placeholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.grey,
    alignSelf: "center",
    paddingHorizontal: 20,
    width: "95%",
    marginTop: 45,
    height: 35,
    borderRadius: 10,
  },
  textInput: {
    marginLeft: 10,
    fontSize: 15,
  },
});
