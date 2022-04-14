import React from "react";
import { useNavigation } from "@react-navigation/native";
import { RFValue } from "react-native-responsive-fontsize";

import Logo from "../../assets/logo.svg";
import { Car } from "../../components/Car";

import { 
  Container, 
  Header, 
  TotalCars, 
  HeaderContent,
  CarList 
} from "./styles";

export function Home() {
  const navigation = useNavigation();

  const carDataOne = {
    brand: 'Audi',
    name: 'RS 5 Coupé',
    rent: {
        period: 'Ao dia',
        price: 340,
    },
    tumbnail: 'https://w7.pngwing.com/pngs/753/280/png-transparent-peugeot-308-car-peugeot-3008-peugeot-208-allure-premium-peugeot-compact-car-sedan-car.png'
  }

  const carDataTwo = {
    brand: 'Porsche',
    name: 'Panamera',
    rent: {
        period: 'Ao dia',
        price: 340,
    },
    tumbnail: 'https://e7.pngegg.com/pngimages/911/192/png-clipart-porsche-macan-car-sport-utility-vehicle-snow-tire-porsche-compact-car-car.png'
  }

  function handleCarDetails(){
    navigation.navigate('CarDetails');
   }


  return (
    <Container>
      <Header>
        <HeaderContent>
          <Logo 
            width={RFValue(108)}
            height={RFValue(12)} 
          />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>
      <CarList 
        data={[1,2,3,4,5,6,7,8,9]}
        keyExtractor={item => String(item)}
        renderItem={({ item }) => 
          <Car data={carDataOne} onPress={handleCarDetails}/>}
      />

      
    </Container>
  );
}
