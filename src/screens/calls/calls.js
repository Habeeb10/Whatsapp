import React from "react";
import { Text, View, TextInput } from "react-native";
import { Header } from "../../shared/header";
import { Container } from "../../components/container/container";
import { callsstyles as styles } from "./utils/styles";
import * as colors from "../../components/common/colors";

export default function Calls() {
  return (
    <>
      <Container barColor={colors.grey}></Container>
    </>
  );
}
