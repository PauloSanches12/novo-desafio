import { TextInput } from 'react-native';
import styled, { css } from 'styled-components/native';

interface Props {
    isFocused: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  margin-bottom: 12px;
`;

export const InputText = styled(TextInput) <Props>`
  flex: 1;
  background-color: #FFFFFF;
  color: #656569;
  padding: 18px 23px;
  border-radius: 7px;

  ${({ isFocused }) => isFocused && css`
    border-bottom-width: 2px;
    border-bottom-color: #34CB79;    
  `};
`;