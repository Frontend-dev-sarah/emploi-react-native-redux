import React, { Component } from 'react';
import { View, StyleSheet, Button, Text, Platform } from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';
import Swipe from '../components/Swipe';
import * as actions from '../actions';
import JobItem from '../components/JobItem';


class DeckScreen extends Component {

  renderCard(job) {
    const initialRegion = {
      longitude: job.longitude,
      latitude: job.latitude,
      latitudeDelta: 0.045,
      longitudeDelta: 0.02
    }

    return (
      <JobItem
        job={job}
        initialRegion={initialRegion}
        snippet
      />
    );
  }

  renderNoMoreCards = () => {
    return (
      <Card>
        <Card.Title>No More Jobs</Card.Title>
        <Button title = "Back to Map"
        onPress={() => this.props.navigation.navigate('Home')}
        />
      </Card>
    )
  }
  render() {
    return (
      <View style={{ marginTop: 15 }}>
        <Swipe
          data={this.props.jobs}
          keyProp="jobkey"
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards.bind(this)}
          onSwipeRight={job => this.props.likeJob(job)}
        />
      </View>
    );
  }
}


const mapStateToProps = ({ jobs }) => ({
  jobs: jobs.results
})

export default connect(mapStateToProps, actions)(DeckScreen);