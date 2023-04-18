import React from "react";
import { Text } from "react-native";
import { Button } from "react-native-paper";
import AddTeam from "../AddTeam";

export default Teams = ({ navigation }) => {
    return (
        <Button
            buttonColor="lightgray"
            textColor="black"
            mode="contained"
            onPress={() => navigation.navigate("AddTeam")}
        >
            Adicionar novo Adversário
        </Button>
    );
};
