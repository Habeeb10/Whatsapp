import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { Container } from "../../../components/container/container";
import {
  Add,
  Audio,
  Back,
  Call,
  Cam,
  Stickers,
  Video,
} from "../../../../assets/svg";
import { openchatstyles as styles } from "./utils/styles";
import { Modalcomp } from "./utils/modal";
import { ChatList } from "../chats/utils/chatcard";

export default function Openchat({ navigation, route }) {
  const [modal, setModalState] = useState(false);
  const { details } = route.params;
  const { title } = details;
  const picture = ChatList.find((item) => item.title === title).icon;

  return (
    <>
      <Container>
        <View style={styles.bar}>
          <View style={styles.content}>
            <TouchableOpacity onPress={() => navigation.navigate("chat")}>
              <Back />
            </TouchableOpacity>

            <View style={styles.map}>
              <Image source={picture} style={styles.image} />
              <TouchableOpacity
                style={{ marginLeft: 10 }}
                onPress={() => navigation.navigate("contactinfo", {})}
              >
                <Text style={styles.title}>{title}</Text>
                <Text style={{ fontSize: 12, color: "grey" }}>
                  tap here for contact info
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Video />
            </TouchableOpacity>
            <TouchableOpacity>
              <Call />
            </TouchableOpacity>
          </View>

          <View style={styles.compbox}>
            <TouchableOpacity onPress={() => setModalState(true)}>
              <Add />
            </TouchableOpacity>

            <TouchableOpacity style={styles.sticker}>
              <TextInput style={styles.input} />
              <Stickers />
            </TouchableOpacity>
            <TouchableOpacity>
              <Cam />
            </TouchableOpacity>
            <TouchableOpacity>
              <Audio />
            </TouchableOpacity>
          </View>
        </View>
      </Container>
      <Modalcomp isVisible={modal} close={() => setModalState(false)} />
    </>
  );
}
