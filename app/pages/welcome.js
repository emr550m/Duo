
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionsLogin from '../state/actions/login';

import { Area } from '../../components/Area';
import { Label } from '../../components/Label';
import { Button } from '../../components/Button';




export class Welcome extends Component {

  render() {
    return (
      <Area><Label>Welcome Mr Emrah!</Label>
        <Label>This is a loginned page</Label>
        <Label>You can always sign out!</Label>
        <Label>Your username: {this.props.username}! Let's SignOut!</Label>
        <Button onClick={() => {
          actionsLogin.setUsername("");
          actionsLogin.setPassword("");
          this.props.history.push('/login');
        }}>Sign Out!</Button>
      </Area>
    );
  }
}

const mapStateToProps = (state) => {
  const { test, login } = state
  return { test: test.test, username: login.username }
};

export default connect(mapStateToProps)(Welcome);