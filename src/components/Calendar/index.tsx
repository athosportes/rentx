import React from 'react';
import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components/native';

import { generateInterval } from './generateInterval';
import {
    Calendar as CustomCalendar,
    LocaleConfig,
    CalendarProps
} from 'react-native-calendars'
import { MarkingProps } from 'react-native-calendars/src/calendar/day/marking';

LocaleConfig.locales['pt-br'] = {
    monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthNameShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Dez'],
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    dayNamesShort: ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'],
    today: 'Hoje'
}
LocaleConfig.defaultLocale = 'pt-br'

 interface DayProps {
  dateString: string;
  day: number;
  month: number;
  year: number;
  timestamp: number;
}
interface MarkedDateProps  {
  [date: string]: {
    color: string;
    textColor: string; 
    disabled?: boolean;
    disableTouchEvent?: boolean
  }
}
 interface PropsCalendar extends CalendarProps{
   markedDates: MarkedDateProps;
 }


function Calendar({ 
  markedDates, 
  onDayPress
}: PropsCalendar){
  const theme = useTheme();

  return (
    <CustomCalendar 
      renderArrow={( direction ) => 
          <Feather 
            size={24}
            color={theme.colors.text}
            name={direction === 'left' ? "chevron-left" : "chevron-right"}
          />
      }

      headerStyle={{
          backgroundColor: theme.colors.background_secondary,
          borderBottomWidth: 0.5,
          borderBottomColor: theme.colors.text_detail,
          marginBottom: 10,
      }}

      theme={{
          textDayFontFamily: theme.fonts.primary_400,
          textDayHeaderFontFamily: theme.fonts.primary_500,
          textDayFontSize: 15,
          textMonthFontSize: 20,
          textMonthFontFamily: theme.fonts.secondary_600,
          monthTextColor: theme.colors.title,
          arrowStyle: {
           marginHorizontal: -15
          }
      }}
      
      firstDay={1}
      minDate={String(new Date())}
      markingType="period"
      markedDates={markedDates}
      onDayPress={onDayPress}
    />
  );
}

export {
  Calendar,
  generateInterval,
  DayProps,
  PropsCalendar
}