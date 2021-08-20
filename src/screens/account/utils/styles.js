import { StyleSheet } from "react-native";
import * as colors from "../../../components/common/colors";

export const accountstyles = StyleSheet.create({
  accountlist: {
    marginTop: 50,
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
    backgroundColor: colors.white,
    height: 80,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
  },
});
