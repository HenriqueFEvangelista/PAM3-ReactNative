# Tutorial: Integração entre Firebase e React Native (Expo)

## Objetivo

Neste tutorial será demonstrado o processo de criação de um projeto no Firebase, configuração da autenticação e integração com um aplicativo React Native utilizando Expo.

---

# 1. Criando um Projeto no Firebase

1. Acesse o Firebase Console:
   https://console.firebase.google.com

2. Clique em **Criar Projeto**.

3. Defina um nome para o projeto.

   Exemplo:

   ```
   TesteLogin
   ```

4. Clique em **Continuar**.

5. Desative o Google Analytics (opcional).

6. Aguarde a criação do projeto.

---

# 2. Configurando Authentication

1. No menu lateral, selecione **Authentication**.
2. Clique em **Get Started**.
3. Acesse a aba **Sign-in Method**.
4. Ative o método **Email/Password**.
5. Salve as alterações.

Essa configuração permitirá que usuários realizem cadastro e login utilizando e-mail e senha.

---

# 3. Criando o Projeto React Native

Criar um projeto Expo utilizando o template Blank:

```bash
npx create-expo-app MeuFirebaseApp --template blank
```

Entrar na pasta do projeto:

```bash
cd MeuFirebaseApp
```

Executar o projeto:

```bash
npx expo start
```

---

# 4. Instalando o Firebase

Instalar a biblioteca oficial do Firebase:

```bash
npm install firebase
```

---

# 5. Obtendo as Credenciais do Firebase

1. No Firebase Console clique em **Configurações do Projeto**.
2. Role até a seção **Seus aplicativos**.
3. Clique em **Adicionar Aplicativo Web**.
4. Registre o aplicativo.

Será exibido um objeto semelhante ao seguinte:

```javascript
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_AUTH_DOMAIN",
  projectId: "SEU_PROJECT_ID",
  storageBucket: "SEU_STORAGE_BUCKET",
  messagingSenderId: "SEU_MESSAGING_SENDER_ID",
  appId: "SEU_APP_ID"
};
```

Essas informações serão utilizadas na configuração do aplicativo.

---

# 6. Criando o Arquivo firebaseConfig.js

Criar o arquivo:

```text
firebaseConfig.js
```

Conteúdo:

```javascript
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_AUTH_DOMAIN",
  projectId: "SEU_PROJECT_ID",
  storageBucket: "SEU_STORAGE_BUCKET",
  messagingSenderId: "SEU_MESSAGING_SENDER_ID",
  appId: "SEU_APP_ID"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
```

---

# 7. Implementando Cadastro e Login

Substituir o conteúdo de `App.js` por:

```javascript
import { useState } from "react";
import { View, TextInput, Button, Alert } from "react-native";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "firebase/auth";

import { auth } from "./firebaseConfig";

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
```

---

# 8. Testando a Integração

## Cadastro

Preencher os campos:

```text
Email: teste@email.com
Senha: 123456
```

Clicar em:

```text
Cadastrar
```

Resultado esperado:

```text
Usuário criado!
```

---

## Login

Após o cadastro, clicar em:

```text
Entrar
```

Resultado esperado:

```text
Login realizado!
```

---

# 9. Verificando no Firebase

1. Abrir o Firebase Console.
2. Acessar Authentication.
3. Abrir a aba Users.

O usuário criado deverá aparecer na lista de usuários cadastrados.

---

# Resultado Obtido

* Projeto Firebase criado com sucesso.
* Authentication configurado.
* Aplicativo React Native criado utilizando Expo.
* Firebase integrado ao aplicativo.
* Cadastro de usuários funcionando.
* Login de usuários funcionando.
* Comunicação entre aplicativo e Firebase validada.

---

# Conclusão

A integração entre Firebase e React Native foi realizada com sucesso utilizando o serviço Firebase Authentication. Foi possível criar usuários, autenticar usuários existentes e validar a comunicação entre a aplicação móvel e os serviços do Firebase, demonstrando o funcionamento correto da configuração.
