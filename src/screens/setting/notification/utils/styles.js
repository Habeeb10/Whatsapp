import { StyleSheet } from "react-native";
import * as colors from "../../../../components/common/colors";

export const notificationsettingsstyles = StyleSheet.create({
  reset: {
    color: colors.red,
    fontWeight: "400",
    fontSize: 16,
  },
  sound3: {
    height: 47,
    backgroundColor: colors.white,
    marginTop: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  new: {
    fontSize: 12,
    fontWeight: "400",
    color: colors.darkgrey,
    marginTop: 10,
    marginLeft: 20,
  },
  vibrate: {
    fontWeight: "400",
    color: colors.black,
    fontSize: 11,
  },
  app: {
    fontSize: 16,
    fontWeight: "400",
    color: colors.black,
  },
  sound2: {
    height: 64,
    backgroundColor: colors.white,
    marginTop: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  group: {
    color: colors.darkgrey,
    fontWeight: "400",
    fontSize: 12,
    marginLeft: 20,
    marginTop: 30,
  },
  note: {
    fontWeight: "400",
    fontSize: 16,
    marginRight: 10,
    color: colors.harsh,
  },
  boxcont: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  show: {
    fontSize: 16,
    fontWeight: "400",
    color: colors.black,
    marginTop: 15,
    marginBottom: 10,
  },
  sound: {
    height: 100,
    backgroundColor: colors.white,
    marginTop: 10,
    paddingHorizontal: 20,
  },
  line2: {
    height: 1,
    backgroundColor: colors.gray,
    width: "100%",
    marginTop: 10,
    alignSelf: "center",
    fontWeight: "700",
    alignSelf: "flex-end",
  },
  message: {
    color: colors.darkgrey,
    fontWeight: "400",
    fontSize: 12,
    marginLeft: 20,
    marginTop: 10,
  },
  line: {
    height: 1,
    backgroundColor: colors.gray,
    width: "90%",
    marginTop: 20,
    alignSelf: "center",
    fontWeight: "700",
  },
  disable: {
    marginTop: 20,
    alignSelf: "center",
    width: 300,
    textAlign: "center",
    color: colors.lightgrey,
  },
  disabled: {
    alignSelf: "center",
    color: colors.lightgrey,
  },
  notifications: {
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
    height: 50,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
  },
});