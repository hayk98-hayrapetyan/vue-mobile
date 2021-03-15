<template>
    <root>
        <AppNavigation />
    </root>
</template>

<script>
import HomeScreen from "@/screens/HomeScreen";
import MeetupDetailScreen from "@/screens/MeetupDetailScreen";
import MeetupCreateScreen from "@/screens/MeetupCreateScreen";
import LoginScreen from "@/screens/LoginScreen";
import RegisterScreen from "@/screens/RegisterScreen";
import Screen1 from "@/screens/Screen1";
import Screen2 from "@/screens/Screen2";
import Screen3 from "@/screens/Screen3";

import { Root } from "native-base";

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Meetup: MeetupDetailScreen,
    MeetupCreate: MeetupCreateScreen,
    ScreenOne: Screen1,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false
    }
  }
)

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
},{
  headerMode: 'none'
})

const SomeOtherStack = createStackNavigator({
    Screen2,
}, {
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false
  }
})

const SomeOtherOtherStack = createStackNavigator({
    Screen3
}, {
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false
  }
})

const DrawerNavigation = createDrawerNavigator({
    DrawerStack1: SomeOtherStack,
    DrawerStack2: SomeOtherOtherStack,
})

const TabNavigation = createBottomTabNavigator({
    Meetups: HomeStack,
    Other: DrawerNavigation
})

const AppNavigation = createAppContainer(createSwitchNavigator({
  auth: AuthStack,
  tabs: TabNavigation
}))


export default {
  components: {AppNavigation, Root},
}
</script>

