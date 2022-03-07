import React, { Component } from 'react';
import { ScrollView, View, Text, Button, Linking, Platform } from 'react-native';
import { connect } from 'react-redux';
import JobItem from '../components/JobItem';

class ViewScreen extends Component {

  renderLikedJobs() {
  
    return this.props.likedJobs.map((job) => {

      const initialRegion = {
        longitude: job.longitude,
        latitude: job.latitude,
        latitudeDelta: 0.045,
        longitudeDelta: 0.02
      }

      return (
        <JobItem
          job={job}
          pressButton={() => { Linking.openURL(job.url) }}
          initialRegion = {initialRegion}
        />

      );
    })
  }

  render() {
    return (
      <ScrollView>
        {this.renderLikedJobs()}
        <Text>
          ViewsScreen
        </Text>
        <Button title='Go to Setting' onPress={() => { this.props.navigation.navigate('Setting') }} />
      </ScrollView>
    );
  }
}

const styles = {
  detailWrapper: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  italic: {
    fontStyle: 'italic'
  }
}

const mapStateToProps = (state) => {
  return { likedJobs: state.likedJobs }
}
export default connect(mapStateToProps)(ViewScreen)