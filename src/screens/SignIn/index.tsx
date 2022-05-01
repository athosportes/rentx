import React, { useState } from "react";
import {
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from "react-native";

import * as Yup from "yup";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { PasswordInput } from "../../components/PasswordInput";

import { useNavigation, CommonActions } from "@react-navigation/native";

import theme from "../../styles/theme";

import { Container, Header, Title, SubTitle, Form, Footer } from "./styles";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();


  function handleNewAccount(){
    navigation.dispatch(CommonActions.navigate({
      name: 'SignUpFirstStep'
    }))
  }

  async function handleSingIn() {
    try {
      const schema = Yup.object().shape({
        password: Yup.string().required("Senha obrigatória"),

        email: Yup.string()
          .required("E-mail obrigatório")
          .email("Digite um e-mail válido"),

      });

      await schema.validate({ email, password });

      //Fazer login
      Alert.alert(email, password)
    } catch (error) {
      if(error instanceof Yup.ValidationError){
        Alert.alert('Atenção', error.message)
      } else {
        Alert.alert('Erro na autenticação', 
        'Ocorreu um erro ao realizar login, verifique suas credenciais.')
      }

    }
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="transparent"
            translucent
          />
          <Header>
            <Title>
              Estamos{`\n`}
              quase lá.
            </Title>
            <SubTitle>
              Faça seu login para começar{`\n`}
              uma experiência incrível.
            </SubTitle>
          </Header>

          <Form>
            <Input
              iconName="mail"
              placeholder="E-mail"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={setEmail}
              value={email}
            />

            <PasswordInput
              iconName="lock"
              placeholder="Senha"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={setPassword}
              value={password}
            />
          </Form>

          <Footer>
            <Button
              title="Login"
              onPress={handleSingIn}
              enabled={true}
              loading={false}
            />
          </Footer>

          <Button
            title="Criar conta gratuita"
            onPress={handleNewAccount}
            loading={false}
            light
            color={theme.colors.background_secondary}
          />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
