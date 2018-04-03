import { AppRegistry } from 'react-native';
import App from './App';
import props from './RNComponents/Props';
import state from './RNComponents/State';
import sheetStyle from './RNComponents/SheetStyle'
import FixedDimensionsBasics from './RNComponents/WidthAndHeight'
import TextInput from './RNComponents/TextInput'
import ScrollView from './RNComponents/ScrollView'
import FlatList from './RNComponents/FlatList'
import SectionList from './RNComponents/SectionList'
import FetchRequest from './RNComponents/FetchRequest'

AppRegistry.registerComponent('NativeRNApp', () => FetchRequest);