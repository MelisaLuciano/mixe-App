import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AppParamList} from './AppParamList';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {HomeStack} from './HomeStack';
import {CommentStack} from './CommentStack';

interface AppTabsProps {}

const Tabs = createBottomTabNavigator<AppParamList>();

export const AppTabs: React.FC<AppTabsProps> = ({}) => {
  return (
    <Tabs.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'book-outline';
            return <Ionicons name={'book'} size={size} color={color} />;
          } else if (route.name === 'Comentarios') {
            iconName = 'pencil-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'purple',
        tabBarInactiveTintColor: 'black',
      })}>
      <Tabs.Screen name="Home" component={HomeStack} />
      <Tabs.Screen name="Comentarios" component={CommentStack} />
    </Tabs.Navigator>
  );
};
