import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
const { Navigator, Screen } = createStackNavigator();

import { CarDetails } from "../screens/CarDetails";
import { Home } from "../screens/Home";
import { Scheduling } from "../screens/Scheduling";
import { Confirmation } from "../screens/Confirmation";
import { SchedulingDetails } from "../screens/SchedulingDetails";
import { MyCars } from "../screens/MyCars";
import { Splash } from "../screens/Splash";
import { SignIn } from "../screens/SignIn/index";
import { SignUpFirstStep } from "../screens/SignUp/SignUpFirstStep";
import { SignUpSecondStep } from "../screens/SignUp/SignUpSecondStep";

export function StackRoutes() {
  return (
    <Navigator initialRouteName="Home">
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
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <Screen
        name="SignUpSecondStep"
        component={SignUpSecondStep}
        options={{
          headerShown: false,
          gestureEnabled: false,
        }}
      />
      <Screen
        name="CarDetails"
        component={CarDetails}
        options={{ headerShown: false }}
      />
      <Screen
        name="Scheduling"
        component={Scheduling}
        options={{ headerShown: false }}
      />
      <Screen
        name="Confirmation"
        component={Confirmation}
        options={{ headerShown: false }}
      />
      <Screen
        name="SchedulingDetails"
        component={SchedulingDetails}
        options={{ headerShown: false }}
      />
      <Screen
        name="MyCars"
        component={MyCars}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
}
