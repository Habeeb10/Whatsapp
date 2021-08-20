import React from "react";
import { View, Text, TouchableOpacity, Switch } from "react-native";
import { Container } from "../../../components/container/container";
import { notificationsettingsstyles as styles } from "./utils/styles";
import * as colors from "../../../components/common/colors";
import Arrowright, { Back } from "../../../../assets/svg";

export default function Notificationsettings({ navigation }) {
  return (
    <>
      <Container barColor={colors.white} backgroundColor={colors.grey}>
        <View style={styles.bar}>
          <TouchableOpacity onPress={() => navigation.navigate("settings")}>
            <Back />
          </TouchableOpacity>

          <Text style={styles.setting}>Settings</Text>
          <Text style={styles.notifications}>Notifications</Text>
        </View>
        <Text style={styles.disable}>
          WARNING: Push Notifications are disabled. To enable visit:
        </Text>
        <Text style={styles.disabled}>
          iPhone Settings > Notifications > WhatsApp
        </Text>
        <View style={styles.line}></View>
        <Text style={styles.message}>MESSAGE NOTIFICATIONS</Text>
        <View style={styles.sound}>
          <TouchableOpacity style={styles.boxcont}>
            <Text style={styles.show}>Show Notifications</Text>
            <Switch />
          </TouchableOpacity>
          <View style={styles.line2}></View>
          <TouchableOpacity style={styles.boxcont}>
            <Text style={styles.show}>Sound</Text>
            <View style={styles.boxcont}>
              <Text style={styles.note}>Note</Text>
              <Arrowright />
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.group}>GROUP NOTIFICATIONS</Text>
        <View style={styles.sound}>
          <TouchableOpacity style={styles.boxcont}>
            <Text style={styles.show}>Show Notifications</Text>
            <Switch />
          </TouchableOpacity>
          <View style={styles.line2}></View>
          <TouchableOpacity style={styles.boxcont}>
            <Text style={styles.show}>Sound</Text>
            <View style={styles.boxcont}>
              <Text style={styles.note}>Note</Text>
              <Arrowright />
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.sound2}>
          <View>
            <Text style={styles.app}>In-App Notifications</Text>
            <Text style={styles.vibrate}>Banners, Sounds, Vibrate</Text>
          </View>
          <Arrowright />
        </TouchableOpacity>
        <View style={styles.sound2}>
          <Text style={styles.app}>Show Preview</Text>
          <Switch />
        </View>
        <Text style={styles.new}>
          Preview message text inside new message notifications.
        </Text>
        <TouchableOpacity style={styles.sound3}>
          <Text style={styles.reset}>Reset Notification Settings</Text>
        </TouchableOpacity>
      </Container>
    </>
  );
}
