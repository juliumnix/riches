import Reactotron, { ReactotronReactNative } from 'reactotron-react-native';
import { ip } from './ip';

// eslint-disable-next-line no-undef
if (__DEV__) {
  const tron: ReactotronReactNative = Reactotron.configure({
    host: `${ip}`,
  })
    .useReactNative()

    .connect();

  tron.clear();
  console.tron = tron;
}
