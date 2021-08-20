import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { settingsstyles as styles } from "./styles";
import Modal from "react-native-modal";
import { Button } from "../../../../shared/button";

export const Settingsmodal = ({ close, isVisible, onPress, isActive }) => {
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
              <TouchableOpacity>
                <Text style={styles.mute}>Mail</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.mute}>Message</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.mute}>More</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Button title="Cancel" style={styles.but} onPress={close} />
        </View>
      </Modal>
    </View>
  );
};
