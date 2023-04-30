import React, { useEffect, useState } from "react";
import { Button, TextInput, useTheme } from "react-native-paper";
import { makeStyles } from "./style";
import Container from "../../components/Container";
import { useForm, Controller } from "react-hook-form";
import Parse from "parse/react-native.js";

export default AddTeam = ({ navigation }) => {
    const [newTeam, setNewTeam] = useState();

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful, isSubmitting },
    } = useForm();

    useEffect(() => {
        reset({
            contact_name: "",
            contact_phone: "",
            name: "",
            city: "",
            color: "",
        });
    }, [isSubmitSuccessful]);

    const { colors } = useTheme();
    const styles = makeStyles(colors);

    async function addTeam(data) {
        try {
            const newTeam = new Parse.Object("Team");
            newTeam.set("contact_name", data.contact_name);
            newTeam.set("contact_phone", data.contact_phone);
            newTeam.set("color", data.color);
            newTeam.set("city", data.city);
            newTeam.set("name", data.name);
            await newTeam.save();
            navigation.goBack();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Container styles={styles.container}>
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
                onPress={handleSubmit(addTeam)}
                loading={isSubmitting}
                buttonColor={colors.primary}
                textColor="white"
                disabled={isSubmitting}
                style={styles.button}
            >
                Cadastrar novo Time
            </Button>
        </Container>
    );
};
