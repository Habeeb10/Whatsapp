import { StyleSheet } from "react-native";
import * as colors from "../../../../components/common/colors";

export const editprofilestyles = StyleSheet.create({
  input: {
    width: "100%",
    fontSize: 15,
    height: 60,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.grey,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 30,
    marginTop: 20,
    fontSize: 17,
  },
  editname: {
    color: colors.blue,
    fontSize: 14,
    fontWeight: "400",
    marginLeft: 15,
    marginTop: 10,
    marginLeft: 55,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
  },
  optional: {
    fontWeight: "400",
    fontSize: 13,
    color: colors.brownie,
    marginLeft: 20,
    width: 240,
    lineHeight: 20,
  },
  andrew: {
    height: 60,
    width: 60,
    marginLeft: 40,
  },
  star: {
    height: 240,
    backgroundColor: colors.white,
    // paddingHorizontal: 20,
  },
  edit: {
    color: colors.black,
    marginLeft: 50,
    fontSize: 17,
    fontWeight: "600",
  },
  setting: {
    color: colors.blue,
    marginLeft: 10,
    fontSize: 17,
    fontWeight: "600",
  },

  bar: {
    backgroundColor: colors.grey,
    height: 80,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
  },
});
