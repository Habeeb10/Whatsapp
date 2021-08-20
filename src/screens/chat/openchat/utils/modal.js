import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { openchatstyles as styles } from "./styles";
import Modal from "react-native-modal";
import { Button } from "../../../../shared/button";
// import {
//   Cam,
//   Contact,
//   Document,
//   Library,
//   Location,
// } from "../../../../assets/svg";
import { ModalCard, ModalList } from "./openchatmodal";

export const Modalcomp = ({ close, isVisible, onPress, isActive }) => {
  return (
    <View>
      <Modal
        visible={isVisible}
        style={[styles.container, isActive && styles.textcolor]}
        onPress={onPress}
      >
        <View style={{ height: 0 }}>
          <View style={styles.modalBox}>
            <View style={styles.cont}>
              {ModalList.map((item, index) => {
                return (
                  <ModalCard key={index} title={item.title} icon={item.icon} />
                );
              })}
            </View>
          </View>
          <Button title="Cancel" style={styles.but} onPress={close} />
        </View>
      </Modal>
    </View>
  );
};
