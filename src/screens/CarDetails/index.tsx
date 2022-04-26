import React from "react";
import { CommonActions, useNavigation, useRoute } from "@react-navigation/native";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { Acessory } from "../../components/Acessory/index";
import { Button } from "../../components/Button";

import { getAccessoryIcon } from './../../utils/getAccessoryIcon'

import { CarDTO } from '../../dtos/CarDTO';

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Acessories,
  Footer,
} from "./styles";

interface CarDetailsProps {
  description: {
    brand: string;
    name: string;
  };
  rent: {
    period: string;
    price: number;
  };
}

interface Props {
  data: CarDetailsProps;
}

interface Params {
  car: CarDTO;
}

export function CarDetails({ data }: Props) {
  const navigation = useNavigation();
  const route = useRoute();
  const { car } = route.params as Params;
  

  function handleConfirmRental() {
    navigation.dispatch(CommonActions.navigate({
      name: 'Scheduling'
    }))
  }

  function handleBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <Header>
        <BackButton 
          onPress={handleBack}
        />
      </Header>
      <CarImages>
        <ImageSlider
          imagesUrl={car.photos}
        />
      </CarImages>
      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>
          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
          </Rent>
        </Details>
        <Acessories>
          { 
            car.accessories.map(acessory => (
              <Acessory 
                key={acessory.type}
                name={acessory.name}
                icon={getAccessoryIcon(acessory.type)} 
              />
            ))
            }
        </Acessories>
        <About>{car.about}</About>
      </Content>
      <Footer>
        <Button
          title="Escolher período do aluguel"
          onPress={handleConfirmRental}
        />
      </Footer>
    </Container>
  );
}
