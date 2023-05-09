import React from "react";
import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Button, useTheme } from "react-native-paper";
import { makeStyles } from "./style";

export default ButtonGradient = ({text, color, onPress, loading, disable, style}) => {

    const { colors } = useTheme();
    const styles = makeStyles(colors);
    
    return (
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                colors={color}
                style={style ? style : styles.button}
            >
                <Button
                    textColor="white"
                    onPress={onPress}
                    loading={loading}
                    disabled={disable}
                >
                    {text}
                </Button>
            </LinearGradient>
    );
};
