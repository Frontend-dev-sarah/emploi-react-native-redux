import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Slides from '../components/Slides';
import AsyncStorage from '@react-native-async-storage/async-storage';



const slideData = [
  { text: 'Welcome to use Job Seeking App', bgcolor: 'blue', color: 'white'},
  { text: 'You can swipe left or right to dislike or like a job', bgcolor: 'white', color: 'blue'},
  { text: 'Good luck with your job searching journey !', bgcolor: 'red', color: 'white'}
]



export default class WelcomeScreen extends Component {
  
  state = {
    token: null
  }
  
  async componentDidMount () {
  let token = await AsyncStorage.getItem('token');
    if (token) {
      this.props.navigation.navigation('Main'),
      this.setState({token})
      alert(token)
    }  else {
      this.setState({ token: false })
    }
  
  }

  onSlideEndPress = () => {
    this.props.navigation.navigate('Signin')
  }

  render() {
    if (_.isNull(this.state.token)) {
      return <View style = {{marginTop: 100}}>
        <Text>Loaading</Text>
        </View>
    }
    return (
      <Slides data = {slideData} onSlideEndPress = {this.onSlideEndPress}/>
    );
  }
}
