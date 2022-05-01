import React, { useState } from "react";
import { useNavigation, CommonActions, useRoute } from "@react-navigation/native";
import { BackButton } from "../../../components/BackButton";
import { useTheme } from 'styled-components';

import {
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Alert
} from "react-native";

import { Bullet } from "../../../components/Bullet";
import { PasswordInput } from '../../../components/PasswordInput/index';
import { Button } from "../../../components/Button";

import {
  Container,
  Header,
  Steps,
  Title,
  SubTitle,
  Form,
  FormTitle,
} from "./styles";

interface Params {
  user: {
    name: string;
    email: string;
    driverLicense: string;
  }
}

export function SignUpSecondStep() {
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');


  const navigation = useNavigation();
  const route = useRoute();
  const theme = useTheme();
  
  const { user } = route.params as Params;

  function handleBack() {
    navigation.goBack();
  }

  function handleRegister(){
    if(!password || !passwordConfirm) {
      return Alert.alert('Informe a senha e a confirmação')
    } 

    if(password != passwordConfirm) {
      return Alert.alert('As senhas devem ser iguais')
    } 

   navigation.dispatch(CommonActions.navigate({
     name: 'Confirmation',
     params: {
       title: 'Conta criada',
       message: `Agora é só fazer login\ne aproveitar`,
       nextScreenRoute: 'SignIn'
     }
   }))
  }



  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <BackButton onPress={handleBack} />
            <Steps>
              <Bullet />
              <Bullet active/>
            </Steps>
          </Header>

          <Title>Crie sua{"\n"}conta</Title>
          <SubTitle>
            Faça seu cadastro de{"\n"}
            forma rápida e fácil
          </SubTitle>

          <Form>
            <FormTitle>2. Senha</FormTitle>

            <PasswordInput 
              iconName="lock" 
              placeholder="Senha" 
              onChangeText={setPassword}
              value={password}
            />

            <PasswordInput 
              iconName="lock" 
              placeholder="Repitir senha"
              onChangeText={setPasswordConfirm}
              value={passwordConfirm}
            />
            
          </Form>

          <Button 
            title="Cadastrar" 
            color={theme.colors.success}
            onPress={handleRegister} />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
