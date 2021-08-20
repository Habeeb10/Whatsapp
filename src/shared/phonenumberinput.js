import React from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import Arrowright from "../../assets/svg";
import * as colors from "../components/common/colors";

export const Numberinput = ({
  value,
  label,

  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.line}></View>
      <View style={styles.labelbox}>
        <Text style={styles.label} value={value}>
          {label}
        </Text>
        <TouchableOpacity style={{ height: 20, width: 1 }}>
          <Arrowright />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  countrycode: {
    width: 40,
    fontSize: 27,
    color: colors.gray,
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
    fontSize: 26,
    color: colors.gray,
  },
});
