import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import * as colors from "../../../components/common/colors";

export const CountryCard = ({ country, isActive, close }) => {
  return (
    <TouchableOpacity style={styles.click} onPress={close}>
      <Text style={[styles.country, isActive && styles.textcolor]}>
        {country}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textcolor: {
    color: colors.blue,
  },
  countrycode: {
    fontSize: 17,
  },
  country: {
    fontSize: 17,
  },
  click: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 70,
    marginTop: 20,
  },
});
