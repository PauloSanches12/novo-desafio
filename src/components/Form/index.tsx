import React from "react";
import { Container, Main, Title } from "./styles";
import Button from '../Button';
import { ControlledInput } from "../ControlledInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../validation/FormValidation";
import { FormData } from "../../@types";
import { NativeSyntheticEvent, ScrollView, TextInputEndEditingEventData } from "react-native";
import api from "../../service/api";
// import getRealm from "../../database/db";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes/Stack/Models";

function Form() {
    const { navigate } = useNavigation<propsStack>();
    // const [repositories, setRepositories] = useState<FormData>();
    // const [atualizarInfo, setAtualizaInfo] = useState<any>();

    // useEffect(() => {
    //     async function loadDados() {
    //         const realm = await getRealm();

    //         const data = realm.objects("Users").sorted("_id", true);
    //         setAtualizaInfo(data)
    //     }

    //     loadDados()
    // }, [])

    const { control, handleSubmit, formState: { errors }, setValue } = useForm<FormData>({
        resolver: yupResolver(schema)
    });

    async function handleRegisterAdress(data: FormData) {
        // const realm = await getRealm();

        // realm.write(() => {
        //     realm.create("Users", data)
        // })
        console.log(data);
        navigate("ListView")

    }

    function checkCEP(cep: NativeSyntheticEvent<TextInputEndEditingEventData>): void {
        const numberCep = cep.nativeEvent.text.replace(/\D/g, '');

        api(numberCep).then(response => (
            setValue("street", response.data.logradouro),
            setValue("city", response.data.localidade),
            setValue("state", response.data.uf),
            setValue("district", response.data.bairro)
        ))
            .catch(() => console.log("ocorreu um erro"));
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <Container>
                <Main>
                    <Title>Dados Pessoais</Title>
                    <ControlledInput
                        name="name"
                        control={control}
                        placeholder="Nome"
                        error={errors.name}
                    />
                    <ControlledInput
                        name="age"
                        control={control}
                        keyboardType="numeric"
                        placeholder="Idade"
                        error={errors.age}
                    />
                    <ControlledInput
                        name="cpf"
                        keyboardType="numeric"
                        control={control}
                        placeholder="CPF"
                        error={errors.cpf}
                    />
                    <ControlledInput
                        name="rg"
                        keyboardType="numeric"
                        control={control}
                        placeholder="RG"
                        error={errors.rg}
                    />
                </Main>

                <Main>
                    <Title>Endereço</Title>
                    <ControlledInput
                        name="cep"
                        control={control}
                        placeholder="CEP"
                        keyboardType="numeric"
                        onEndEditing={checkCEP}
                        error={errors.cep}
                    />
                    <ControlledInput
                        name="street"
                        control={control}
                        placeholder="Rua"
                    />
                    <ControlledInput
                        name="number"
                        control={control}
                        keyboardType="numeric"
                        placeholder="Número"
                        error={errors.number}
                    />
                    <ControlledInput
                        name="district"
                        control={control}
                        placeholder="Bairro"
                    />
                    <ControlledInput
                        name="city"
                        control={control}
                        placeholder="cidade"
                    />
                    <ControlledInput
                        name="state"
                        control={control}
                        placeholder="Estado"
                    />
                </Main>

                <Button
                    title='Cadastrar'
                    onPress={handleSubmit(handleRegisterAdress)}
                />
            </Container>
        </ScrollView>
    )
}

export default Form;