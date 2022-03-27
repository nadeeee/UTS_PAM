import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feed from './Source/Route/Feed';
import Pesanan_Saya from './Source/Route/Pesanan';
import Pembatalan from './Source/Route/Pembatalan';
function Lainnya() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Lainnya!</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#fff"
      labelStyle={{fontSize: 12}}
      style={{backgroundColor: 'tomato'}}>
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Beranda',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Pesanan_Saya"
        component={Pesanan_Saya}
        options={{
          tabBarLabel: 'Pesanan Saya',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="book" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Pembatalan}
        options={{
          tabBarLabel: 'Pembatalan',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="cancel" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Lainnya"
        component={Lainnya}
        options={{
          tabBarLabel: 'Lainnya',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="menu" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
