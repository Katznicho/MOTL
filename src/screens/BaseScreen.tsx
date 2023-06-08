import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider, Text } from 'react-native-paper';
import { theme } from '../theme/theme';
import { RootState } from '../redux/store';
import BaseStack from './HomeScreens/BaseStack';
import { StatusBar, View } from 'react-native';

export default function BaseScreen() {
  
  const { isLoggedIn,  guestUser } = useSelector((state: RootState) => state.user);

  useEffect(()=>{},[guestUser, isLoggedIn])
  
  return (
    <PaperProvider theme={theme}>
       <StatusBar backgroundColor={theme.colors.primary} barStyle="light-content" />
      <NavigationContainer>
            <BaseStack/>
      </NavigationContainer>
    </PaperProvider>
  );


}
