import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
const { Navigator, Screen } = createStackNavigator();

import { Splash } from "../screens/Splash";
import { SignIn } from "../screens/SignIn/index";
import { SignUpFirstStep } from "../screens/SignUp/SignUpFirstStep";
import { SignUpSecondStep } from "../screens/SignUp/SignUpSecondStep";
import { Confirmation } from "../screens/Confirmation";

export function AuthRoutes() {
  return (
    <Navigator initialRouteName="Splash">
      <Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Screen
        name="SignUpFirstStep"
        component={SignUpFirstStep}
        options={{ headerShown: false }}
      />
      <Screen
        name="SignUpSecondStep"
        component={SignUpSecondStep}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="Confirmation"
        component={Confirmation}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
}
