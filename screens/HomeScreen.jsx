import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, ActivityIndicator, Button } from 'react-native';
import MapView from 'react-native-maps';
// import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../actions';

class HomeScreen extends Component {

  state = {
    mapLoaded: false,
    region: {
      //control the center of the map
      longitude: -122,
      latitude: 37,
      //control the zoom level
      longitudeDelta: 0.04,
      latitudeDelta: 0.09
    }
  }

  componentDidMount() {
    this.setState({ mapLoaded: true });
  }

  //a callback, to change the current region after user moved around
  onRegionChangeComplete = (region) => {
    this.setState({ region })
  }

  onButtonPress = () => {
    this.props.fetchJobs(this.state.region, () => {
      this.props.navigation.navigate('Deck')
    });
  }

  render() {
    if (!this.state.mapLoaded) {
      return (
        <ActivityIndicator size="large" />
      );
    }
    return (
      <View style={styles.container}>
        <MapView
          region={this.state.region}
          onRegionChangeComplete={this.onRegionChangeComplete}
          style={styles.map}
        />
        <View style={styles.buttonContainer}>
          <Button 
            title="Search this area"
            onPress={this.onButtonPress}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0

  }
})

export default connect(null, actions)(HomeScreen);