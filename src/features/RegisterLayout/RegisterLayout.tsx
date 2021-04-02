import React from 'react';
import {
  Content,
  Form,
  Input,
  Item,
  Label,
  Button,
  Text,
  View,
  Container,
  Icon,
  H1,
} from 'native-base';
import { Dimensions, KeyboardAvoidingView, ScrollView } from 'react-native';
export const RegisterLayout = () => {
  /* 
    {
      displayName
      email
      // emailVerified
      phoneNumber
      photoURL
      // uid
    } 
  */

  return (
    <Container>
      <KeyboardAvoidingView
        behavior="height"
        enabled
        style={{
          flex: 1,
        }}
      >
        <Content
          padder
          style={{
            flex: 1,
          }}
        >
          <Form>
            <H1
              style={{
                color: '#121212',
                textAlign: 'center',
              }}
            >
              Sign Up
            </H1>
            <Item floatingLabel error={false} success={false} bordered>
              <Label>Nombre</Label>
              <Input
                style={{ marginVertical: 4 }}
                autoCompleteType="name"
                keyboardType="name-phone-pad"
                textContentType="name"
              />
            </Item>
            <Item floatingLabel error={false} success={false} bordered>
              <Label>Email</Label>
              <Input
                style={{ marginVertical: 4 }}
                autoCompleteType="email"
                keyboardType="email-address"
                textContentType="emailAddress"
              />
            </Item>
            <Item floatingLabel error={false} success={false} bordered>
              <Label>Celular</Label>
              <Input
                style={{ marginVertical: 4 }}
                autoCompleteType="cc-number"
                keyboardType="phone-pad"
                textContentType="telephoneNumber"
              />
            </Item>
            <Item floatingLabel error={false}>
              <Label>Contraseña</Label>
              <Input
                autoCompleteType="off"
                autoCorrect={false}
                textContentType="password"
                placeholder="Contraseña"
                style={{ marginVertical: 4 }}
                secureTextEntry
              />
              {true ? (
                <Icon name="eye-outline" />
              ) : (
                <Icon name="eye-off-outline" />
              )}
            </Item>
            <Item floatingLabel error={false}>
              <Label>Confirmar contraseña</Label>
              <Input
                autoCompleteType="off"
                autoCorrect={false}
                textContentType="password"
                placeholder="Contraseña"
                style={{ marginVertical: 4 }}
                secureTextEntry
              />
              {true ? (
                <Icon name="eye-outline" />
              ) : (
                <Icon name="eye-off-outline" />
              )}
            </Item>
          </Form>
          <Button full rounded style={{ marginTop: 32 }}>
            <Text>Registrate</Text>
          </Button>
          <Button full transparent rounded>
            <Text>¿Olvidaste la contraseña?</Text>
          </Button>
        </Content>
      </KeyboardAvoidingView>
    </Container>
  );
};
