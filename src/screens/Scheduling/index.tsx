import React, { useState } from "react";
import { useTheme } from 'styled-components/native';
import { StatusBar } from 'react-native';
import { useNavigation, CommonActions } from "@react-navigation/native";


import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";
import { Calendar, DayProps, generateInterval, PropsCalendar } from "../../components/Calendar";
import { CalendarProps } from "react-native-calendars";


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
  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps);
  const [markedDates, setMarkedDates] = useState<CalendarProps>({} as CalendarProps);

  const theme = useTheme();
  const navigation = useNavigation();

  function handleConfirmRental(){
    navigation.dispatch(CommonActions.navigate({
      name: 'SchedulingDetails'
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
        <Calendar 
          markedDates={markedDates}
          onDayPress={handleChangeDate}
        />
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
