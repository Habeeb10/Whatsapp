import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Header } from "../../../shared/header";
import { Container } from "../../../components/container/container";
import { editstyles as styles } from "./utils/styles";
import { Searchinput } from "../../../shared/search";
import { ChatList, ItemCard } from "./utils/editcard";

export default function Edit({ navigation }) {
  return (
    <>
      <Container>
        <View style={styles.bar}>
          <Header
            left="Done"
            leftstyle={styles.left}
            onPress={() => navigation.navigate("chat")}
          />
          <Text style={styles.chat}>Chats</Text>
        </View>
        <Searchinput placeholder="Search" />
        <View style={styles.group}>
          <TouchableOpacity>
            <Text style={styles.list}>Broadcast Lists</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.list}>New Group</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          vertical={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scroll}
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
              />
            );
          })}
        </ScrollView>
      </Container>
    </>
  );
}
