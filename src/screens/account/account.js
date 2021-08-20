import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Container } from "../../components/container/container";
import { accountstyles as styles } from "./utils/styles";
import * as colors from "../../components/common/colors";
import Arrowright, { Back } from "../../../assets/svg";
import { ItemCard } from "./utils/accountcard";

export const List = [
  {
    title: "Privacy",
    svg: <Arrowright />,
  },
  {
    title: "Security",
    svg: <Arrowright />,
  },
  {
    title: "Two-Step Verification",
    svg: <Arrowright />,
  },
  {
    title: "Change Number",
    svg: <Arrowright />,
  },
];

export const List2 = [
  {
    title: "Request Account Info",
    svg: <Arrowright />,
  },
  {
    title: "Delete My Account",
    svg: <Arrowright />,
  },
];

export default function Account({ navigation }) {
  return (
    <>
      <Container barColor={colors.white} backgroundColor={colors.grey}>
        <View style={styles.bar}>
          <TouchableOpacity onPress={() => navigation.navigate("settings")}>
            <Back />
          </TouchableOpacity>
          <Text style={styles.setting}>Settings</Text>
          <Text style={styles.edit}>Account</Text>
        </View>

        <View style={styles.accountlist}>
          {List.map((item, index) => {
            return <ItemCard key={index} title={item.title} svg={item.svg} />;
          })}
        </View>
        <View style={styles.accountlist}>
          {List2.map((item, index) => {
            return <ItemCard key={index} title={item.title} svg={item.svg} />;
          })}
        </View>
      </Container>
    </>
  );
}
