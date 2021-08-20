import { StyleSheet } from "react-native";
import * as colors from "../../../../components/common/colors";

export const chatsettingsstyles = StyleSheet.create({
  accountlist: {
    marginTop: 35,
    borderWidth: 0.5,
    borderColor: colors.gray,
  },
  chatbackup: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 23,
    backgroundColor: colors.white,
    height: 47,
    borderTopWidth: 0.5,
    borderColor: colors.gray,
  },
  backup: {
    color: colors.black,
    fontSize: 16,
    fontWeight: "400",
  },
  receive: {
    width: 343,
    fontWeight: "400",
    fontSize: 14,
    color: colors.darkgrey,
    marginTop: 6,
    marginLeft: 15,
  },
  save: {
    color: colors.black,
    fontSize: 16,
    fontWeight: "400",
  },
  wallpaper: {
    color: colors.black,
    fontSize: 16,
    fontWeight: "400",
    opacity: 0.4,
  },
  right: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 35,
    backgroundColor: colors.white,
    height: 47,
    borderTopWidth: 0.5,
    borderColor: colors.gray,
  },
  chat: {
    color: colors.black,
    marginLeft: 70,
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
    height: 50,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
  },
});
