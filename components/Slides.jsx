import React from 'react';
import { View, Text, ScrollView, Dimensions, TouchableOpacity } from 'react-native';

const WIN_WIDTH = Dimensions.get('window').width;

const renderSlides = (props) => {
    return props.data.map( (obj, index) => {
        return (
        <View key = {obj.text} style = {[styles.slide, {backgroundColor: obj.bgcolor}]}>
            <Text style = {[styles.slideText, {color: obj.color}]}>{obj.text}</Text>
            {index === props.data.length -1?
            <TouchableOpacity
                onPress = {props.onSlideEndPress}
                style = {styles.buttonStyle}
            >
                <Text style = {{ color: 'white'}}>Ready</Text>         
            </TouchableOpacity> : null}
        </View>
        );
    })
}


const Slides = (props) => {
    
    return (
        <ScrollView
            horizontal
            pagingEnabled
            style = {{ flex: 1 }}
        >
            {renderSlides(props)}
        </ScrollView>
    )
}

const styles = {
    slide: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        width: WIN_WIDTH,
    },
    slideText: {
        fontSize: 15,
        position: 'absolute',
    },
    buttonStyle: {
        position: 'relative',
        top: 60,
        color: 'white',
        borderColor: 'white',
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: 'blue', 
        borderWidth: 1       
    }
}

export default Slides;