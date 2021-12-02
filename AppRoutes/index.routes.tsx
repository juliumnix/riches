import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MainRoutes } from '../modules/Main/routes/index.routes';
import { AutenticationStack } from '../modules/Autentication/routes/index.routes';

export default function AppRoutes() {
  const [id, setId] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@riches:id_usuario');
      console.log(value);
      if (value !== null) {
        setId(value);
      }
    } catch (e) {
      // error reading value
    }
  };
  return id != null ? <MainRoutes /> : <AutenticationStack />;
}
