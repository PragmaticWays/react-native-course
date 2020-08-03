import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentScreen";
import ImageScreen from "./src/screens/ImageScreen";
import ListScreen from "./src/screens/ListScreen";
import ColorScreen from "./src/screens/ColorScreen";
import ColorAdjustScreen from "./src/screens/ColorAdjustScreen";
import ColorAdjustReducerScreen from "./src/screens/ColorAdjustReducerScreen";
import CounterScreen from "./src/screens/CounterScreen";
import TextScreen from "./src/screens/TextScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen,
    List: ListScreen,
    Image: ImageScreen,
    Color: ColorScreen,
    ColorAdjust: ColorAdjustScreen,
    ColorAdjustReducer: ColorAdjustReducerScreen,
    Counter: CounterScreen,
    Text: TextScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
