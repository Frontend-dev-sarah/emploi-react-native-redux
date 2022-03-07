import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import store from './store';
import AuthScreen from './screens/AuthScreen';
import DeckScreen from './screens/DeckScreen';
import HomeScreen from './screens/HomeScreen';
import SettingScreen from './screens/SettingScreen';
import ViewScreen from './screens/ViewScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import OrderScreen from './screens/OrderScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';




export default function App() {

  const Tab = createBottomTabNavigator();
  const HomeTab = createBottomTabNavigator();
  const MainStack = createStackNavigator();


  function MainStackScreens() {
    return (
      <MainStack.Navigator>
        {/* <MainStack.Screen
        name = 'HomeTab'
        component = {HomeTabScreens}
        options = {({ navigation }) => ({
        // headerShown: false,
          headerRight: () => (
            <Button
              title = 'Setting'
              onPress = { () => { navigation.navigate('Setting')}}
            />
          )
        })}
      /> */}
        <MainStack.Screen
          name='View Jobs'
          component={ViewScreen}
        // options={({ navigation }) => ({
        //   headerRight: () => (
        //     <Button
        //       title='Setting'
        //       onPress={() => { navigation.navigate('Setting') }}
        //     />
        //   ),

        // })}
        />
        <MainStack.Screen
          name='Setting'
          component={SettingScreen}
        />
      </MainStack.Navigator>
    );
  }
  function HomeTabScreens() {
    return (
      <HomeTab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'ios-information-circle';
            } else if (route.name === 'Deck') {
              iconName = 'ios-list-box';
            } else if (route.name === 'View') {
              iconName = 'ios-list';
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <HomeTab.Screen
          name='Home'
          component={HomeScreen}
        />
        <HomeTab.Screen
          name='Deck'
          component={DeckScreen}
        />
        <HomeTab.Screen
          name='View'
          component={MainStackScreens}
        />
      </HomeTab.Navigator>
    );
  }

  function EnterTabScreens() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarVisible: false,
          lazy: true // to allow the popup of login with FB only when go to AuthScreen.
        }}
      >
        <Tab.Screen
          name='Welcome'
          component={WelcomeScreen}
        />
        <Tab.Screen
          name='Signin'
          component={AuthScreen}
        />
        <Tab.Screen
          name='Main'
          component={HomeTabScreens}
        />
      </Tab.Navigator>
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <View style={styles.container}>
          <EnterTabScreens />
        </View>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
