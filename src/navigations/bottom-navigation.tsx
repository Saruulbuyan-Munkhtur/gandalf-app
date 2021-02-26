import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShopScreen from '../screens/shop-screen'
import ExploreScreen from '../screens/explore-screen'
import FavouriteScreen from '../screens/facourite-screen'
import CartScreen from '../screens/cart-screen'
import AccountScreen from '../screens/account-screen'
import { BottomTabBar } from './bottomTab'

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomTabBar {...props} />}>
            <Tab.Screen name='shop' component={ShopScreen}/>
            <Tab.Screen name='explore' component={ExploreScreen}/>
            <Tab.Screen name='favourite' component={FavouriteScreen}/>
            <Tab.Screen name='cart' component={CartScreen}/>
            <Tab.Screen name='account' component={AccountScreen}/>
        </Tab.Navigator>
    )
}

export default BottomNavigation