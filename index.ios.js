import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import Index from './source/index';

class FrontShake extends Component {
  render() {
    return <Index />;
  }
}


AppRegistry.registerComponent('FrontShake', () => FrontShake);