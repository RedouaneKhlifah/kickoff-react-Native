import "react-native-gesture-handler";
import { StackNavigator } from "./src/routes/StackNavigator";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <StackNavigator />
    </Provider>
  );
}
