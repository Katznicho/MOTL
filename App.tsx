
import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/redux/store';
import FlashMessage from 'react-native-flash-message';
import { QueryClient, QueryClientProvider } from 'react-query'
import NetInfo from "@react-native-community/netinfo";
import { LogBox, View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { theme } from './src/theme/theme';
import { generalstyles } from './src/generalstyles/generalstyles';
import BaseScreen from './src/screens/BaseScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import WelcomeScreen from './src/screens/WeclomSecreens';
import LandingScreen from './src/screens/SplashScreens/SplahScreen';
import SplashScreen from 'react-native-splash-screen'
import EnableLocationScreen from './src/screens/WeclomSecreens/EnableLocationScreen';
import FollowScreen from './src/screens/WeclomSecreens/FollowScreen';


export default function App() {
  const [connected, setIsConnected] = useState<boolean | null>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const checkInternet = () => {

    NetInfo.addEventListener(state => {
      return setIsConnected(state?.isConnected);
    });
  };

  useEffect(() => { }, [connected]);

  useEffect(() => {
    SplashScreen.hide()
    checkInternet();
    LogBox.ignoreAllLogs();

  }, []);



  return connected ? (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={new QueryClient()}>
            <LandingScreen />
          </QueryClientProvider>
          <FlashMessage position="top" animated />
        </PersistGate>
      </Provider>

    </GestureHandlerRootView>


  ) : (<View
    style={[
      generalstyles.container,
      { backgroundColor: theme.colors.primary, marginHorizontal: 10 },
      generalstyles.centerContent,
    ]}>
    <Text>Please Enable Internet Access and Restart the App</Text>
    <Button

      mode="contained"


      buttonColor={theme.colors.buttonColor}
      textColor={theme.colors.primary}
      onPress={checkInternet}
    >
      Retry
    </Button>
  </View>
  )



}
