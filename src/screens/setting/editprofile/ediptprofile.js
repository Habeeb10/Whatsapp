import React from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { Container } from "../../../components/container/container";
import { editprofilestyles as styles } from "../editprofile/utils/styles";
import * as colors from "../../../components/common/colors";
import { Back } from "../../../../assets/svg";
import { Andrew } from "../../../../assets/images";
import { Input } from "../../../shared/textinput";

export default function Editprofile({ navigation }) {
  return (
    <>
      <Container barColor={colors.grey} backgroundColor={colors.grey}>
        <View style={styles.bar}>
          <TouchableOpacity onPress={() => navigation.navigate("settings")}>
            <Back />
          </TouchableOpacity>

          <Text style={styles.setting}>Settings</Text>
          <Text style={styles.edit}>Edit Profile</Text>
        </View>
        <View style={styles.star}>
          <TouchableOpacity
            style={styles.profile}
            onPress={() => navigation.navigate("editprofile")}
          >
            <Image source={Andrew} style={styles.andrew} />
            <View>
              <Text style={styles.optional}>
                Enter your name and add an optional profile picture
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.editname}>Edit</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            placeholder="Sabohiddin"
            placeholderTextColor={colors.black}
          ></TextInput>
        </View>
        <Input label="PHONE NUMBER" placeHolder="+998 90 943 32 00" />
        <Input
          label="ABOUT"
          placeHolder="Digital goodies designer - Pixsellz"
        />
      </Container>
    </>
  );
}
