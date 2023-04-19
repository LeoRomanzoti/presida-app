import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { IconButton } from "react-native-paper";

import Home from "../screens/Home";
import Games from "../screens/Games";
import Teams from "../screens/Teams";
import Ranking from "../screens/Ranking";
import AddTeam from "../screens/AddTeam";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Tabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#4169e1",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: "bold",
                },
            }}
        >
            <Tab.Screen
                name="Ínicio"
                component={Home}
                options={{
                    tabBarLabel: "Ínicio",
                    tabBarIcon: ({ color }) => (
                        <IconButton icon="home" iconColor="#8B0000" size={35} />
                    ),
                }}
            />
            <Tab.Screen
                name="Adversários"
                component={Teams}
                options={{
                    tabBarLabel: "Adversários",
                    tabBarIcon: ({ color }) => (
                        <IconButton
                            icon="account"
                            iconColor="#000080"
                            size={35}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Jogos"
                component={Games}
                options={{
                    tabBarLabel: "Jogos",
                    tabBarIcon: ({ color }) => (
                        <IconButton
                            icon="soccer-field"
                            iconColor="green"
                            size={35}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Ranking"
                component={Ranking}
                options={{
                    tabBarLabel: "Ranking",
                    tabBarIcon: ({ color }) => (
                        <IconButton icon="soccer" iconColor="black" size={35} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default Routes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Tabs"
                component={Tabs}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="AddTeam"
                component={AddTeam}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};
