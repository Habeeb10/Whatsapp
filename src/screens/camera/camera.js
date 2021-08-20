import React from "react";
import {
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Text,
} from "react-native";
import { Container } from "../../components/container/container";
import { camerastyles as styles } from "./utils/styles";
import * as colors from "../../components/common/colors";
import { Cameraview } from "../../../assets/images";
import {
  Cam,
  Cancel,
  Changecam,
  GalleryIcon,
  Library,
  Light,
  Takephoto,
} from "../../../assets/svg";

export default function Camera({ navigation }) {
  return (
    <>
      <Container barColor={colors.black}>
        <View style={styles.bar}>
          <TouchableOpacity onPress={() => navigation.navigate("chat")}>
            <Cancel />
          </TouchableOpacity>
          <TouchableOpacity>
            <Light />
          </TouchableOpacity>
        </View>
        <View style={styles.icon}>
          <TouchableOpacity>
            <GalleryIcon />
          </TouchableOpacity>
          <TouchableOpacity>
            <Takephoto />
          </TouchableOpacity>
          <TouchableOpacity>
            <Changecam />
          </TouchableOpacity>
        </View>

        <View style={styles.bottombar}>
          <Text style={styles.video}> Hold for video, tap for photo</Text>
        </View>
      </Container>
    </>
  );
}
