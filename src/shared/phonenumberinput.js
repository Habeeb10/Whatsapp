import React from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import * as colors from "../components/common/colors";

export const Numberinput = ({ placeholder, icon, countrycode, label }) => {
  return (
    <View>
      <View style={styles.line}></View>
      <View style={styles.labelbox}>
        <Text style={styles.label}>{label}</Text>
        <TouchableOpacity>{icon}</TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text style={styles.countrycode}>{countrycode}</Text>
        <View style={styles.seperator}></View>
        <TextInput style={styles.textInput} placeholder={placeholder} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  countrycode: {
    width: 30,
  },
  labelbox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 15,
  },
  label: {
    color: colors.blue,
    fontSize: 17,
    fontWeight: "400",
  },
  seperator: {
    width: 1,
    height: 45,
    backgroundColor: colors.transparent,
  },
  line: {
    height: 1,
    backgroundColor: colors.transparent,
    marginTop: 19,
  },
  container: {
    marginHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    paddingHorizontal: 20,
    width: "100%",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 46,
    borderColor: colors.transparent,
    marginTop: 10,
  },
  textInput: {
    marginLeft: 20,
    fontSize: 20,
  },
});
