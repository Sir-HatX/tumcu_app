import {createDrawerNavigator,createStackNavigator} from 'react-navigation';
import stackNav from '../Stack/index';


export default createDrawerNavigator({
    Dashboard:stackNav,
});