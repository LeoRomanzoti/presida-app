import React, { useState } from "react";
import { Button, TextInput, useTheme } from "react-native-paper";
import { makeStyles } from "./style";
import Container from "../../components/Container";
import { useForm, Controller } from "react-hook-form";

export default AddTeam = () => {
    const [newTeam, setNewTeam] = useState();
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { colors } = useTheme();
    const styles = makeStyles(colors);
    const onSubmit = (data) => console.log(data);

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
                    />
                )}
                name="teamName"
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
                    />
                )}
                name="teamCity"
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
                    />
                )}
                name="teamUniform"
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
                    />
                )}
                name="teamContact"
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
                        keyboardType="phone-pad"
                    />
                )}
                name="teamPhone"
            />
            <Button
                onPress={handleSubmit(onSubmit)}
                buttonColor="#C0C0C0"
                textColor="black"
                style={styles.button}
            >
                Cadastrar novo Time
            </Button>
        </Container>
    );
};
