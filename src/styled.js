import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1,
    align-self: center,
    padding-top: 16,
    background-color: #fff,
`;

export const Title = styled.Text`
    font-size: 24;
`;

export const Result = styled.Text`
    margin-top: 18;
    font-size: 20;
`;

export const Button = styled.TouchableOpacity`
    margin-top: 18,
    width: 200,
    padding-vertical: 8,
    background-color: purple,
    justify-content: center,
    align-items: center,
    border-radius: 8,
`;

export const TitleButton = styled.Text`
    color: "white",
    font-size: 20,
`;

export const Input = styled.TextInput`
    margin-top: 18,
    width: 250,
    padding-vertical: 8,
    padding-horizontal: 4,
    border-width: 1,
    border-color: "#d6d6d6",
    border-radius: 4,
`;