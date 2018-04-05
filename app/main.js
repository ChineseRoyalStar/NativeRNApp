import React, {Component} from "react";
import {AppRegistry} from "react-native"
import InitApp from "./pages/home/InitApp"

import StackNavi from "../RNComponents/StackNavigator/StackNavi";
import NavigatorIOSNavi from "../RNComponents/NavigatorIOS/NavigatorIOSNavi";

//AppRegistry.registerComponent('NativeRNApp', ()=>InitApp)
AppRegistry.registerComponent('NativeRNApp', ()=>NavigatorIOSNavi);