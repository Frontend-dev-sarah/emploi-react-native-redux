import React, { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';


class AuthScreen extends Component {
  componentDidMount() {
    this.props.facebookLogin();//call action creator
    // AsyncStorage.removeItem('fb_token')
    this.onAuthComplete(this.props);
  }
  componentDidUpdate() {
    this.onAuthComplete()
  }

  onAuthComplete() {
    if (this.props.token) {
      this.props.navigation.navigate ('Main')
    }
    this.props.navigation.navigate ('Main')
  }

  render() {
    return (
      <View/>
    );
  }
}
const mapStateToProps = (state) => {
  return { token: state.auth.token}
}

export default connect(mapStateToProps, actions)(AuthScreen);