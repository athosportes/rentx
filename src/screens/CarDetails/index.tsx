import React from "react";
import { useNavigation } from "@react-navigation/native";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { Acessory } from "../../components/Acessory/index";
import { Button } from "../../components/Button";

import SpeedSvg from "../../assets/speed.svg";
import AccelerationSvg from "../../assets/acceleration.svg";
import ForceSvg from "../../assets/force.svg";
import GasolineSvg from "../../assets/gasoline.svg";
import ExchangeSvg from "../../assets/exchange.svg";
import PeopleSvg from "../../assets/people.svg";

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

export function CarDetails({ data }: Props) {
  const navigation = useNavigation();

  function handleConfirmRental() {
    navigation.navigate("Scheduling");
  }

  return (
    <Container>
      <Header>
        <BackButton />
      </Header>
      <CarImages>
        <ImageSlider
          imagesUrl={[
            "https://lh3.googleusercontent.com/N3nmvy1dVG78mZsSbpGbS1H1EpcqP3_GIc7WiqAsNuynAhNTkMMhsoljTRbVcM5RaFQ7aMisERVAYECZnVeRaIEQxMzYY5afKcqfVYGxeyouqjqrDXjP1NhU48IYPeJYF7cs6bLHY3w2rQeo0D8LFfa2iNNOPSa0SBPjianmz7hB8uyKyAswgnBjju-75pjfUFUdQKqiT4tTIMgz4S0_KHK1S6vgrErD88UDEUX5SAQFM53KJv37Qe34cuZivwMi-fuSwqPcbL_71JrJ4ZU_BvPIT2xS2YRjb8Qh7fnYmpNx3yRwLswVw6mFF3JME3KvN0X3MR99OAKd2qleM7ql05-DEAx7hAmNp-THFlIVui8XYx-q_bnrgTAZCiQG8T43fWQo980mFLIgt5BrrqwUOE_EzD1KaK_OeA5rPu-UAgqyyYYKq0S13f8p5QY-UWMdkPdn5-kxJI5DD2Aa2rY712A1RTsPvHvZQF0E_ErhUXPnz4AU5Cz1Ey3X1Vs6GiItraeagvgTfZYlzU6fqWBHkAv1iwsV6WNOcO5ozYAFn4AOqe7WolMsV-JVLW7nXtMD3FJ_bVRiCKSmBl8SDHTrfKERmBjq69n--kObfI9j8ZWFL_xRQA7pVAICbtaafbQ--xu97qypMwQ3SoIJOvlDrAbwX9jSy_bgq2uOC-2XYpo6rbS6VXme6H7o6Wxvbe8luaOI-sHh7er_7LMUVFG0BRlKN80VzvuP7UU4ukxcblqpLAx_RuMy-MfNbl6D_k3Ie5cdBnsIt9Qz-DSHeggdZJawzfHOmvvKQdZ5=w2232-h1674-no?authuser=0",
          ]}
        />
      </CarImages>
      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Description>
          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>
        <Acessories>
          <Acessory name="380Km/h" icon={SpeedSvg} />
          <Acessory name="3.2s" icon={AccelerationSvg} />
          <Acessory name="800 HP" icon={ForceSvg} />
          <Acessory name="Gasolina" icon={GasolineSvg} />
          <Acessory name="Auto" icon={ExchangeSvg} />
          <Acessory name="2 pessoas" icon={PeopleSvg} />
        </Acessories>
        <About>
          Este é um automóvel desportivo, Surgiu do lendário touro de lide
          indultado na praça Real Maestranza de Sevilla. É um bellísimo carro
          para quem gosta de acelerar.
        </About>
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
