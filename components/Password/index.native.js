
import React, {Component} from 'react';
import {TextInput, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
 
export class Password extends Component {
    constructor(props){
        super(props);
        this.state={
            text:""
        }
    }
    render() {
      return (
        <TextInput style = {styles.labelText}
        onChangeText={this.props.onChange} secureTextEntry={true} 
        value={this.props.value}  placeholderTextColor = "#9a73ef" /> 
      );
    }
  }


  Password.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func 
  };
  

  const styles = StyleSheet.create({ 
    labelText:{  
        alignSelf: 'stretch',
        height:40, 
        fontSize: 14,
        textAlign:'center',  
        paddingTop: 5,
        paddingBottom:5,
        borderWidth:1,
        borderColor: "black",
        marginTop:5,
        marginBottom:5
    }
  });