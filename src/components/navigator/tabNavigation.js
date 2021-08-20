import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Phone, Ping } from "../../../assets/svg";
import Chat from "../../screens/chat/chats/chat";
import Status from "../../screens/status/status";
import Calls from "../../screens/calls/calls";
import Camera from "../../screens/camera/camera";
import Settings from "../../screens/setting/settings/settings";
import * as colors from "../common/colors";
import { Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Contactinfo from "../../screens/chat/contactinfo/contactinfo";
import Editprofile from "../../screens/setting/editprofile/ediptprofile";
import Account from "../../screens/account/account";
import Chatsettings from "../../screens/setting/chatsettings/chatsettings";
import Notificationsettings from "../../screens/setting/notification/notification";
import Openchat from "../../screens/chat/openchat/openchat";
import Edit from "../../screens/chat/editchat/edit";
import Storage from "../../screens/setting/storageusage/storage";

const Tab = createBottomTabNavigator();
const ChatStack = createStackNavigator();
const SettingsStack = createStackNavigator();

function ChatStackScreen() {
  return (
    <ChatStack.Navigator headerMode={false}>
      <ChatStack.Screen name="chat" component={Chat} />
      <ChatStack.Screen name="edit" component={Edit} />
      <ChatStack.Screen name="openchat" component={Openchat} />
      <ChatStack.Screen name="contactinfo" component={Contactinfo} />
    </ChatStack.Navigator>
  );
}

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator headerMode={false}>
      <SettingsStack.Screen name="settings" component={Settings} />
      <SettingsStack.Screen name="editprofile" component={Editprofile} />
      <SettingsStack.Screen name="account" component={Account} />
      <SettingsStack.Screen name="chatset" component={Chatsettings} />
      <SettingsStack.Screen name="storage" component={Storage} />
      <SettingsStack.Screen
        name="notificationsettings"
        component={Notificationsettings}
      />
    </SettingsStack.Navigator>
  );
}

export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          if (route.name === "status") {
            return (
              <Image
                source={require("../../../assets/images/status.png")}
                color={focused ? colors.blue : "#979797"}
              />
            );
          } else if (route.name === "calls") {
            return <Phone color={focused ? colors.blue : "#979797"} />;
          } else if (route.name === "camera") {
            return (
              <Image
                source={require("../../../assets/images/camera.png")}
                color={focused ? colors.blue : "#979797"}
              />
            );
          } else if (route.name === "chat") {
            return <Ping color={focused ? colors.blue : "#979797"} />;
          } else if (route.name === "settings") {
            return (
              <Image
                source={require("../../../assets/images/settings.png")}
                color={focused ? colors.blue : "#979797"}
              />
            );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.blue,
        inactiveTintColor: "#9586A8",
      }}
    >
      <Tab.Screen name="status" component={Status} />
      <Tab.Screen name="calls" component={Calls} />
      <Tab.Screen name="camera" component={Camera} />
      <Tab.Screen name="chat" component={ChatStackScreen} />
      <Tab.Screen name="settings" component={SettingsStackScreen} />
    </Tab.Navigator>
  );
}
