import React, { useState } from "react";
import { Button, TextInput } from "react-native-paper";
import Container from "../../components/Container";
import { useForm, Controller } from "react-hook-form";

export default AddTeam = () => {
    const [newTeam, setNewTeam] = useState();
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <Container>
            <Controller
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        label="Nome do time"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="teamName"
            />
            <Button
                onPress={handleSubmit(onSubmit)}
                buttonColor="lightgray"
                textColor="black"
            >
                Cadastrar novo Time
            </Button>
        </Container>
    );
};

// <TextInput label="Cidade" />
// <TextInput label="Cor do Uniforme" />
// <TextInput label="Nome do Contato" />
// <TextInput label="Telefone do Contato" />
//
