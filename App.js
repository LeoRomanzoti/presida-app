import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Routes />
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
