import Reactotron, { ReactotronReactNative } from 'reactotron-react-native';

// eslint-disable-next-line no-undef
if (__DEV__) {
  const tron: ReactotronReactNative = Reactotron.configure({
    host: '192.168.0.104',
  })
    .useReactNative()

    .connect();

  tron.clear();
  console.tron = tron;
}
