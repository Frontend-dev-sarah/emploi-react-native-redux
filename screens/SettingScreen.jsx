import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import {clearLikedJobs} from '../actions'

class SettingScreen extends Component {

  render() {
    return (
      <View> 
        <Button
          title = "Reset Liked Jobs"
          onPress={()=> this.props.clearLikedJobs()}
        />
      </View>
    );
  }
}

export default connect(null, {clearLikedJobs})(SettingScreen);