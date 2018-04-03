import React,{Component} from 'react'
import {View} from 'react-native'

export default class FixedDimensionsBasics extends Component {
    render() {
        // return (
        //     <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        //         <View style={{width: 50, height:50, backgroundColor: 'powderblue'}} />
        //         <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
        //         <View style={{width: 150, height: 150, backgroundColor:'steelblue'}} />
        //     </View>
        // );

        // return (
        //     <View style={{flex:1}}>
        //         <View style={{flex:1,backgroundColor:'powderblue'}} />
        //         <View style={{flex:2,backgroundColor:'skyblue'}} />
        //         <View style={{flex:3, backgroundColor:'steelblue'}} />
        //     </View>
        // );

        // return (
        //     <View style={{flex:1,flexDirection:'row'}}>
        //         <View style={{flex:1,backgroundColor:'powderblue'}} />
        //         <View style={{flex:2,backgroundColor:'skyblue'}} />
        //         <View style={{flex:3, backgroundColor:'steelblue'}} />
        //     </View>
        // );

        //justifyContent: 'flex-start', 'center', 'flex-end', 'space-around', 'space-between'
        //决定子元素沿着主轴的排序方式
        // return (
        //     <View style={{flex:1, justifyContent:'space-around'}}>
        //         <View style={{width: 50, height: 50, backgroundColor:'powderblue'}} />
        //         <View style={{width: 50, height: 50, backgroundColor:'skyblue'}} />
        //         <View style={{width: 50, height: 50, backgroundColor:'steelblue'}} />
        //     </View>
        // );

        //alignItems: 'flex-start', 'center', 'flex-end', 'stretch'
        //决定子元素沿着次轴的排序方式
         return (
            <View style={{flex:1, flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
                <View style={{width: 50, height: 50, backgroundColor:'powderblue'}} />
                <View style={{width: 50, height: 50, backgroundColor:'skyblue'}} />
                <View style={{width: 50, height: 50, backgroundColor:'steelblue'}} />
            </View>
        );


    }
}
