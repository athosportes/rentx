import React from "react";
import { AppProvider } from "./src/hooks";
import AppLoading from "expo-app-loading";
import { ThemeProvider } from "styled-components";
import { StatusBar } from "react-native";

import theme from "./src/styles/theme";

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from "@expo-google-fonts/inter";

import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from "@expo-google-fonts/archivo";

import { Routes } from './src/routes';

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <AppProvider>
        <Routes />
      </AppProvider>
    </ThemeProvider>
  );
}
