import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {NavigatorIOS, Text, TouchableHighlight, View} from 'react-native';

export default class NavigatorIOSNavi extends Component {
    render () {
        return (
          <NavigatorIOS
              initialRoute={{
                  component: MyScene,
                  title: 'My Initial Scene'
              }}
              style={{flex:1}}
          />
        );
    }
}

class MyScene extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        navigator: PropTypes.object.isRequired,
    };

    // constructor(props, context) {
    //      super(props, context);
    //      this._onForward = this._onForward.bind(this);
    // }

    _onForward(nextRoute){
        this.props.navigator.push(nextRoute);
    }

    render () {

        const nextRoute = {
            component:MyScene,
            title: 'Bar That',
            passProps: {title: 'BarTitle'}
        };

        return (
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text>Current Scene: {this.props.title}</Text>
                <TouchableHighlight onPress={() => this._onForward(nextRoute)}>
                    <Text>Tap me to load the next scene</Text>
                </TouchableHighlight>
            </View>
        )
    }
}