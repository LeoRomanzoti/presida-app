import React, { useEffect, useState } from "react";
import {  Dialog, Portal, Text, TextInput, useTheme } from "react-native-paper";
import { makeStyles } from "./style";
import { useForm, Controller } from "react-hook-form";
import Parse from "parse/react-native.js";
import ContainerStack from "../../components/ContainerStack";
import ButtonGradient from "../../components/ButtonGradient";
import { Pressable, Alert, ScrollView  } from "react-native";

export default AddGame = ({ route, navigation }) => {
    const [newTeam, setNewTeam] = useState();
    const item = route.params;

    const {
        control,
        handleSubmit,
        formState: { errors, isSubmitSuccessful, isSubmitting },
    } = useForm({ defaultValues: item });

    const { colors } = useTheme();
    const styles = makeStyles(colors);

    async function addGame(data) {
        try {
            const newGame = new Parse.Object("Game");
            newGame.set("date", data.date);
            newGame.set("opponent", data.opponent);
            newGame.set("goals", data.goals);
            newGame.set("opponent_goals", data.opponent_goals);
            await   newGame.save();
            navigation.goBack();
        } catch (error) {
            console.log(error);
        }
    }

    // async function editTeam(data) {
    //     const team = new Parse.Object("Team");
    //     team.set("objectId", item.objectId);
    //     team.set("contact_name", data.contact_name.trim());
    //     team.set("contact_phone", data.contact_phone);
    //     team.set("color", data.color.trim());
    //     team.set("city", data.city.trim());
    //     team.set("name", data.name.trim());
    //     await team.save();
    //     navigation.goBack();
    // }

    // async function deleteTeam() {
    //     const team = new Parse.Object("Team");
    //     team.set("objectId", item.objectId);
    //     await team.destroy();
    //     navigation.goBack();
    // }
    const [visible, setVisible] = React.useState(false);
  
    const hideDialog = () => setVisible(false);

    return (
        <ContainerStack>
            <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Ola</Dialog.Title>
          <Dialog.ScrollArea>
            <ScrollView contentContainerStyle={{paddingHorizontal: 24}}>

              <Text>This is a scrollable area</Text>
            </ScrollView>
          </Dialog.ScrollArea>
        </Dialog>
      </Portal>
            <Controller
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Pressable onPress={() => setVisible(true)}>
                        <TextInput
                            label="Nome do time"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            style={styles.input}
                            mode="outlined"
                            activeOutlineColor={colors.primary}
                            editable={false}
                            onPressIn={() => setVisible(true)}
                            />
                        </Pressable>
                )}
                name="opponent"
            />
            {errors.name && (
                <Text style={styles.error}>Nome do time é obrigatório.</Text>
            )}
            <Controller
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        label="Data do jogo"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        style={styles.input}
                        mode="outlined"
                        activeOutlineColor={colors.primary}
                        editable={false}

                    />
                )}
                name="date"
            />
            {errors.city && (
                <Text style={styles.error}>Data do jogo é obrigatória.</Text>
            )}
            <Controller
                control={control}
                rules={{ required: false }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        label="Gols feitos"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        style={styles.input}
                        mode="outlined"
                        activeOutlineColor={colors.primary}
                        editable={false}

                    />
                )}
                name="goals"
            />
            <Controller
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        label="Gols tomados"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        style={styles.input}
                        mode="outlined"
                        activeOutlineColor={colors.primary}
                        editable={false}

                    />
                )}
                name="opponent_goals"
            />
            <ButtonGradient 
                text="Salvar Jogo"
                color={[colors.primary, colors.secondary]}
                onPress={handleSubmit(item?.objectId ? editTeam : addGame)}
                loading={isSubmitting}
                disable={isSubmitting}
            />

            {item?.objectId && (
                <ButtonGradient 
                    text="Excluir Time"
                    color={["#7d141d", "#ff1e27"]}
                    onPress={handleSubmit(deleteTeam)}
                    loading={isSubmitting}
                    disable={isSubmitting}
                    style={styles.deleteButton}
                />
            )}
        </ContainerStack>
    );
};

const MyComponent = () => {
    const [visible, setVisible] = React.useState(false);
  
    const hideDialog = () => setVisible(false);
  
    return (
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.ScrollArea>
            <ScrollView contentContainerStyle={{paddingHorizontal: 24}}>
              <Text>This is a scrollable area</Text>
            </ScrollView>
          </Dialog.ScrollArea>
        </Dialog>
      </Portal>
    );
  };