import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Header } from "../../../shared/header";
import { Container } from "../../../components/container/container";
import { Shape } from "../../../../assets/svg";
import { chatstyles as styles } from "./utils/styles";
import { Searchinput } from "../../../shared/search";
import { ChatList, ItemCard } from "./utils/chatcard";
import { Modalcomponent } from "./utils/modalcomponent";
import * as colors from "../../../components/common/colors";

export default function Chat({ navigation }) {
  const [modal, setModalState] = useState(false);
  return (
    <>
      <Container barColor={colors.grey}>
        <View style={styles.bar}>
          <Header
            left="Edit"
            leftstyle={styles.left}
            icon={<Shape />}
            onPress={() => navigation.navigate("edit")}
          />
          <Text style={styles.chat}>Chats</Text>
        </View>
        <Searchinput placeholder="Search" />
        <View style={styles.group}>
          <TouchableOpacity>
            <Text style={styles.list}>Broadcast Lists</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalState(true)}>
            <Text style={styles.list}>New Group</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          vertical={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            justifyContent: "space-between",
          }}
        >
          {ChatList.map((item, index) => {
            return (
              <ItemCard
                key={index}
                icon={item.icon}
                title={item.title}
                chat={item.chat}
                read={item.read}
                svg={item.svg}
                date={item.date}
                onPress={() =>
                  navigation.navigate("openchat", {
                    details: item,
                  })
                }
              />
            );
          })}
        </ScrollView>
      </Container>
      <Modalcomponent isVisible={modal} close={() => setModalState(false)} />
    </>
  );
}
