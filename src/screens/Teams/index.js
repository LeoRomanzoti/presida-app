import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from 'react-native';
import { List } from 'react-native-paper';
import { Button, useTheme } from "react-native-paper";
import { makeStyles } from "./style";
import AddTeam from "../AddTeam";
import Parse from "parse/react-native.js"


export default Teams = ({ navigation }) => {
    const [teams, setTeams] = useState(undefined)

    useEffect(() => {
        async function loadTeams() {
            const query = new Parse.Query("Team")
            const result = await query.findAll()

            let cities = {}
            result.map((team) => {
                if (team.get("city") in cities === true) {
                    cities[team.get("city")].push(team)
                    return 
                }
                cities[team.get("city")] = [team]
            })
            console.log(cities)


            const finalResult = []
            for (const city in cities) {
                const cityGroup = {cityName: city, teams: cities[city]}
                finalResult.push(cityGroup)
            }

            setTeams(finalResult)
        }
        loadTeams()
    }, [])


    const { colors } = useTheme();
    const styles = makeStyles(colors);

    
    return (
        <View>
            <Button
                buttonColor="#C0C0C0"
                textColor="black"
                mode="contained"
                style={styles.button}
                onPress={() => navigation.navigate("AddTeam")}
                >
                Adicionar novo Adversário
            </Button>
            {teams && <FlatList 
                data={teams}
                keyExtractor={(item) => item.cityName}
                renderItem={({item, index}) => ( 
                    <List.AccordionGroup key={item.cityName}>
                        <Text>
                            {item.cityName}
                        </Text>


                            <FlatList 
                                data={item.teams}
                                keyExtractor={(item) => item.get("objectId")}
                                renderItem={({item, index}) => ( 

                                    <List.Accordion title={item.get("name")} description={item.get("color")} descriptionStyle={{ color: "red"}} id={Math.random()} key={item.get("objectId")}>
                                        <List.Item title={item.get("contact_name")} right={() => <Text>{item.get("contact_phone")}</Text>} />
                                    </List.Accordion> )}
                            />



                        
                    </List.AccordionGroup>
                )}
            />}
        </View>
    );
};


