import React from 'react';
import {
  Content,
  Form,
  Input,
  Item,
  Label,
  Title,
  Button,
  Text,
  View,
  Container,
  Icon,
  H1
} from 'native-base';
import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';

export const SignInLayout = ({ navigateToRegister }) => {
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
          style={{
            flex: 1,
          }}
        >
          <View
            style={{
              height: Dimensions.get('window').height - 24,
            }}
          >
            <Form style={{ padding: 12 }}>
              <H1
                style={{
                  color: '#121212',
                  textAlign: 'center',
                }}
              >
                Sign in
              </H1>
              <Item floatingLabel error={false} success={false} bordered>
                <Label>Email</Label>
                <Input
                  style={{ marginVertical: 6 }}
                  autoCompleteType="email"
                  keyboardType="email-address"
                  textContentType="emailAddress"
                />
              </Item>
              <Item floatingLabel error={false}>
                <Label>Contraseña</Label>
                <Input
                  autoCompleteType="off"
                  autoCorrect={false}
                  textContentType="password"
                  placeholder="Contraseña"
                  style={{ marginVertical: 6 }}
                  secureTextEntry
                />
                {true ? (
                  <Icon name="eye-outline" />
                ) : (
                  <Icon name="eye-off-outline" />
                )}
              </Item>
            </Form>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                padding: 12,
              }}
            >
              <Button full rounded style={{ marginBottom: 8 }}>
                <Text>Iniciar Sesión</Text>
              </Button>
              <Button full rounded bordered style={{ marginBottom: 8 }} onPress={navigateToRegister}>
                <Text>¿No tenes cuenta? ¡Registrate!</Text>
              </Button>
              <Button full transparent rounded>
                <Text>¿Olvidaste la contraseña?</Text>
              </Button>
            </View>
          </View>
        </Content>
      </KeyboardAvoidingView>
    </Container>
  );
};
