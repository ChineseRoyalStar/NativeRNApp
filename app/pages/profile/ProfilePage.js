import React, {Component} from "react";
import {StyleSheet, Image, Text, View} from "react-native";

export default class ProfilePage extends Component {
    render() {
        return(
            <View style={{backgroundColor:'black',flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontSize:20, color:'red'}}>ProfilePage</Text>
            </View>
        );
    }
}