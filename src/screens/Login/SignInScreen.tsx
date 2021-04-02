import React from 'react';
import { SignInLayout } from '../../features';

export const SignInScreen = ({ navigation }: any) => {
  const goToRegister = () => {
    // console.log('onPress', navigation.dangerouslyGetState());
    navigation.navigate('SignUp');
  };

  return <SignInLayout navigateToRegister={goToRegister} />;
};
