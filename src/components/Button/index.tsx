import React from "react";
import { PressableProps } from 'react-native'
import { Container, Title } from './styles'
interface PropsButton extends PressableProps {
    title: string
}

function Button({ title, ...rest }: PropsButton) {
    return (
        <Container {...rest}>
            <Title>{title}</Title>
        </Container>
    )
}

export default Button;