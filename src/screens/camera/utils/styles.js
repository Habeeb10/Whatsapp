import { StyleSheet } from "react-native";
import * as colors from "../../../components/common/colors";

export const camerastyles = StyleSheet.create({
  icon: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    marginTop: 530,
  },
  video: {
    color: colors.white,
    fontSize: 12,
    fontWeight: "500",
    alignSelf: "center",
    marginTop: 10,
  },
  bottombar: {
    backgroundColor: colors.black,
    height: 60,
    marginTop: 10,
  },
  background: {
    width: 400,
    height: 400,
  },
  bar: {
    backgroundColor: colors.black,
    height: 50,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
});
