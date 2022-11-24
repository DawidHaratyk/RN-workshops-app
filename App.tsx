import { NavigationContainer } from "@react-navigation/native";
import { Root } from "./src/navigation/Root";
import { AuthProvider } from "./src/contexts/AuthContext";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Root />
      </AuthProvider>
    </NavigationContainer>
  );
}
