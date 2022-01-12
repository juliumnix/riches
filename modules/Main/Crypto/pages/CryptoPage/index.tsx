import { useFocusEffect, useNavigation } from '@react-navigation/core';
import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import Loading from '../../../components/Loading';
import api from '../../../utils/api';
import CryptoTile from '../../components/CryptoTile';

import * as S from './styles';

type CryptoDataProps = {
  id: string;
  name: string;
  symbol: string;
  image: string;
  metrics: {
    market_data: {
      price_usd: number;
      percent_change_usd_last_24_hours: number;
    };
  };
};

const CryptoPage = () => {
  const [data, setData] = useState([] as CryptoDataProps[]);
  const [dolar, setDolar] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  useFocusEffect(
    useCallback(() => {
      if (navigation.isFocused()) {
        getCryptoData();
      }
    }, []),
  );

  // useEffect(() => {

  // }, []);

  async function getCryptoData() {
    try {
      setLoading(true);
      const response = await api.get('https://data.messari.io/api/v2/assets');

      const dolarToday = await api.get(
        'http://economia.awesomeapi.com.br/json/last/USD-BRL',
      );

      let bitcoin = response.data.data.find(
        (item: CryptoDataProps) => item.name == 'Bitcoin',
      );

      let ethereum = response.data.data.find(
        (item: CryptoDataProps) => item.name == 'Ethereum',
      );

      let cardano = response.data.data.find(
        (item: CryptoDataProps) => item.name == 'Cardano',
      );

      let xrp = response.data.data.find(
        (item: CryptoDataProps) => item.name == 'XRP',
      );

      let litecoin = response.data.data.find(
        (item: CryptoDataProps) => item.name == 'Litecoin',
      );

      let bnb = response.data.data.find(
        (item: CryptoDataProps) => item.name == 'BNB',
      );

      const teste = [];

      setDolar(dolarToday.data.USDBRL.bid);

      bitcoin = {
        ...bitcoin,
        image:
          'https://www.criptofacil.com/wp-content/uploads/2021/11/santander-declara-que-errou-em-nao-abracar-o-bitcoin-e-anuncia-que-vai-vender-etf-de-btc.jpg',
      };

      ethereum = {
        ...ethereum,
        image:
          'https://s2.glbimg.com/vZNONtZtKmLSXBgf1X435oVBk7o=/0x0:4365x2964/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/L/G/7oO26ORFObl5kob0831Q/2021-08-06t135935z-700292874-rc2mzo95ps27-rtrmadp-3-fintech-crypto.jpg',
      };

      cardano = {
        ...cardano,
        image:
          'https://www.infomoney.com.br/wp-content/uploads/2021/09/Cardano.jpg?fit=1280%2C851&quality=50&strip=all',
      };

      xrp = {
        ...xrp,
        image:
          'https://www.infomoney.com.br/wp-content/uploads/2019/06/ripple.jpg?fit=900%2C600&quality=50&strip=all',
      };

      litecoin = {
        ...litecoin,
        image:
          'https://www.istoedinheiro.com.br/wp-content/uploads/sites/17/2020/12/litecoin-pexels-e1608483828918.jpeg',
      };

      bnb = {
        ...bnb,
        image:
          'https://cdn.coingape.com/wp-content/uploads/2021/04/08053225/Binance-Coin-BNB-vs-Ethereum-ETH.png',
      };

      teste.push(bitcoin);
      teste.push(ethereum);
      teste.push(cardano);
      teste.push(xrp);
      // teste.push(litecoin);
      teste.push(bnb);

      setData(teste);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }
  return (
    <S.Container>
      {loading ? (
        <Loading visible={loading} />
      ) : (
        <>
          <S.Title>Criptomoedas</S.Title>
          <S.SubTitle>Lista de algumas das principais criptomoedas</S.SubTitle>
          <S.WrapperFlatlist>
            <FlatList
              keyExtractor={item => item.name}
              data={data}
              style={{ width: '100%' }}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <CryptoTile
                  title={item.name}
                  slug={item.symbol}
                  images={item.image}
                  valueTotal={(
                    item.metrics.market_data.price_usd * dolar
                  ).toFixed(2)}
                  growth={(
                    (item.metrics.market_data.price_usd *
                      dolar *
                      item.metrics.market_data
                        .percent_change_usd_last_24_hours) /
                    100
                  ).toFixed(2)}
                />

                // <TouchableOpacity>
                //   <S.ImageItem
                //     source={{ uri: item.image }}
                //     imageStyle={{ borderRadius: 20, opacity: 0.6 }}
                //   >
                //     <S.ImageDetails>
                //       <S.ImageTitle> {item.name}</S.ImageTitle>
                //     </S.ImageDetails>
                //   </S.ImageItem>
                // </TouchableOpacity>
              )}
            />
          </S.WrapperFlatlist>
        </>
      )}
    </S.Container>
  );
};

export default CryptoPage;
