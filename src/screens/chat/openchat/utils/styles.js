import { StyleSheet } from "react-native";
import * as colors from "../../../../components/common/colors";

export const openchatstyles = StyleSheet.create({
  map: {
    flexDirection: "row",
    alignItems: "center",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 20,
    justifyContent: "space-between",
  },

  cont: {
    paddingHorizontal: 20,
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
    marginTop: 20,
  },

  mute: {
    textAlign: "center",
    fontSize: 20,

    marginLeft: 15,
  },
  input: {
    width: "85%",
  },
  sticker: {
    width: 228,
    height: 30,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.grey,
    paddingHorizontal: 7,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  compbox: {
    marginTop: 600,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  container: {
    marginHorizontal: 0,
    backgroundColor: "rgba(0,0,0,.5)",
  },

  image: {
    marginTop: 10,
    width: 50,
    height: 50,
  },

  right: {
    color: colors.black,
  },
  bar: {
    height: 60,
    backgroundColor: colors.white,
  },
  left: {
    color: colors.blue,
    fontSize: 18,
  },
});
