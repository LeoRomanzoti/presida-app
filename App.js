import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Parse from "parse/react-native.js"
import AsyncStorage from "@react-native-async-storage/async-storage";

Parse.setAsyncStorage(AsyncStorage)
Parse.initialize("0oqxZboRRtLhvx6HBMnHzaBfPnJmwhWACW4xpYz8", "03Ab3So3jemtC2ZthUAAmFII2C6Gwv4Q9O9DBBBz")
Parse.serverURL = "https://parseapi.back4app.com/"

export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Routes />
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
