import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { IconButton, useTheme } from "react-native-paper";

import Home from "../screens/Home";
import Games from "../screens/Games";
import Teams from "../screens/Teams";
import Ranking from "../screens/Ranking";
import AddTeam from "../screens/AddTeam";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Tabs() {
    const { colors } = useTheme();

    return (
        <Tab.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.primary,
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: "bold",
                    fontSize: 22,
                },
                tabBarActiveBackgroundColor: colors.quaternary,
                tabBarInactiveTintColor: "black",
                tabBarActiveTintColor: colors.primary,
            }}
        >
            <Tab.Screen
                name="Ínicio"
                component={Home}
                options={{
                    tabBarLabel: "Ínicio",
                    tabBarIcon: ({ color }) => (
                        <IconButton
                            icon="home"
                            iconColor={colors.primary}
                            size={35}
                        />
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
                            iconColor="black"
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
                            iconColor={colors.primary}
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
