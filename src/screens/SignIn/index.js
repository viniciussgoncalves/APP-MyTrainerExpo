import React, { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { UserContext } from "../../contexts/UserContext";

import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold,
} from "./styles";

import Api from "../../Api";

import SignInput from "../../components/SignInput";

import GymLogo from "../../assets/gym.svg";
import EmailIcon from "../../assets/email.svg";
import LockIcon from "../../assets/lock.svg";

export default () => {
  const { dispatch: userDispatch } = useContext(UserContext);
  const navigation = useNavigation();

  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");

  const handleSignClick = async () => {
    if (emailField != "" && passwordField != "") {
      let json = await Api.SignIn(emailField, passwordField);
      if (json.accessToken) {
        await AsyncStorage.setItem("token", json.accessToken);

        navigation.reset({
          routes: [{ name: "MainTab" }],
        });
      } else {
        alert("E-mail e/ou senha errados!");
      }
    } else {
      alert("Preencha os campos!");
    }
  };

  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{ name: "SignUp" }],
    });
  };

  return (
    <Container>
      <GymLogo width="100%" height="160" />

      <InputArea>
        <SignInput
          IconSvg={EmailIcon}
          placeholder="Digite seu e-mail"
          value={emailField}
          onChangeText={(t) => setEmailField(t)}
          autoCapitalize="none"
        />

        <SignInput
          IconSvg={LockIcon}
          placeholder="Digite sua senha"
          value={passwordField}
          onChangeText={(t) => setPasswordField(t)}
          password={true}
          autoCapitalize="none"
        />

        <CustomButton onPress={handleSignClick}>
          <CustomButtonText>LOGIN</CustomButtonText>
        </CustomButton>
      </InputArea>

      <SignMessageButton onPress={handleMessageButtonClick}>
        <SignMessageButtonText>
          Ainda não possui uma conta?
        </SignMessageButtonText>
        <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
};
