import {StackNavigator} from 'react-navigation';

import MainScreen from './MainScreen';
import ProfileScreen from './ProfileScreen';

export default StackNavi = StackNavigator({
    Main: {screen: MainScreen},
    Profile: {screen: ProfileScreen}
});
