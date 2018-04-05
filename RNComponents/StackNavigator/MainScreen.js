import React,{Component} from 'react';
import {View,Button} from 'react-native';

export default class MainScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Button
                    title="Go to Jane's profile"
                    onPress={() => navigate('Profile', {name:'Jane'})
                    }
                />
            </View>
        );
    }
}