import React, {Component} from 'react';
import {AppRegistry, View, Text, StyleSheet, TouchableHighlight, Alert, TextInput, Button} from 'react-native';



export default class Fetch extends Component {

    constructor(props) {
        super(props);
        this.state = {ip:'',city:''};
        this.onButtonPress = this.onButtonPress.bind(this);
    }

    render() {

        return (
            <View style={styles.container}>
                <Button
                    //underlayColor='rgb(210,260,260)'
                    title='Confirm'
                    style={{padding: 10, marginTop: 10, borderRadius: 5,}}
                    onPress={this.onButtonPress()}
                />

                <Text>{this.state.city}</Text>
            </View>
        )
    }

    get(txt) {
        fetch('http://ip.taobao.com/service/getIpInfo.php?ip='+txt, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            //Alert.alert(response.url);
            return response.json();
        }).then((jsonData) => {//2
            let country = jsonData.data.country;
            let cit = jsonData.data.city;
            this.setState({city:cit});
           // alert("country:" + country + "-------city:" + city);
        });
    }

    onButtonPress(text) {

        fetch('http://ip.taobao.com/service/getIpInfo.php?ip='+'114.246.90.155', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
           // Alert.alert(response.url);
            return response.json();
        }).then((jsonData) => {//2
            let country = jsonData.data.country;
            let cit = jsonData.data.city;
            this.setState({city:cit});
            // alert("country:" + country + "-------city:" + city);
        });
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
