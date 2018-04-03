import React, { Component } from 'react';
import { View, Image } from 'react-native';

export default class Bananas extends Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <View style={{flex:1, justifyContent:'center',alignItems:'center',backgroundColor:'#333333'}}>
                <Image source={pic} style={{justifyContent:'center',width: 193, height: 110}} />
            </View>
        );
    }
}