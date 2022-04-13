import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { propsNavitationStack } from "./Models";
import Form from "../../components/Form";
import ListView from "../../pages/ListView";

const { Navigator, Screen } = createNativeStackNavigator<propsNavitationStack>();

export default function () {
    return (
        <Navigator initialRouteName="Form" screenOptions={{ headerShown: false }}>
            <Screen name="Form" component={Form} />
            <Screen name="ListView" component={ListView} />
        </Navigator>
    )
}