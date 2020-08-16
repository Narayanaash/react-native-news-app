import React from "react";
import { Root } from "native-base";
// import { StackNavigator, DrawerNavigator } from "react-navigation";
import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer,
} from "react-navigation";

import Home from "./screens/home/";
import Entertainment from "./screens/entertainment/entertainment";
import Sport from "./screens/sports/sports";
import SideBar from "./screens/sidebar";
import Contact from "./screens/contact/contact";
import About from "./screens/about/about";
import Corona from "./screens/corona/corona";
import Politics from "./screens/politics/politics";
import Business from "./screens/business/business";
import Movies from "./screens/movies/movies";
import Searchbar from "./screens/searchbar/";

const Drawer = createDrawerNavigator(
  {
    Home: { screen: Home },
    Entertainment: { screen: Entertainment },
    Sport: { screen: Sport },
    Corona: { screen: Corona },
    Politics: { screen: Politics },
    Business: { screen: Business },
    Movies: { screen: Movies },
  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63",
    },
    contentComponent: (props) => <SideBar {...props} />,
  }
);

const AppNavigator = createStackNavigator(
  {
    Drawer: { screen: Drawer },
    Contact: { screen: Contact },
    About: { screen: About },
    Searchbar: { screen: Searchbar },
  },
  {
    initialRouteName: "Drawer",
    headerMode: "none",
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default () => (
  <Root>
    <AppContainer />
  </Root>
);
