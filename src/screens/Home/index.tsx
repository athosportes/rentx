import React, { useEffect, useState } from "react";
import { useNavigation, CommonActions } from "@react-navigation/native";
import { RFValue } from "react-native-responsive-fontsize";
import Logo from "../../assets/logo.svg";
import api from "../../services/api";
import { CarDTO } from "../../dtos/CarDTO";
import { Car } from "../../components/Car";
import { Load } from "../../components/Load";
import { Ionicons } from '@expo/vector-icons'; 
import { useTheme } from "styled-components";

import { 
  Container, 
  Header, 
  TotalCars, 
  HeaderContent, 
  CarList,
  MyCarsButton 
} from "./styles";

export function Home() {
  const theme = useTheme();
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  function handleCarDetails(car: CarDTO) {
    navigation.dispatch(
      CommonActions.navigate({
        name: "CarDetails",
        params: { car }
      })
    );
  }

  function handleMyCars() {
    navigation.dispatch(
      CommonActions.navigate({
        name: "MyCars",
      })
    );
  }

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get("/cars");
        setCars(response.data);
        console.log(cars);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  }, []);

  return (
    <Container>
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de {cars.length} carros</TotalCars>
        </HeaderContent>
      </Header>

      { loading ? <Load /> : 
      <CarList
        data={cars}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Car data={item} onPress={() => handleCarDetails(item)} />
        )}
      />}

      <MyCarsButton onPress={() => handleMyCars()}>
        <Ionicons 
          name='ios-car-sport' 
          size={32}  
          color={theme.colors.background_primary}
        />
      </MyCarsButton>
    </Container>
  );
}
