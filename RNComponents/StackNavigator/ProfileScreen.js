import React,{Component} from 'react';
import {View,Text} from 'react-native';

export default class ProfileScreen extends React.Component {
    render() {
        return(
            <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:30, color:'blue'}}>on Profile Page</Text>
            </View>
        );
    }
}