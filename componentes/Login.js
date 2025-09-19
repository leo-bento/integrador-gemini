import { View, Text, Button, TextInput, StyleSheet } from "react-native"
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login() {
    const [nomeUsuario, setNomeUsuario] = useState();
    const [senha, setSenha] = useState();

    const entrar = async () => {
        const data = await AsyncStorage.getItem('usuarios');
        const listaUsuarios = data ? JSON.parse(data) : [];

        let isValid = false;

        for(const i in listaUsuarios) {
            if(listaUsuarios[i].nomeUsuario === nomeUsuario && listaUsuarios[i].senha === senha) {
                isValid = true;

                break;
            }
        }

        if (isValid) {
            alert('Acesso garantido');
        }
        else {
            alert('Acesso negado');
        }
        
    }

    return (
        <View>
            <Text>Login</Text>

            <TextInput
                placeholder="Nome de usuário"
                value={nomeUsuario}
                onChangeText={setNomeUsuario}
            ></TextInput>

            <TextInput
                placeholder="Senha"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
            ></TextInput>

            <Button
                title="Entrar"
                color='#28a745'
                onPress={entrar}
            ></Button>
        </View>
    )
}