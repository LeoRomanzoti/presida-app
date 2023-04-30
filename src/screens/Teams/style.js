import { StyleSheet } from "react-native";

export const makeStyles = (colors) =>
    StyleSheet.create({
        container: {
            flex: 1,
            margin: 0,
            padding: 0,
        },
        button: {
            paddingHorizontal: 40,
            paddingVertical: 10,
            borderRadius: 10,
            margin: 20,
        },
        textButton: {
            color: "white",
            textAlign: "center",
            fontWeight: "bold",
        },
        city: {
            textAlign: "center",
            fontSize: 18,
            fontWeight: "bold",
            padding: 10,
        },
        card: {
            backgroundColor: colors.quaternary,
            borderWidth: 0.5,
            borderRadius: 7,
            marginHorizontal: 5,
        },
        insideCard: {
            backgroundColor: colors.tertiary,
            borderBottomWidth: 0.5,
            borderRightWidth: 0.5,
            borderLeftWidth: 0.5,
            borderRadius: 7,
            marginHorizontal: 5,
        },
        openCard: {
            backgroundColor: colors.secondary,
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
