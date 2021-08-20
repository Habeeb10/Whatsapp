import { StyleSheet } from "react-native";
import * as colors from "../../../../components/common/colors";

export const chatstyles = StyleSheet.create({
  line: {
    width: "95%",
    height: 1,
    backgroundColor: colors.white,
    alignSelf: "flex-end",
  },
  container: {
    marginHorizontal: 0,
    backgroundColor: "rgba(0,0,0,.5)",
  },
  textcolor: {
    color: colors.black,
  },

  but: {
    marginTop: 10,
    width: "90%",
    borderRadius: 20,
    backgroundColor: colors.dark,
    height: 60,
  },
  modalBox: {
    backgroundColor: colors.dark,
    borderRadius: 20,
    height: 300,
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
  },

  chat: {
    fontSize: 24,
    marginLeft: 10,
    marginTop: 20,
    color: colors.black,
    fontWeight: "bold",
  },
  list: {
    color: colors.blue,
    fontSize: 17,
    fontWeight: "400",
  },
  group: {
    height: 44,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 13,
    alignItems: "center",
    marginTop: 15,
  },
  right: {
    color: colors.black,
  },
  bar: {
    height: 60,
  },
  left: {
    color: colors.blue,
    fontSize: 18,
  },
});
