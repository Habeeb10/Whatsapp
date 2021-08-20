import { StyleSheet } from "react-native";
import * as colors from "../../../components/common/colors";

export const statusstyles = StyleSheet.create({
  iconbox2: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconbox: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    marginTop: 10,
    alignItems: "center",
  },
  input: {
    height: 630,
    width: "100%",
    backgroundColor: colors.pink,
    paddingHorizontal: 20,
    textAlign: "center",
    marginTop: 50,
    fontSize: 30,
  },

  tap: {
    backgroundColor: colors.pink,
    height: 500,
  },
  bar: {
    backgroundColor: colors.pink,
    height: 60,
  },
});
