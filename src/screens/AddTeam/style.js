import { StyleSheet } from "react-native";

export const makeStyles = (colors) =>
    StyleSheet.create({
        container: {
            flex: 1,
            margin: 0,
            padding: 0,
        },
        input: {
            backgroundColor: "#e4e4e4",
            marginHorizontal: 15,
            marginTop: 10,
            border: 10,
            borderBottomColor: "red",
        },
        button: {
            margin: 15,
        },
    });
