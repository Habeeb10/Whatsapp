import { StyleSheet } from "react-native";
import * as colors from "../../../components/common/colors";

export const callsstyles = StyleSheet.create({
  countrycode: {
    width: 45,
    fontSize: 18,
    color: colors.gray,
  },
  textInput: {
    marginLeft: 20,
    fontSize: 18,
    color: colors.gray,
  },
  seperator: {
    width: 1,
    height: 45,
    backgroundColor: colors.transparent,
    marginLeft: 10,
  },
  modalheight: {
    height: 130,
    bottom: 0,
    left: 0,
    right: 0,
  },
  modalcont: {
    marginHorizontal: 0,
    backgroundColor: "rgba(0,0,0,.5)",
  },
  modalbox: {
    backgroundColor: colors.white,
    height: 70,
    width: "100%",
    opacity: 1,
  },
  right: {
    marginLeft: 75,
  },
  left: {
    marginLeft: 120,
  },
  bar: {
    backgroundColor: colors.grey,
    height: 60,
  },
  code: {
    color: colors.black,
    fontWeight: "400",
    fontSize: 15,
    width: 280,
    textAlign: "center",
    alignSelf: "center",
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
});
