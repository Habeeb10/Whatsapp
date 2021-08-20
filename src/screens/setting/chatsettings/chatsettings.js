import React from "react";
import { View, Text, TouchableOpacity, Switch } from "react-native";
import { Container } from "../../../components/container/container";
import { chatsettingsstyles as styles } from "./utils/styles";
import * as colors from "../../../components/common/colors";
import Arrowright, { Back } from "../../../../assets/svg";
import { ChatCard } from "./utils/chatsettingscard";

export const List = [
  {
    title: "Archive All Chats",
  },
  {
    title: "Clear All Chats",
  },

  {
    title: "Delete All Chats",
  },
];

export default function Chatsettings({ navigation }) {
  return (
    <>
      <Container barColor={colors.white} backgroundColor={colors.grey}>
        <View style={styles.bar}>
          <TouchableOpacity onPress={() => navigation.navigate("settings")}>
            <Back />
          </TouchableOpacity>

          <Text style={styles.setting}>Settings</Text>
          <Text style={styles.chat}>Chat</Text>
        </View>
        <TouchableOpacity style={styles.right}>
          <Text style={styles.wallpaper}>Change Wallpaper</Text>
          <Arrowright />
        </TouchableOpacity>
        <View>
          <View style={styles.right}>
            <Text style={styles.save}>Save to Camera Roll</Text>
            <Switch />
          </View>
          <Text style={styles.receive}>
            Automatically save photos and videos you receive to your iPhone’s
            Camera Roll.
          </Text>
        </View>
        <TouchableOpacity style={styles.chatbackup}>
          <Text style={styles.backup}>Chat Backup</Text>
          <Arrowright />
        </TouchableOpacity>
        <View style={styles.accountlist}>
          {List.map((item, index) => {
            return <ChatCard key={index} title={item.title} />;
          })}
        </View>
      </Container>
    </>
  );
}
