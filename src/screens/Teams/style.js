import { StyleSheet } from "react-native";

export const makeStyles = (colors) =>
    StyleSheet.create({
        container: {
            flex: 1,
            margin: 0,
            padding: 0,
        },
        button: {
            margin: 20,
        },
        city: {
            textAlign: "center",
            fontSize: 18,
            fontWeight: "bold",
            padding: 10,
        },
        card: {
            backgroundColor: "#C0C0C0",
        },
        insideCard: {
            backgroundColor: "#D3D3D3",
        },
        title: {
            fontSize: 18,
            textDecorationLine: "underline",
            color: "black",
            fontWeight: "bold",
        },
        right: {
            display: "flex",
            flexDirection: "row",
        },
        listIcon: {
            marginLeft: 13,
        },
    });
