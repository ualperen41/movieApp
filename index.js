import { registerRootComponent } from 'expo';
import * as ReactNative from 'react-native';

// Suppress ViewPropTypes warnings
if (!ReactNative.ViewPropTypes) {
  Object.defineProperty(ReactNative, 'ViewPropTypes', {
    get() {
      return require('deprecated-react-native-prop-types').ViewPropTypes;
    },
  });
}

if (!ReactNative.ColorPropType) {
  Object.defineProperty(ReactNative, 'ColorPropType', {
    get() {
      return require('deprecated-react-native-prop-types').ColorPropType;
    },
  });
}

if (!ReactNative.EdgeInsetsPropType) {
  Object.defineProperty(ReactNative, 'EdgeInsetsPropType', {
    get() {
      return require('deprecated-react-native-prop-types').EdgeInsetsPropType;
    },
  });
}

if (!ReactNative.PointPropType) {
  Object.defineProperty(ReactNative, 'PointPropType', {
    get() {
      return require('deprecated-react-native-prop-types').PointPropType;
    },
  });
}

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
