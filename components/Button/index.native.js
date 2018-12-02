
import React, { Component } from 'react';
import { TouchableOpacity ,Text, StyleSheet } from 'react-native';

export class Button extends Component {
  render() {
    return (
      <TouchableOpacity
          style={styles.loginScreenButton}
          onPress={this.props.onClick} 
          underlayColor='#fff'>
          <Text style={styles.submitText}>{this.props.children}</Text>
      </TouchableOpacity> 
    );
  }
}


const styles = StyleSheet.create({
  loginScreenButton:{
    marginRight:20,
    marginLeft:20,
    marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#FFA500',
    borderRadius:3,
    borderWidth: 1,
    borderColor: '#fff'
  },
  submitText:{
      color:'#fff',
      fontSize: 18,
      textAlign:'center',
      paddingLeft : 10,
      paddingRight : 10
  }
});