import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { List } from "react-native-paper";
import { Button, useTheme } from "react-native-paper";
import { makeStyles } from "./style";
import Parse from "parse/react-native.js";

export default Teams = ({ navigation }) => {
    const [teams, setTeams] = useState(undefined);

    useEffect(() => {
        async function loadTeams() {
            const query = new Parse.Query("Team");
            const result = await query.findAll();

            let cities = {};
            result.map((team) => {
                if (team.get("city") in cities === true) {
                    cities[team.get("city")].push(team);
                    return;
                }
                cities[team.get("city")] = [team];
            });

            const finalResult = [];
            for (const city in cities) {
                const cityGroup = { cityName: city, teams: cities[city] };
                finalResult.push(cityGroup);
            }

            setTeams(finalResult);
        }
        loadTeams();
    }, []);

    const { colors } = useTheme();
    const styles = makeStyles(colors);

    return (
        <View style={styles.container}>
            <Button
                buttonColor={colors.secondary}
                textColor="black"
                mode="contained"
                style={styles.button}
                onPress={() => navigation.navigate("AddTeam")}
            >
                Adicionar novo Adversário
            </Button>
            {teams && (
                <View style={{}}>
                    <FlatList
                        data={teams}
                        keyExtractor={(item) => item.cityName}
                        renderItem={({ item, index }) => (
                            <List.AccordionGroup key={item.cityName}>
                                <Text style={styles.city}>{item.cityName}</Text>

                                <FlatList
                                    data={item.teams}
                                    keyExtractor={(item) =>
                                        item.get("objectId")
                                    }
                                    renderItem={({ item, index }) => (
                                        <List.Accordion
                                            title={item.get("name")}
                                            description={item.get("color")}
                                            style={styles.card}
                                            onPress={() => styles.openCard}
                                            titleStyle={styles.title}
                                            id={Math.random()}
                                            key={item.get("objectId")}
                                        >
                                            <List.Item
                                                title={item.get("contact_name")}
                                                style={styles.insideCard}
                                                right={() => (
                                                    <View style={styles.right}>
                                                        <Text>
                                                            {item.get(
                                                                "contact_phone"
                                                            )}
                                                        </Text>
                                                        <List.Icon
                                                            color="green"
                                                            icon="whatsapp"
                                                            style={
                                                                styles.listIcon
                                                            }
                                                        />
                                                    </View>
                                                )}
                                            />
                                        </List.Accordion>
                                    )}
                                />
                            </List.AccordionGroup>
                        )}
                    />
                </View>
            )}
        </View>
    );
};
