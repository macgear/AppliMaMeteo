import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home/Home';
import Search from './components/Search/Search';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{
           tabBarLabel: 'Home',
           tabBarIcon: ({ color, size }) => (
             <MaterialCommunityIcons name="home" color={color} size={size} />
           ),
        }} />
        <Tab.Screen name="search" component={Search} options ={{
           tabBarLabel: 'search',
           tabBarIcon: ({ color, size }) => (
             <MaterialCommunityIcons name="magnify" color={color} size={size} />
           ),
        }} />
      </Tab.Navigator>
    </NavigationContainer>



    // <View style={styles.container}>
    //   {/* <Home /> */}
    //   <Search />
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
