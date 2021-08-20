import React, { useState } from "react";
import { Text, View, TextInput } from "react-native";
import { Header } from "../../shared/header";
import { Container } from "../../components/container/container";
import { authostyles as styles } from "./utils/styles";
import { Numberinput } from "../../shared/phonenumberinput";
import Arrowright from "../../../assets/svg";
import Modal from "react-native-modal";
import { CountryCard } from "./utils/countrycard";
import * as colors from "../../components/common/colors";

const CountryList = [
  {
    country: "United States",
    countrycode: "+1",
  },
  {
    country: "Nigeria",
    countrycode: "+234",
  },
  {
    country: "Ghana",
    countrycode: "+233",
  },
];

export default function Authorization({ navigation }) {
  const [modal, setModalState] = useState(false);
  const [phonenumber, setPhone] = useState("");
  const [country, setCountry] = useState({
    country: "United States",
    countrycode: "+1",
  });

  return (
    <>
      <Container barColor={colors.grey}>
        <View style={styles.bar}>
          <Header
            left="Phone number"
            leftstyle={styles.left}
            right="Done"
            rightstyle={[styles.right, phonenumber && styles.textcolor]}
            onPress={() => navigation.navigate("settings")}
          />
        </View>
        <Text style={styles.code}>
          Please confirm your country code and enter your phone number
        </Text>
        <Numberinput
          label={country.country}
          onPress={() => setModalState(true)}
        />
        <View style={styles.container}>
          <Text style={styles.countrycode}>{country.countrycode}</Text>
          <View style={styles.seperator}></View>
          <TextInput
            style={styles.textInput}
            placeholder={"phone number"}
            onChangeText={setPhone}
            value={phonenumber}
            keyboardType="number-pad"
          />
        </View>
      </Container>

      <View>
        <Modal visible={modal} style={styles.modalcont} coverScreen>
          <View style={styles.modalheight}>
            {CountryList.map((item, index) => {
              return (
                <View style={styles.modalbox}>
                  <CountryCard
                    key={index}
                    country={item.country}
                    close={() => {
                      setCountry(item);
                      setModalState(false);
                    }}
                  />
                </View>
              );
            })}
          </View>
        </Modal>
      </View>
    </>
  );
}
