import React from "react";
import { CommonActions, useNavigation, useRoute } from "@react-navigation/native";
import { useWindowDimensions, StatusBar } from "react-native";

import LogoSvg from "../../assets/logo_background_gray.svg";
import DoneSvg from "../../assets/done.svg";

import { ConfirmButton } from "../../components/ConfirmButton";

import { Container, Content, Title, Message, Footer } from "./styles";

interface Params {
  title: string;
  message: string;
  nextScreenRoute: string;
}

export function Confirmation() {
  const navigation = useNavigation();
  
  const route = useRoute();
  const {title, message, nextScreenRoute } = route.params as Params;

  function handleConfirmRental(){
    navigation.dispatch(CommonActions.navigate({
      name: nextScreenRoute
    }))
   }
  
  const { width } = useWindowDimensions();

  return (
    <Container>
      <StatusBar 
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Content>
      <LogoSvg width={width} />

        <DoneSvg width={80} height={80} />
        <Title>{title}</Title>

        <Message>{message}</Message>
        
      </Content>
      <Footer>
        <ConfirmButton 
          title="OK" 
          onPress={handleConfirmRental}
        />
      </Footer>
    </Container>
  );
}
