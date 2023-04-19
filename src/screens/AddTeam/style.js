import { StyleSheet } from "react-native";

export const makeStyles = (colors) =>
    StyleSheet.create({
        container: {
            flex: 1,
        },
        input: {
            backgroundColor: "#e4e4e4",
            margin: 5,
        },
        button: {
            margin: 15,
        },
    });
