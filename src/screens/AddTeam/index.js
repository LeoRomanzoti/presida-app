import React, { useEffect, useState } from "react";
import { Button, Text, TextInput, useTheme } from "react-native-paper";
import { makeStyles } from "./style";
import { useForm, Controller } from "react-hook-form";
import Parse from "parse/react-native.js";
import ContainerStack from "../../components/ContainerStack";
import { LinearGradient } from "expo-linear-gradient";
import ButtonGradient from "../../components/ButtonGradient";

export default AddTeam = ({ route, navigation }) => {
  const [newTeam, setNewTeam] = useState();
  const item = route.params;

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({ defaultValues: item });

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
    const team = new Parse.Object("Team");
    team.set("objectId", item.objectId);
    team.set("contact_name", data.contact_name.trim());
    team.set("contact_phone", data.contact_phone);
    team.set("color", data.color.trim());
    team.set("city", data.city.trim());
    team.set("name", data.name.trim());
    await team.save();
    navigation.goBack();
  }

  async function deleteTeam() {
    const team = new Parse.Object("Team");
    team.set("objectId", item.objectId);
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
      {errors.name && (
        <Text style={styles.error}>Nome do time é obrigatório.</Text>
      )}
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
      {errors.city && (
        <Text style={styles.error}>Cidade do time é obrigatória.</Text>
      )}
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
      {errors.color && (
        <Text style={styles.error}>Cor do Uniforme é obrigatória.</Text>
      )}
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
      {errors.contact_name && (
        <Text style={styles.error}>Nome do contato é obrigatório.</Text>
      )}
      <Controller
        control={control}
        rules={{ required: true, maxLength: 11, minLength: 11 }}
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
      {errors.contact_phone && (
        <Text style={styles.error}>
          Telefone deverá conter 11 digitos, DDD + n.º.
        </Text>
      )}
      <ButtonGradient
        text="Salvar Time"
        color={[colors.primary, colors.secondary]}
        onPress={handleSubmit(item?.objectId ? editTeam : addTeam)}
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
