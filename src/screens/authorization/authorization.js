import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Header } from "../../shared/header";
import { Container } from "../../components/container/container";
import { authostyles as styles } from "./utils/styles";
import { Numberinput } from "../../shared/phonenumberinput";
import Arrowright from "../../../assets/svg";

export default function Authorization() {
  return (
    <>
      <Container>
        <View style={styles.bar}>
          <Header left="Phone number" right="Done" />
        </View>
        <Text style={styles.code}>
          Please confirm your country code and enter your phone number{" "}
        </Text>
        <Numberinput
          countrycode="+1"
          placeholder="phone number"
          label="United States"
          icon={<Arrowright />}
        />
      </Container>
    </>
  );
}
