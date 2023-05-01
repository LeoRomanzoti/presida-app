import React, { useEffect, useState } from "react";
import { Button, TextInput, useTheme } from "react-native-paper";
import { makeStyles } from "./style";
import { useForm, Controller } from "react-hook-form";
import Parse from "parse/react-native.js";
import ContainerStack from "../../components/ContainerStack";
import { LinearGradient } from "expo-linear-gradient";

export default AddTeam = ({ route, navigation }) => {
    const [newTeam, setNewTeam] = useState();
    const item = route.params;
    console.log(item)

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful, isSubmitting },
    } = useForm({defaultValues: item});


    const { colors } = useTheme();
    const styles = makeStyles(colors);

    async function addTeam(data) {
        try {
            const newTeam = new Parse.Object("Team");
            newTeam.set("contact_name", data.contact_name.trim());
            newTeam.set("contact_phone", data.contact_phone);
            newTeam.set("color", data.color.trim());
            newTeam.set("city", data.city.trim());
            newTeam.set("name", data.name.trim());
            await newTeam.save();
            navigation.goBack();
        } catch (error) {
            console.log(error);
        }
    }

    async function editTeam(data) {
        const team = new Parse.Object("Team")
        team.set("objectId", item.objectId)
        team.set("contact_name", data.contact_name.trim());
        team.set("contact_phone", data.contact_phone);
        team.set("color", data.color.trim());
        team.set("city", data.city.trim());
        team.set("name", data.name.trim());
        await team.save();
        navigation.goBack();
    }

    async function deleteTeam() {
        const team = new Parse.Object("Team")
        team.set("objectId", item.objectId)
        await team.destroy();
        navigation.goBack();
    }

    return (
        <ContainerStack>
            <Controller
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        label="Nome do time"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        style={styles.input}
                        mode="outlined"
                        activeOutlineColor={colors.primary}
                    />
                )}
                name="name"
            />
            <Controller
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        label="Cidade do time"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        style={styles.input}
                        mode="outlined"
                        activeOutlineColor={colors.primary}
                    />
                )}
                name="city"
            />
            <Controller
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        label="Cor do Uniforme"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        style={styles.input}
                        mode="outlined"
                        activeOutlineColor={colors.primary}
                    />
                )}
                name="color"
            />
            <Controller
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        label="Nome do Contato"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        style={styles.input}
                        mode="outlined"
                        activeOutlineColor={colors.primary}
                    />
                )}
                name="contact_name"
            />
            <Controller
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        label="Telefone do Contato"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        style={styles.input}
                        mode="outlined"
                        activeOutlineColor={colors.primary}
                        keyboardType="phone-pad"
                    />
                )}
                name="contact_phone"
            />
            <Button
                onPress={handleSubmit(item?.objectId ? editTeam : addTeam)}
                loading={isSubmitting}
                buttonColor={colors.primary}
                textColor="white"
                disabled={isSubmitting}
                style={styles.button}
            >
                Salvar
            </Button>

            { item?.objectId &&

                <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                colors={[colors.primary, colors.secondary]}
                style={styles.button}
                >
                <Button
                onPress={handleSubmit(deleteTeam)}
                loading={isSubmitting}
                textColor="white"
                disabled={isSubmitting}
                >
                Excluir
                </Button>
                </LinearGradient>
                
                
            }
        </ContainerStack>
    );
};
