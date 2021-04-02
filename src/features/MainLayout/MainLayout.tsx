import React from 'react';
import {
  Body,
  Container,
  Content,
  Header,
  Left,
  Right,
  Title,
} from 'native-base';

export const MainLayout = ({ children, title = 'AwesomeApp' }: any) => {
  return (
    <Container>
      <Header>
        <Left />
        <Body>
          <Title>{title}</Title>
        </Body>
        <Right />
      </Header>
      <Content>{children}</Content>
    </Container>
  );
};
