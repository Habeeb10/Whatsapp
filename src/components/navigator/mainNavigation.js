import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Authorization from "../../screens/authorization/authorization";
import MyTabs from "./tabNavigation";

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={"none"}>
        <Stack.Screen name="authorization" component={Authorization} />
        <Stack.Screen name="settings" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
