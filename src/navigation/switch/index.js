import { createSwitchNavigator, withNavigation } from "react-navigation";
import Welcome from "./Welcome";
import Dashboard from "../dashboard/Drawer/index";
import Stack from "../dashboard/Stack/index";
import Confirm from "./confirm";

export default createSwitchNavigator(
  {
    Confirm:Confirm,
    Drawer: Dashboard,
    welcome: Welcome,
  },
  {initialRouteName:"welcome"});

