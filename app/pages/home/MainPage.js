import React, {Component} from "react";
import {StyleSheet, Image} from "react-native";
import {TabNavigator} from "react-navigation";
import SelectedPage from '../selected/SelectedPgae';
import ExplorePage from '../explore/ExplorePage';

const SELECTED_TAG = 'selected';
const SELECTED_TITLE = '精选';
const SELECTED_NORMAL = require('../../imgs/ic_tab_strip_icon_feed.png');
const SELECTED_FOCUS = require('../../imgs/ic_tab_strip_icon_feed_selected.png');

const EXPLORE_TAG = 'explore';
const EXPLORE_TITLE = '发现';
const EXPLORE_NORMAL = require('../../imgs/ic_tab_strip_icon_category.png');
const EXPLORE_FOCUS = require('../../imgs/ic_tab_strip_icon_category_selected.png');

export default MainPage = TabNavigator({

    SelectedPgae: {
        screen: SelectedPage,
        navigationOptions: {
            tabBarLabel: SELECTED_TITLE,
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={SELECTED_NORMAL}
                    style={[{height: 24, width:24}, {tintColor:tintColor}]}
                />
            )
        }
    },

    ExplorePage: {
        screen: ExplorePage,
        navigationOptions: {
            tabBarLabel: EXPLORE_TITLE,
            tabBarIcon: ({tintColor}) => (
                <Image
                    source={EXPLORE_NORMAL}
                    style={[{height: 24, width:24}, {tintColor:tintColor}]}
                />
            )
        }
    },
}, {
    // 设置TabNavigation的位置
    tabBarPosition: 'bottom',
    // 是否在更改标签时显示动画
    animationEnabled:true,
    // 是否允许在标签之进行滑动
    swipeEnabled:false,
    // 按back键是否跳转到第一个Tab，none为不跳转
    backBehavior:"none",

    // 设置Tab标签的属性
    tabBarOptions: {
        // Android属性
        upperCaseLabel: false, //是否使标签大写， 默认为true
        // 共有属性
        showIcon: true, //是否显示图标，默认关闭
        showLabel: true, //是否显示label，默认开启
        activeTitleColor: '#EB3695', // label和icon的前景色 活跃状态下选中
        inactiveTintColor: 'gray', // label和icon的前景色 活跃状态下未选中
        style: {
            backgroundColor:'white',
            height: 55,
        },
        indicatorStyle: {
            height:0,
        },
        iconStyle: {
         marginBottom: 5,
        }
    },
});

const MainPageStyle = StyleSheet.create(
    {
        tab_container: {
            height:42
        },
        tab_icon: {
            width: 35,
            height: 25,
            resizeMode: 'contain'
        },
        tab_title: {
            color: '#929292',
            fontSize: 8,
            marginTop: -4,
        },
        tab_title_selected: {
            color: '#333333',
            fontSize: 8,
            marginTop: -4,
        }

});