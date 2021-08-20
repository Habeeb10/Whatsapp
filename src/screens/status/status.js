import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { Header } from "../../shared/header";
import { Container } from "../../components/container/container";
import { statusstyles as styles } from "./utils/styles";
import * as colors from "../../components/common/colors";
import { Cancel, Pelete, Textedit } from "../../../assets/svg";
import { StatusBar } from "expo-status-bar";

export default function Status({ navigation }) {
  return (
    <>
      <Container barColor={colors.pink}>
        <StatusBar style={"light"} />
        <View style={styles.bar}>
          <View style={styles.tap}>
            <View style={styles.iconbox}>
              <TouchableOpacity onPress={() => navigation.navigate("chat")}>
                <Cancel />
              </TouchableOpacity>
              <View style={styles.iconbox2}>
                <TouchableOpacity>
                  <Textedit style={{ marginRight: 20 }} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Pelete />
                </TouchableOpacity>
              </View>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Type a Status"
              placeholderTextColor={colors.gray}
            ></TextInput>
          </View>
        </View>
      </Container>
    </>
  );
}
