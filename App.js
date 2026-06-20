import { useState } from "react";
import { View, TextInput, Button, Alert } from "react-native";
import { auth, db } from "./firebaseConfig";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "firebase/auth";

export default function App() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function cadastrar() {
    try {
      await createUserWithEmailAndPassword(
        auth,
        email,
        senha
      );

      Alert.alert("Sucesso", "Usuário criado!");
    } catch (erro) {
      Alert.alert("Erro", erro.message);
    }
  }

  async function login() {
    try {
      await signInWithEmailAndPassword(
        auth,
        email,
        senha
      );

      Alert.alert("Sucesso", "Login realizado!");
    } catch (erro) {
      Alert.alert("Erro", erro.message);
    }
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        padding: 20
      }}
    >
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <Button
        title="Cadastrar"
        onPress={cadastrar}
      />

      <Button
        title="Entrar"
        onPress={login}
      />
    </View>
  );
}