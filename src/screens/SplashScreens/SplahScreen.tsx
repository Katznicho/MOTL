
// @ts-nocheck
import { ImageBackground, Image, Animated } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ProgressBar } from 'react-native-paper';
import BaseStack from '../HomeScreens/BaseStack';
import BaseScreen from '../BaseScreen';




const SplahScreen = () => {
  const [progress, setProgress] = useState<any>(0.1);
  const opacity = new Animated.Value(0);
  const [done, setDone] = useState<boolean>(false)

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();

    // Simulating initialization progress
    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 0.5;
        if (newProgress >= 1) {
          clearInterval(progressInterval);
          // Navigate to your app's main screen or next component
          setDone(true);
        }
        return newProgress;
      });
    }, 500);

    return () => clearInterval(progressInterval);
  }, []);

  return !done ? (
    <ImageBackground
      source={require('../../assets/test.png')}
      className=" h-full w-full justify-center items-center relative ">
      <Image source={require('../../assets/logo2.png')} className='w-[120px] h-[120px]' />
      <ProgressBar progress={progress}
        style={{

          width: 120,
          borderRadius: 10,
          backgroundColor: 'white'


        }}
        color='#15030c' />

      <Image
        source={require('../../assets/bottomlogo.png')}
        className="absolute bottom-0"
      />
    </ImageBackground>
  ) : <BaseScreen />
};

export default SplahScreen;
