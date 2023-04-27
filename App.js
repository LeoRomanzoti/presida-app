import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Parse from "parse/react-native.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
    MD3LightTheme as DefaultTheme,
    Provider as PaperProvider,
} from "react-native-paper";

Parse.setAsyncStorage(AsyncStorage);
Parse.initialize(
    "0oqxZboRRtLhvx6HBMnHzaBfPnJmwhWACW4xpYz8",
    "03Ab3So3jemtC2ZthUAAmFII2C6Gwv4Q9O9DBBBz"
);
Parse.serverURL = "https://parseapi.back4app.com/";

const theme = {
    ...DefaultTheme,
    roundness: 2,
    version: 3,
    colors: {
        ...DefaultTheme.colors,
        primary: "#0ca750",
        secondary: "#A9A9A9",
        tertiary: "#D3D3D3",
        quaternary: "#DCDCDC",
    },
    margins: {
        short: 10,
        medium: 15,
        large: 20,
    },
};

export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <PaperProvider theme={theme}>
                    <Routes />
                </PaperProvider>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
