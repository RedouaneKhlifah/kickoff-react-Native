import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/Ionicons";

// routes Type import
import { RootScreenRoutesT } from "../types/routesT";

// screens imports
import MatchesScreen from "../screen/MatchesScreen";
import PlayerScreen from "../screen/PlayerScreen";

const Drawer = createDrawerNavigator<RootScreenRoutesT>();

export const DrawerNavigator: React.FC = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="matches"
        component={MatchesScreen}
        options={{
          drawerIcon: ({ size, color }) => (
            <Icon name="football-outline" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="players"
        component={PlayerScreen}
        options={{
          drawerIcon: ({ size, color }) => (
            <Icon name="people-outline" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
