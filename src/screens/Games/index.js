import React from "react";
import {  View } from "react-native";
import ButtonGradient from "../../components/ButtonGradient";
import { useTheme } from "react-native-paper";

export default Games = ({navigation}) => {
    const { colors } = useTheme();
    
    
    return (
        <View>
            <ButtonGradient 
            text="Adicionar Novo Jogo"
            color={[colors.primary, colors.secondary]}
            onPress={() => navigation.navigate("AddGame")}
            />
        </View>
    );
};
