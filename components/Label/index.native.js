
import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
 
export class Label extends Component {
    render() {
      return (
        <Text style = {styles.labelText}>{this.props.children}</Text> 
      );
    }
  }
  

  const styles = StyleSheet.create({ 
    labelText:{
        backgroundColor:'red',
        color:'#000000',
        fontSize: 14,
        textAlign:'center',  
        paddingTop: 5,
        paddingBottom:5
    }
  });