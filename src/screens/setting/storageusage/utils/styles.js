import { StyleSheet } from "react-native";
import * as colors from "../../../../components/common/colors";

export const storagestyles = StyleSheet.create({
  line: {
    height: 1,
    backgroundColor: colors.gray,
    width: "100%",
    marginTop: 10,
    fontWeight: "700",
    marginBottom: 15,
  },
  usagebox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  use: {
    fontSize: 16,
    fontWeight: "400",
    color: colors.black,
    marginTop: 15,
    marginBottom: 10,
  },
  networkbox: {
    height: 100,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    marginTop: 25,
    borderWidth: 0.5,
    borderColor: colors.gray,

    paddingHorizontal: 10,
  },
  data: {
    fontWeight: "400",
    fontSize: 16,
    color: colors.black,
  },
  call: {
    color: colors.harsh,
    fontWeight: "400",
    fontSize: 12,
    marginLeft: 12,
    marginTop: 19,
    marginBottom: 6,
  },

  callbox: {
    height: 47,
    backgroundColor: colors.white,
    marginTop: 6,
    borderWidth: 0.5,
    borderColor: colors.gray,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },

  best: {
    fontSize: 12,
    fontWeight: "400",
    color: colors.darkgrey,
    width: 342,
    marginLeft: 12,
    marginTop: 7,
    lineHeight: 16,
  },
  reset: {
    fontWeight: "400",
    fontSize: 16,
    color: colors.harsh,
    marginTop: 14,
    marginLeft: 12,
  },
  mediabox: {
    backgroundColor: colors.white,
    borderColor: colors.gray,
    height: 290,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
  },
  auto: {
    color: colors.darkgrey,
    fontSize: 12,
    fontWeight: "400",
    marginLeft: 20,
    marginTop: 29,
    marginBottom: 6,
  },
  usage: {
    color: colors.black,
    fontSize: 17,
    fontWeight: "600",
    marginLeft: 15,
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
