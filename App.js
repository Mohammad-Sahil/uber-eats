import { View, Text } from "react-native";
import Home from "./screens/Home";
import RestaurantDetail from "./screens/RestaurantDetail";
import RootNavigation from "./navigation.js";
import 'react-native-gesture-handler';

export default function App() {
  return (
   <RootNavigation />
  );
}
