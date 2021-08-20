import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { chatstyles as styles } from "./styles";
import Modal from "react-native-modal";
import { Button } from "../../../../shared/button";
import { ModalCard, ModalList } from "./chatmodal";

export const Modalcomponent = ({ close, isVisible, onPress, isActive }) => {
  const [active, setActive] = useState("Delete Chat");
  return (
    <View>
      <Modal
        visible={isVisible}
        style={[styles.container, isActive && styles.textcolor]}
        onPress={onPress}
      >
        <View style={{ height: 0 }}>
          <View style={styles.modalBox}>
            <View>
              {ModalList.map((item, index) => {
                return (
                  <ModalCard
                    key={index}
                    title={item.title}
                    onPress={() => setActive(item.title)}
                    isActive={item.title === active}
                  />
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
