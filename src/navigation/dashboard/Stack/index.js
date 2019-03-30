import {createStackNavigator} from 'react-navigation';
import DemoScreen from '../../../DemoScreen';
import Tabs from '../Tabs/index'

export default stackNav = createStackNavigator({
    Home : {
        screen : Tabs,
        navigationOptions: () => ({
            header: null,
          }),
    }
});
