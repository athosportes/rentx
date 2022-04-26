import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
const { Navigator, Screen } = createStackNavigator();

import { CarDetails } from '../screens/CarDetails';
import { Home } from '../screens/Home';
import { Scheduling } from '../screens/Scheduling';
import { SchedulingComplete } from '../screens/SchedulingComplete';
import { SchedulingDetails } from '../screens/SchedulingDetails';

export function StackRoutes(){
  return(
    <Navigator >
      <Screen 
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Screen 
        name="CarDetails"
        component={CarDetails}
        options={{headerShown: false}}
      />
      <Screen 
        name="Scheduling"
        component={Scheduling}
        options={{headerShown: false}}
      />
      <Screen 
        name="SchedulingComplete"
        component={SchedulingComplete} 
        options={{headerShown: false}}
      />
      <Screen 
        name="SchedulingDetails"
        component={SchedulingDetails}
        options={{headerShown: false}}
      />
    </Navigator>

  )
}