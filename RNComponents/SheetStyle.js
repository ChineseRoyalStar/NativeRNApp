import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';

export default class LotsOfStyles extends Component {
    render() {
        return (
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
              <Text style={styles.red}>just red</Text>
              <Text style={styles.bigblue}>just bigblue</Text>
              <Text style={[styles.bigblue,styles.red]}>blue, then red</Text>
              <Text style={[styles.red,styles.bigblue]}>red, then bigblue</Text>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    bigblue: {
        color:'blue',
        fontWeight:'bold',
        fontSize:30,
    },
    red: {
        color:'red',
    },
});