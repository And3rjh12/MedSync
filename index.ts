import 'core-js/stable';
import 'react-native-polyfill-globals/auto';
import { registerRootComponent } from 'expo';
import App from './App';

registerRootComponent(App);


(global as any).setImmediate = Object.assign(
    (callback: () => void) => setTimeout(callback, 0),
    { __promisify__: (callback: () => void) => Promise.resolve().then(callback) }
  );
  