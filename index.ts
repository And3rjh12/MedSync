// Agregar un polyfill para `setImmediate`
if (typeof global.setImmediate === 'undefined') {
    global.setImmediate = (callback: () => void) => setTimeout(callback, 0);
  }
  
  import 'core-js/stable';  // Asegura compatibilidad con JS moderno
  import 'regenerator-runtime/runtime';  // Manejo de async/await
  import 'timers';  // Soporte para `setImmediate`
  
  import { registerRootComponent } from 'expo';
  import App from './App';
  
  registerRootComponent(App);
  