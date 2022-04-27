import React from 'react';

import LottieView from 'lottie-react-native';
import load from '../../assets/load.json'

import {
  Container
} from './styles';

export function LoadAnimation(){
  return (
    <Container>
        <LottieView
          source={load}
          style={{ height: 200 }}
          resizeMode="contain"
          autoPlay
          loop
        />

    </Container>
  );
}