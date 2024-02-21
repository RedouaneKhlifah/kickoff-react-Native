import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

// routes type import
import { RootScreenRoutesT } from "../types/routesT";
import { DrawerNavigator } from "./DrawerNavigator";

const Stack = createNativeStackNavigator<RootScreenRoutesT>();

export const StackNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
