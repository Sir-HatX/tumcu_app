import {createSwitchNavigator,withNavigation} from 'react-navigation';
import Welcome from './Welcome';
import Dashboard from '../dashboard/Drawer/index';
import Stack from '../dashboard/Stack/index';

export default  createSwitchNavigator({
      welcome: Welcome,
      Drawer: Dashboard
    });
