import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { Back } from "../../../../assets/svg";
import { Container } from "../../../components/container/container";
import { contactinfostyles as styles } from "./utils/styles";

export default function Contactinfo({ navigation }) {
  // const { details } = route.params;
  // const { title } = details;
  // const icon = getImage(title);
  return (
    <>
      <Container>
        <View style={styles.bar}>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate("chat")}>
              <Back />
            </TouchableOpacity>

            {/* <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image source={icon} style={styles.image} />

              <Text style={styles.title}>{title}</Text>
            </View> */}
          </View>
        </View>
      </Container>
    </>
  );
}
