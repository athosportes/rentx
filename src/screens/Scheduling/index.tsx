import React, { useState } from "react";
import { useTheme } from 'styled-components/native';
import { StatusBar } from 'react-native';
import { useNavigation, useRoute, CommonActions } from "@react-navigation/native";


import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";
import { Calendar, DayProps, generateInterval } from "../../components/Calendar";
import { CalendarProps } from "react-native-calendars";
import { getPlatformDate } from '../../utils/getPlatformDate';
import { format } from "date-fns/esm";

import { CarDTO } from "../../dtos/CarDTO";

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

interface RentalPeriod {
  startFormatted: string;
  endFormatted: string;
}

interface Params {
  car: CarDTO;
}


export function Scheduling() {
  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps);
  const [markedDates, setMarkedDates] = useState<CalendarProps>({} as CalendarProps);
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod)

  const route = useRoute();
  const { car } = route.params as Params;

  const theme = useTheme();
  const navigation = useNavigation();

  function handleConfirmRental(){
    navigation.dispatch(CommonActions.navigate({
      name: 'SchedulingDetails',
      params: {
        car, 
        dates: Object.keys(markedDates)
      } 
    }))

   }

   function handleBack() {
    navigation.goBack();
  }

  function handleChangeDate(date: DayProps){
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if(start.timestamp > end.timestamp){
      start = end;
      end = start;
    }

    setLastSelectedDate(end);
    const interval = generateInterval(start, end);
    setMarkedDates(interval);
    
    const firstDate = Object.keys(interval)[0];
    const endDate = Object.keys(interval)[Object.keys(interval).length -1];

    setRentalPeriod({
      startFormatted: format(getPlatformDate(new Date(firstDate)), 'dd/MM/yyyy'),
      endFormatted: format(getPlatformDate(new Date(endDate)), 'dd/MM/yyyy')
    })

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
          onPress={() => {handleBack()}} 
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
                <DateValue selected={!!rentalPeriod.startFormatted}>  
                  {rentalPeriod.startFormatted}
                </DateValue>
            </DataInfo>
              
              <ArrowSvg />
            
            <DataInfo>
                <DateTitle>ATÉ</DateTitle>
                <DateValue selected={!!rentalPeriod.endFormatted}>
                {rentalPeriod.endFormatted}
                </DateValue>
            </DataInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar 
          markedDates={markedDates}
          onDayPress={handleChangeDate}
        />
      </Content>

        <Footer>
          <Button 
            title="Confirmar"
            onPress={handleConfirmRental}
            enabled={!!rentalPeriod.endFormatted}
          />
        </Footer>

    </Container>
  );
}
