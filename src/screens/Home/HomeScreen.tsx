import React from 'react';
import { Label } from 'native-base';
export default MainLayout;
import { MainLayout } from '../../features';

export const HomeScreen = () => {
  return (
    <MainLayout>
      <Label>Home</Label>
    </MainLayout>
  );
};
