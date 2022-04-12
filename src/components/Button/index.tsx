import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
  Container,
  Title
} from './styles';

interface Props extends TouchableOpacityProps{
    title: string;
    color?: string;
}

export function Button({ title, color, ...rest }: Props){
  return (
    <Container color={color} {...rest}>
        <Title>{title}</Title>
    </Container>
  );
}