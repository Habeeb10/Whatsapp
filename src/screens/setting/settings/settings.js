import React, { useState } from "react";
import { Text, View, TextInput, Image, TouchableOpacity } from "react-native";
import { Container } from "../../../components/container/container";
import { settingsstyles as styles } from "./utils/styles";
import * as colors from "../../../components/common/colors";
import { Andrew } from "../../../../assets/images";
import { Star } from "../../../../assets/images";
import { Web } from "../../../../assets/images";
import { Account } from "../../../../assets/images";
import { Chat } from "../../../../assets/images";
import { Notification } from "../../../../assets/images";
import { Data } from "../../../../assets/images";
import { Help } from "../../../../assets/images";
import { Friend } from "../../../../assets/images";
import Arrowright from "../../../../assets/svg";
import { Settingsmodal } from "./utils/modalcomponent";

export default function Settings({ navigation }) {
  const [modal, setModalState] = useState(false);
  return (
    <>
      <Container barColor={colors.grey} backgroundColor={colors.grey}>
        <View style={styles.bar}>
          <Text style={styles.settings}>Settings</Text>
        </View>
        <TouchableOpacity
          style={styles.profile}
          onPress={() => navigation.navigate("editprofile")}
        >
          <Image source={Andrew} style={styles.andrew} />
          <View>
            <Text style={styles.sabohiddin}>Sabohiddin</Text>
            <Text style={styles.goodies}>
              Digital goodies designer - Pixsellz
            </Text>
          </View>
          <Arrowright />
        </TouchableOpacity>
        <View style={styles.star}>
          <TouchableOpacity style={styles.starcont}>
            <View style={styles.starr}>
              <Image source={Star} style={styles.staricon} />
              <Text style={styles.messages}>Starred Messages</Text>
            </View>
            <Arrowright />
          </TouchableOpacity>
          <View style={styles.line}></View>
          <TouchableOpacity style={styles.starcont}>
            <View style={styles.starr}>
              <Image source={Web} style={styles.webicon} />
              <Text style={styles.messages}>WhatsApp Web/Desktop</Text>
            </View>
            <Arrowright />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <TouchableOpacity
            style={styles.starcont}
            onPress={() => navigation.navigate("account")}
          >
            <View style={styles.starr}>
              <Image source={Account} style={styles.staricon} />
              <Text style={styles.messages}>Account</Text>
            </View>
            <Arrowright />
          </TouchableOpacity>
          <View style={styles.line}></View>
          <TouchableOpacity
            style={styles.starcont}
            onPress={() => navigation.navigate("chatset")}
          >
            <View style={styles.starr}>
              <Image source={Chat} style={styles.staricon} />
              <Text style={styles.messages}>Chats</Text>
            </View>
            <Arrowright />
          </TouchableOpacity>
          <View style={styles.line}></View>
          <TouchableOpacity
            style={styles.starcont}
            onPress={() => navigation.navigate("notificationsettings")}
          >
            <View style={styles.starr}>
              <Image source={Notification} style={styles.staricon} />
              <Text style={styles.messages}>Notifications</Text>
            </View>
            <Arrowright />
          </TouchableOpacity>
          <View style={styles.line}></View>
          <TouchableOpacity
            style={styles.starcont}
            onPress={() => navigation.navigate("storage")}
          >
            <View style={styles.starr}>
              <Image source={Data} style={styles.staricon} />
              <Text style={styles.messages}>Data and Storage Usage</Text>
            </View>
            <Arrowright />
          </TouchableOpacity>
        </View>
        <View style={styles.star}>
          <TouchableOpacity style={styles.starcont}>
            <View style={styles.starr}>
              <Image source={Help} style={styles.staricon} />
              <Text style={styles.messages}>Help</Text>
            </View>
            <Arrowright />
          </TouchableOpacity>
          <View style={styles.line}></View>
          <TouchableOpacity
            style={styles.starcont}
            onPress={() => setModalState(true)}
          >
            <View style={styles.starr}>
              <Image source={Friend} style={styles.webicon} />
              <Text style={styles.messages}>Tell a Friend</Text>
            </View>
            <Arrowright />
          </TouchableOpacity>
        </View>
        <Text style={styles.facebook}>WhatsApp from Facebook</Text>
      </Container>
      <Settingsmodal isVisible={modal} close={() => setModalState(false)} />
    </>
  );
}
