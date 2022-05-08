import React, { useEffect, useContext } from "react";
import { Container, LoadingIcon } from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

import { UserContext } from "../../contexts/UserContext";
import Api from "../../Api";

import GymLogo from "../../assets/gym.svg";

export default () => {
  const { dispatch: userDispatch } = useContext(UserContext);
  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        let res = await Api.checkToken(token);
        if (res.id) {
          navigation.reset({
            routes: [{ name: "MainTab" }],
          });
        } else {
          navigation.navigate("SignIn");
        }
      } else {
        navigation.navigate("SignIn");
      }
    };
    checkToken();
  }, []);

  return (
    <Container>
      <GymLogo width="100%" height="160" />
      <LoadingIcon size="large" color="#FFFFFF" />
    </Container>
  );
};
