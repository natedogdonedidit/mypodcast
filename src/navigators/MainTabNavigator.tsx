import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import LibraryScreen from '../library/LibraryScreen';
import ListenNowScreen from '../components/listenNow/ListenNowScreen';
import SearchScreen from '../search/SearchScreen';

import {createStackNavigator} from '@react-navigation/stack';



const LibraryStack = createStackNavigator();
const ListenNowStack = createStackNavigator();
const SearchStack = createStackNavigator();

const SearchStackNavigator = () => {
	return (
		<SearchStack.Navigator>
			<ListenNowStack.Screen 
			name=" "
			component={SearchScreen}/>
		</SearchStack.Navigator>
	)
}

const LibraryStackNavigator = () => {
	return (
		<LibraryStack.Navigator>
			<ListenNowStack.Screen 
			name=" "
			component={LibraryScreen}/>
		</LibraryStack.Navigator>
	)
}


const ListenNowStackNavigator = () => {
	return (
		<ListenNowStack.Navigator>
			<ListenNowStack.Screen 
			name=" "
			component={ListenNowScreen}/>
		</ListenNowStack.Navigator>
	)
}

const MainTab = createBottomTabNavigator();

const MainTabNavigator = () => {
	return(
		<MainTab.Navigator >
			<MainTab.Screen
			options={{title: 'Listen Now'}}
			name="Listen Now" component={ListenNowStackNavigator}
			
			/>
			<MainTab.Screen
			options={{title: 'Library'}}
			name="Library" component={LibraryStackNavigator}
		
			/>

			<MainTab.Screen
			options={{title: 'Search'}}
			name="Search" component={SearchStackNavigator}
			
			/>

		</MainTab.Navigator>
	)
}

export default MainTabNavigator;