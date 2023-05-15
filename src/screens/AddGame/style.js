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
        deleteButton: {
            margin: 15,
            borderRadius: 10,
            bottom: 40,
            position: "absolute",
            width: "90%",
        },
        error: {
            color: "red",
            marginLeft: 25,
            marginTop: 5,
        },
        teamsList: {
            fontWeight: "600",
            fontSize: 20,
            padding: 9,
        }
    });
