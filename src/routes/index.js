import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import Games from "../screens/Games";
import Teams from "../screens/Teams";
import Ranking from "../screens/Ranking";
import AddTeam from "../screens/AddTeam";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Tabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Teams" component={Teams} />
            <Tab.Screen name="Games" component={Games} />
            <Tab.Screen name="Ranking" component={Ranking} />
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
