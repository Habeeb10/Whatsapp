import { SafeAreaView, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import * as colors from "../common/colors";

export const Container = ({
  children,
  barColor = colors.white,
  backgroundColor = colors.white,
}) => {
  return (
    <>
      <StatusBar style={"dark"} />
      <SafeAreaView style={{ backgroundColor: barColor }} />
      <View style={{ flex: 1, backgroundColor: backgroundColor }}>
        {children}
      </View>
    </>
  );
};
