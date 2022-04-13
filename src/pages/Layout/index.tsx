import React from 'react';
import { Keyboard, StatusBar, TouchableWithoutFeedback } from 'react-native';
import Header from '../../components/Header';
import Routes from '../../routes';
import { Container } from './styles';

function Layout() {
    return (
        <Container>
            <StatusBar backgroundColor="#f0f0f5" barStyle="dark-content" />
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <>
                    <Header />
                    <Routes />
                </>
            </TouchableWithoutFeedback>
        </Container>
    )
}

export default Layout;