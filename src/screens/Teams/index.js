import React from "react";
import { Text } from "react-native";
import { Button, useTheme } from "react-native-paper";
import { makeStyles } from "./style";
import AddTeam from "../AddTeam";

export default Teams = ({ navigation }) => {
    const { colors } = useTheme();
    const styles = makeStyles(colors);

    return (
        <Button
            buttonColor="#C0C0C0"
            textColor="black"
            mode="contained"
            style={styles.button}
            onPress={() => navigation.navigate("AddTeam")}
        >
            Adicionar novo Adversário
        </Button>
    );
};
