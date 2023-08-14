import { createStackNavigator } from '@react-navigation/stack';
import { DashboardBottomTabs } from 'navigation/bottomTabs/DasboardBottomTabs';
import ScreenOne from 'screens/app/ScreenOne';
import ScreenThree from 'screens/app/ScreenThree';
import ScreenTwo from 'screens/app/ScreenTwo';
import Login from 'screens/auth/Login';
import Profile from 'screens/profile/Profile';

const StackNavigator = createStackNavigator();
const AppStackNavigator = createStackNavigator();
const AuthStackNavigator = createStackNavigator();
const ScreenOneNavigator = createStackNavigator();

export const DashboardStack = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen name="ScreenOne" component={ScreenOneStack} />
      <StackNavigator.Screen name="ScreenTwo" component={ScreenTwo} />
      <StackNavigator.Screen name="ScreenThree" component={ScreenThree} />
      <StackNavigator.Screen name="Profile" component={Profile} />
    </StackNavigator.Navigator>
  );
}

export const ScreenOneStack = () => {
  return (
    <StackNavigator.Navigator screenOptions={
      {
        headerShown: false,
      }
    }>
      <StackNavigator.Screen name="ScreenOne" component={ScreenOne} />
      <StackNavigator.Screen name="Profile" component={Profile} />
    </StackNavigator.Navigator>
  );
}

export const AuthStack = () => {
  return (
    <AuthStackNavigator.Navigator>
      <AuthStackNavigator.Screen name="Login" component={Login} />
    </AuthStackNavigator.Navigator>
  );
}
export const AppStack = () => {
  return (
    <AppStackNavigator.Navigator screenOptions={
      {
        headerShown: false,
      }
    }>
      <AppStackNavigator.Screen name="DashboardStack" component={DashboardBottomTabs} />
    </AppStackNavigator.Navigator>
  );
}



