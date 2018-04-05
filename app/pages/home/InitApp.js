import React, {Component} from "react";
import {
    BackAndroid,
    Platform,
} from "react-native";
import { Navigator } from 'react-native-deprecated-custom-components'
import MainPage from "./MainPage";
import ToastUtil from "../../utils/ToastUtil";

import ProfilePage from '../profile/ProfilePage';

let isFirstQuit = 0;

export default class InitApp extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        //this.onBackAndroid = this.onBackAndroid.bind(this);
    }

    render() {
        return (
            <Navigator
                ref="navigator"
                initialRoute={{name:'MainPage', component: MainPage}}
                configureScene={(route) => {
                    var config;
                    if(route.sceneConfig) {
                        config = route.sceneConfig;
                    }else {
                        config = Navigator.SceneConfigs.HorizontalSwipeJump;
                    }
                    config.gestures = null;
                    return config;
                }}

                renderScene={(route, navigator)=> {
                    let Component = route.component;
                    return <Component {...route.params} navigator={navigator}/>
                }}
            />
        );
    }

    componentDidMount() {
        this.timer && clearTimeout(this.timer);
        if (Platform.OS === 'android') {
            BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }

    componentWillUnMount() {
    }

    onBackAnroid() {
        const nav = this.refs.navigator;
        if (nav && nav.getCurrentRoutes().length>1) {
            nav.pop();
            return true; //返回true表示消费该事件
        } else {
            if (isFirstQuit == 0) {
                ToastUtil.show('再按一次退出应用');
                isFirstQuit = 1;
                this.timer = setTimeout(()=> {
                    isFirstQuit = 0;
                },1000)
                return true;
            } else if (isFirstQuit == 1) {
                return false; //返回false， 表示执行系统默认实现
            }
        }
    };
}

