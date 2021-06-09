import { registerRootComponent } from 'expo';
import TrocaDeSenha from './app/pages/TrocaDeSenha/TrocaDeSenha';

//import App from './App';
//import HeaderPrincipal from './app/components/HeaderPrincipal/HeaderPrincipal';
import Login from './app/pages/Login/Login';


// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(TrocaDeSenha);