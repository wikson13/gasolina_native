import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Fuel from '../screens/Fuel';
import Service from '../screens/Service';
import Stats from '../screens/Stats';
import colors from "../constants/colors";

import { Ionicons } from '@expo/vector-icons';

const FuelNavigation = createStackNavigator({
    Fuel: {
        screen: Fuel,
        navigationOptions: {
            headerTitle: 'Paliwo'
        }
    },
    Service: {
        screen: Service,
        navigationOptions: {
            headerTitle: 'Serwis'
        }
    },
    Stats: {
        screen: Stats,
        navigationOptions: {
            headerTitle: 'Statystyki'
        }
    }
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: colors.primaryColor
        }
    }
});

const StatsNavigation = createStackNavigator({
    Stats: {
        screen: Stats,
        navigationOptions: {
            headerTitle: 'Statystyki'
        }
    },
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: colors.primaryColor
        }
    }
});

const ServiceNavigation = createStackNavigator({
    Service: {
        screen: Service,
        navigationOptions: {
            headerTitle: 'Serwis'
        }
    }
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: colors.primaryColor
        }
    }
});

const TabNavigation = createBottomTabNavigator({
    Paliwo: {
        screen: FuelNavigation,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-rest'/>
            }
        }
    },
    Serwis: ServiceNavigation,
    Statystyki: StatsNavigation
}, {
    tabBarOptions: {
        activeTintColor: colors.primaryColor
    }
});


export default createAppContainer(TabNavigation);
