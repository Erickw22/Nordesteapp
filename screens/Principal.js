import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Perfil from './Perfil';
import Ecopoints from './Ecopoints';
import Chat from './Chat';
import Cadastrar from './Cadastrar';

const Tab = createBottomTabNavigator();

export default function Principal() {
  return (
    <Tab.Navigator
      initialRouteName="Ecopoints"
      tabBarOptions={{
        activeTintColor: '#30687A',
      }}
    >
      <Tab.Screen
        name="Ecopoints"
        component={Ecopoints}
        options={{
          tabBarLabel: 'Ecopoints',
          headerTintColor:"#30687A",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="map-legend" color={color} size={size} />
          ),
        }}
      />  
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          headerShown: false,
          tabBarLabel: 'Chat',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="chat" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cadastrar"
        component={Cadastrar}
        options={{
          headerShown: false,
          tabBarLabel: 'Cadastrar',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="plus-circle" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          headerShown: false,
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}