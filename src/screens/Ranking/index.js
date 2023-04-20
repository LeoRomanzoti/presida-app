import React from "react";
import { Text, View } from "react-native";
import { List, useTheme } from "react-native-paper";
import { makeStyles } from "./style";

export default Ranking = () => {
    const { colors } = useTheme();
    const styles = makeStyles(colors);

    return (
        <View style={styles.container}>
            <List.Item
                title="Jogador/Posição"
                titleStyle={{ fontWeight: "bold", fontSize: 18 }}
                right={(props) => (
                    <View style={styles.right}>
                        <List.Icon
                            color="black"
                            icon="soccer"
                            style={styles.listIcon}
                        />
                        <List.Icon
                            color="#000080"
                            icon="shoe-cleat"
                            style={styles.listIcon}
                        />
                        <List.Icon
                            color="#8B0000"
                            icon="alpha-t-circle-outline"
                            style={styles.listIcon}
                        />
                    </View>
                )}
            />
            <List.Item
                title="Léo"
                description="Volante"
                right={(props) => (
                    <View style={styles.right}>
                        <Text style={styles.numbers}>4</Text>
                        <Text style={styles.numbers}>7</Text>
                        <Text style={styles.numbers}>11</Text>
                    </View>
                )}
            />
        </View>
    );
};
