import { StyleSheet } from "react-native";

export const makeStyles = (colors) =>
    StyleSheet.create({
        container: {
            flex: 1,
            margin: 0,
            padding: 0,
        },
        listIcon: {
            marginHorizontal: 13,
        },
        right: {
            display: "flex",
            flexDirection: "row",
        },
        numbers: {
            marginHorizontal: 16,
            fontSize: 20,
        },
        description: {
            fontWeight: "bold",
        },
    });
