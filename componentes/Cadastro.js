import { View, Text, TextInput, Button, StyleSheet } from "react-native"
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Cadastro() {
    const [nomeUsuario, setNomeUsuario] = useState();
    const [senha, setSenha] = useState();
    const [listaUsuarios, setListaUsuarios] = useState([]);

    const cadastrar = async () => {
        const obj = {
            nomeUsuario, senha
        }

        const copy = [...listaUsuarios, obj];

        await AsyncStorage.setItem('usuarios', JSON.stringify(copy));

        setListaUsuarios(copy);

        alert('Cadastrei');
    }

    return (
        <View>
            <Text>Cadastro</Text>
            <TextInput placeholder="Nome de usuário" value={nomeUsuario} onChangeText={setNomeUsuario}></TextInput>
            <TextInput placeholder="Senha" value={senha} onChangeText={setSenha}></TextInput>
            <Button title="Cadastrar" color="#555" onPress={cadastrar}></Button>
        </View>
    )
}