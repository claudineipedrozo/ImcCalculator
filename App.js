import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "./src/pages/HomeScreen";
import IMCScreen from "./src/pages/IMCScreen";
import ICQScreen from "./src/pages/ICQScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="IMCScreen" component={IMCScreen} />
        <Stack.Screen name="ICQScreen" component={ICQScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}