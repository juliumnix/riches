import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MainRoutes } from '../modules/Main/routes/index.routes';
import { AutenticationStack } from '../modules/Autentication/routes/index.routes';
import { View, Image } from 'react-native';
import { RouteTestStack } from '../modules/Main/routes/index.routes.teste';

let ID: string | null = null;
export default function AppRoutes() {
  const [id, setId] = useState(null as string | null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const value = await AsyncStorage.getItem('@riches:id_usuario');

      if (value != null) {
        setId(value);
        ID = value;
      }
    } catch (e) {
      // error reading value
    } finally {
      setLoading(false);
    }
  }
  if (loading) {
    return (
      <View style={{ flex: 1 }}>
        {/* <Image
          style={{ height: '100%', width: '100%' }}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8zEQ0vNckHp23eQQA5aGLU9Q5ak7NBtZBt0WLifN-fYcEkLPXi36MwKgY2sS_H4oYTf4&usqp=CAU',
          }}
        /> */}
      </View>
    );
  }
  return ID != null ? <RouteTestStack /> : <AutenticationStack />;
}
