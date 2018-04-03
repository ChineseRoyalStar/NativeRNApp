'use strict';

const React = require('react');
const ReactNative = require('react-native');

const {
    Alert,
    View,
    Button,
} = ReactNative;

const onButtonPress = () => {
    Alert.alert('Button has been pressed!');
};

exports.displayName = 'ButtonExample';
exports.framework = 'React';
exports.title = '<Button>';
exports.description = 'Simple React Native button component.';

exports.examples = [
    {
        title: 'Simple Button',
        description: 'The title and onPress handler are required. It is '+
        'recommended to set accessiblityLabel to help make your app usable by ' +
        'everyone.',
        render: function () {
            return (
                <Button
                    onPress={onButtonPress}
                    title="Press me"
                    accessiblilityLabel = "See an informative alert"
                />
            );
        },
    },
    {
        title: 'Adjusted color',
        description: 'Adjusts the color in a way that looks stardard on each '+
        'platform. On iOS, the color prop controls the color of the text. On ' +
        'Android, the color adjusts the background color of the button.',
        render: function () {
            return (
                <Button
                    onPress={onButtonPress}
                    title="Press purple"
                    color="#841584"
                    accessiblilityLabel = "Learn more about purple"
                />
            );
        },
    },
    {
        title: 'Fit to text layout',
        description: 'This layout strategy lets the title define the width of '+
        'the button ',
        render: function () {
            return (
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Button
                        onPress={onButtonPress}
                        title="This looks great"
                        accessiblilityLabel = "This sounds great"
                    />
                    <Button
                        onPress={onButtonPress}
                        title="Ok!"
                        color="#841584"
                        accessiblilityLabel = "Ok, Great!"
                    />
                </View>
            );
        },
    },
    {
        title: 'Disabled Button',
        description: 'All interactions for the component are disabled.',
        render: function () {
            return (
                <Button
                    disabled
                    onPress={onButtonPress}
                    title="I Am Disabled"
                    accessiblilityLabel = "See an informative alert"
                />
            );
        },
    }
];