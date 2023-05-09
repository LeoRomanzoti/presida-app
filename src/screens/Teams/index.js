import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { List } from "react-native-paper";
import { Button, useTheme } from "react-native-paper";
import { makeStyles } from "./style";
import Parse from "parse/react-native.js";
import { LinearGradient } from "expo-linear-gradient";
import ContainerTab from "../../components/ContainerTab";
import ButtonGradient from "../../components/ButtonGradient";

export default Teams = ({ navigation }) => {
    const [teams, setTeams] = useState(undefined);
    const [refreshing, setRefreshing] = useState(false);

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
            setRefreshing(false);
        }
        loadTeams();
    }, [refreshing]);

    const { colors } = useTheme();
    const styles = makeStyles(colors);

    return (
        <View style={styles.container}>
            <ButtonGradient 
                text="Adicionar novo Adversário"
                color={[colors.primary, colors.secondary]}
                onPress={() => navigation.navigate("AddTeam")}
            />

            {teams && (
                <ContainerTab>
                    <FlatList
                        data={teams}
                        refreshing={refreshing}
                        onRefresh={() => setRefreshing(true)}
                        keyExtractor={(item) => item.cityName}
                        renderItem={({ item, index }) => (
                            <List.AccordionGroup key={item.cityName}>
                                <Text style={styles.city}>{item.cityName}</Text>

                                <FlatList
                                    data={item.teams}
                                    keyExtractor={(item) => item.id}
                                    renderItem={({ item, index }) => (
                                        <List.Accordion
                                            title={item.get("name")}
                                            description={item.get("color")}
                                            style={styles.card}
                                            onPress={() => styles.openCard}
                                            onLongPress={() =>
                                                navigation.navigate("AddTeam", {
                                                    name: item.get("name"),
                                                    city: item.get("city"),
                                                    contact_name:
                                                        item.get(
                                                            "contact_name"
                                                        ),
                                                    contact_phone:
                                                        item.get(
                                                            "contact_phone"
                                                        ),
                                                    color: item.get("color"),
                                                    objectId: item.id,
                                                })
                                            }
                                            titleStyle={styles.title}
                                            id={item.id}
                                            key={item.id}
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
                </ContainerTab>
            )}
        </View>
    );
};
