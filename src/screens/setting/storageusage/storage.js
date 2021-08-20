import React from "react";
import { View, Text, TouchableOpacity, Switch } from "react-native";
import { Container } from "../../../components/container/container";
import { storagestyles as styles } from "./utils/styles";
import * as colors from "../../../components/common/colors";
import Arrowright, { Back } from "../../../../assets/svg";
import { MediaCard, StorageList } from "./utils/mediacard";

export default function Storage({ navigation }) {
  return (
    <>
      <Container barColor={colors.white} backgroundColor={colors.grey}>
        <View style={styles.bar}>
          <TouchableOpacity onPress={() => navigation.navigate("settings")}>
            <Back />
          </TouchableOpacity>

          <Text style={styles.setting}>Settings</Text>
          <Text style={styles.usage}>Data and Storage Usage</Text>
        </View>
        <Text style={styles.auto}>MEDIA AUTO-DOWNLOAD</Text>
        <View style={styles.mediabox}>
          <View>
            {StorageList.map((item, index) => {
              return (
                <MediaCard
                  key={index}
                  title={item.title}
                  audio={item.audio}
                  video={item.video}
                  document={item.document}
                  svg={item.svg}
                  wifi={item.wifi}
                  cellular={item.cellular}
                />
              );
            })}
          </View>
          <TouchableOpacity>
            <Text style={styles.reset}>Reset Auto-Download Settings</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.best}>
          Voice Messages are always automatically downloaded for the best
          communication experience.
        </Text>
        <Text style={styles.call}>Call Settings</Text>
        <View style={styles.callbox}>
          <Text style={styles.data}>Low Data Usage</Text>
          <TouchableOpacity style={styles.callcont}>
            <Switch />
          </TouchableOpacity>
        </View>
        <Text style={styles.best}>
          Lower the amount of data used during a WhatsAoo call on cellular.
        </Text>
        <View style={styles.networkbox}>
          <TouchableOpacity style={styles.usagebox}>
            <Text style={styles.use}>Network Usage</Text>
            <Arrowright />
          </TouchableOpacity>
          <View style={styles.line}></View>
          <TouchableOpacity style={styles.usagebox}>
            <Text style={styles.show}>Storage Usage</Text>
            <Arrowright />
          </TouchableOpacity>
        </View>
      </Container>
    </>
  );
}
