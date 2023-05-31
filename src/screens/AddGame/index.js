import React, { useEffect, useState } from "react";
import { Dialog, Portal, Text, TextInput, useTheme } from "react-native-paper";
import { makeStyles } from "./style";
import { useForm, Controller, set } from "react-hook-form";
import Parse from "parse/react-native.js";
import ContainerStack from "../../components/ContainerStack";
import ButtonGradient from "../../components/ButtonGradient";
import {
  Pressable,
  Alert,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export default AddGame = ({ route, navigation }) => {
  const [newTeam, setNewTeam] = useState();
  const [teams, setTeams] = useState(undefined);
  const [show, setShow] = useState(false);

  const item = route.params;

  useEffect(() => {
    async function loadTeams() {
      const query = new Parse.Query("Team");
      const result = await query.findAll();

      setTeams(result);
    }
    loadTeams();
  }, []);

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({ defaultValues: item });

  const { colors } = useTheme();
  const styles = makeStyles(colors);

  async function addGame(data) {
    try {
      const newGame = new Parse.Object("Game");
      const convertedDate = new Date(data.date.split("/").reverse().join("-"));
      newGame.set("date", convertedDate);
      newGame.set("opponent", data.opponent);
      newGame.set("goals", data.goals);
      newGame.set("opponent_goals", data.opponent_goals);
      await newGame.save();
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  }

  function selectTeam(value) {
    setVisible(false);
    setValue("opponent", value);
  }

  function selectDate(event, selectedDate) {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    const date = selectedDate.toLocaleString("pt-BR", options);
    if (Platform.OS === "android") {
      setShow(false);
    }
    setValue("date", date);
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
          <Dialog.Title>Selecione o Adversário</Dialog.Title>
          <Dialog.ScrollArea>
            <FlatList
              data={teams}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => selectTeam(item)}>
                  <Text style={styles.teamsList}>{item.get("name")}</Text>
                </TouchableOpacity>
              )}
            />
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
              value={value && value.get("name")}
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
          <Pressable onPress={() => setShow(true)}>
            <TextInput
              label="Data do jogo"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.input}
              mode="outlined"
              activeOutlineColor={colors.primary}
              editable={false}
              onPressIn={() => setShow(true)}
            />
          </Pressable>
        )}
        name="date"
      />
      {errors.city && (
        <Text style={styles.error}>Data do jogo é obrigatória.</Text>
      )}
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={new Date()}
          mode={"date"}
          is24Hour={true}
          display="spinner"
          onChange={selectDate}
        />
      )}
      {show && Platform.OS === "ios" && (
        <ButtonGradient
          text="OK"
          color={[colors.primary, colors.secondary]}
          onPress={() => setShow(false)}
        />
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
        rules={{ required: false }}
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
