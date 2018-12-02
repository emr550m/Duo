
import React, {Component} from 'react';
import {View} from 'react-native';
 
export class Area extends Component {
    render() {
      return (
        <View>{this.props.children}</View>
      );
    }
  }
  