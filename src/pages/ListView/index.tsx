import { useNavigation } from "@react-navigation/native";
import React from "react";
import Button from "../../components/Button";
import { propsStack } from "../../routes/Stack/Models";
import { List, Text } from "./styles";

function ListView() {
    const { goBack } = useNavigation<propsStack>();
    const dados = [
        { key: 'Devin' },
        { key: 'Dan' },
        { key: 'Dominic' },
        { key: 'Jackson' },
        { key: 'James' },
        { key: 'Joel' },
        { key: 'John' },
        { key: 'Jillian' },
        { key: 'Jimmy' },
        { key: 'Julie' },
    ]
    return (
        <>
            <List
                data={dados}
                renderItem={({ item }: any) => <Text>{item.key}</Text>}
            />
            <Button
                title='Novo Cadastro'
                onPress={() => goBack()}
            />
        </>
    );
}

export default ListView;