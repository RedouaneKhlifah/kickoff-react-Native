import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

// routes type import
import { RootScreenRoutesT } from "../types/routesT";
import { DrawerNavigator } from "./DrawerNavigator";
import MatcheDetailsScreen from "../screen/MatchDetailsScreen";
import PlayerdetailsScreen from "../screen/PlayerdetailsScreen";

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
        <Stack.Screen
          name="MatcheDetailsScreen"
          component={MatcheDetailsScreen}
          options={({ route }) => ({
            title:
              route.params.match.homeTeam.name +
              " vs " +
              route.params.match.awayTeam.name,
            headerStyle: {
              backgroundColor: "white",
            },
          })}
        />
        <Stack.Screen
          name="PlayerDetailsScreen"
          component={PlayerdetailsScreen}
          options={({ route }) => ({
            title: route.params.player.player_name,
            headerStyle: {
              backgroundColor: "white",
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
