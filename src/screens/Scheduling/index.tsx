import React from "react";
import { useTheme } from 'styled-components/native';
import { StatusBar } from 'react-native';
import { useNavigation } from "@react-navigation/native";

import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";
import { Calendar } from "../../components/Calendar";

import ArrowSvg from '../../assets/arrow.svg'

import { 
    Container, 
    Header,
    Title,
    RentalPeriod,
    DataInfo,
    DateTitle,
    DateValue,
    Content,
    Footer
} from "./styles";


export function Scheduling() {
  const theme = useTheme();
  const navigation = useNavigation();

  function handleConfirmRental(){
    navigation.navigate('SchedulingDetails');
   }
  

  return (
    <Container>
      <Header>
        <StatusBar 
          barStyle={"light-content"}
          translucent
          backgroundColor="transparent"
        />
        <BackButton 
          onPress={() => {}} 
          color={theme.colors.shape}
          />
        <Title>
            Escolha uma {`\n`}
            data de início e{`\n`}
            fim de aluguel 
        </Title>
        <RentalPeriod>
            <DataInfo>
                <DateTitle>DE</DateTitle>
                <DateValue selected={false}>
                  01/04/2022
                </DateValue>
            </DataInfo>
              
              <ArrowSvg />
            
            <DataInfo>
                <DateTitle>ATÉ</DateTitle>
                <DateValue selected={false}>
                  01/04/2022
                </DateValue>
            </DataInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar />
      </Content>

        <Footer>
          <Button 
            title="Confirmar"
            onPress={handleConfirmRental}
          />
        </Footer>

    </Container>
  );
}
