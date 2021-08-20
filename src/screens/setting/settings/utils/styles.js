import { StyleSheet } from "react-native";
import * as colors from "../../../../components/common/colors";

export const settingsstyles = StyleSheet.create({
  but: {
    marginTop: 20,
    width: 350,
    borderRadius: 20,
    backgroundColor: colors.white,
    height: 60,
  },
  modalBox: {
    backgroundColor: colors.white,
    borderRadius: 20,
    height: 180,
    width: 350,
    alignSelf: "center",
    marginTop: 50,
  },

  mute: {
    textAlign: "center",
    fontSize: 20,
    marginLeft: 15,
    color: colors.blue,
    marginTop: 20,
    marginBottom: 20,
  },
  facebook: {
    fontWeight: "400",
    fontSize: 12,
    color: colors.brownie,
    alignSelf: "center",
    marginTop: 17,
  },
  content: {
    height: 210,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    marginTop: 40,
    borderWidth: 1,
    borderColor: colors.gray,
  },
  line: {
    width: "93%",
    height: 0.5,
    backgroundColor: colors.gray,
    marginLeft: 45,
  },
  webicon: {
    height: 32,
    width: 32,
  },
  staricon: {
    height: 32,
    width: 32,
    marginTop: 10,
    marginBottom: 10,
  },
  messages: {
    fontSize: 16,
    fontWeight: "400",
    color: colors.black,
    marginLeft: 15,
  },
  starr: {
    flexDirection: "row",
    alignItems: "center",
  },
  starcont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  star: {
    height: 100,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    marginTop: 40,
    borderWidth: 1,
    borderColor: colors.gray,
  },
  goodies: {
    color: colors.harsh,

    fontSize: 16,
  },
  sabohiddin: {
    fontWeight: "400",
    fontSize: 20,
    color: colors.black,
  },
  andrew: {
    width: 58,
    height: 58,
  },
  profile: {
    height: 76,
    backgroundColor: colors.white,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  bar: {
    backgroundColor: colors.grey,
    height: 60,
  },
  settings: {
    color: colors.black,
    fontSize: 17,
    fontWeight: "600",
    alignSelf: "center",
    marginTop: 25,
  },
});
