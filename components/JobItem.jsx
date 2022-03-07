import React from 'react';
import { View, StyleSheet, Text, Platform } from 'react-native';
import { Card } from 'react-native-elements';
import MapView from 'react-native-maps';

const JobItem = ({ job, initialRegion, snippet, pressButton}) => {
    return (
        <Card key = {job.jobkey}>
            <Card.Title>{job.jobtitle}</Card.Title>
            <View style={{ height: 300 }}>
                <MapView
                    scrollEnabled={false}
                    style={{ flex: 1 }}
                    cacheEnabled={Platform.OS === 'android'}
                    initialRegion={initialRegion}
                >
                </MapView>
            </View>
            <View style={styles.detailWrapper}>
                <Text>{job.company}</Text>
                <Text>{job.formattedRelativeTime}</Text>
            </View>
            <Text>
                {/*reaplce any <b> </b> in snippet with '' string*/}
                {snippet ? job.snippet.replace(/<b>/g, '').replace(/<\/b/g, '') : null}
            </Text>
            {pressButton ?
                <Button
                    title="Apply Now"
                    onPress={pressButton}/>: null}
        </Card>
    )
}

const styles = StyleSheet.create({
    detailWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10
    }
})

export default JobItem