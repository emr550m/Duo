
import React, { Component } from 'react';
import { Area } from '../../components/Area';
import { Label } from '../../components/Label';
import { Button } from '../../components/Button';
import { Text } from '../../components/Text';
import { Password } from '../../components/Password';
import { connect } from 'react-redux';
import * as actionsLogin from '../state/actions/login';
import { backendCall } from '../api';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: ''
    }
  }
  render() {
    return (
      <Area><Label>Nice Full Hybrid App!</Label>
        <Label>Username:</Label>
        <Text value={this.props.username} onChange={(value) => {
          actionsLogin.setUsername(value);
        }} />
        <Label>Password:</Label>
        <Password value={this.props.password} onChange={(value) => {
          actionsLogin.setPassword(value);
        }} />
        <Label>Server Response: {this.state.response}</Label>
        <Button onClick={() => {
          // this.props.history.push('/welcome');
          backendCall({ username: this.props.username, password: this.props.password }, 'login').then((response) => {
            this.setState({ response: 'reply received:' + response.success });
            if(response.success){
              this.props.history.push("/welcome");
            }
          });
        }}>Hello</Button>
      </Area>
    );
  }
}

const mapStateToProps = (state) => {
  const { login } = state
  return { username: login.username, password: login.password }
};

export default connect(mapStateToProps)(Login);
