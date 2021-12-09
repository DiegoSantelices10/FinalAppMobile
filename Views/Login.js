import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import * as Google from "expo-auth-session/providers/google";
import * as RootNavigation from "../Components/RootNavigation";
import s from "../styles/Style";
import { Box, Image, NativeBaseProvider, Button } from "native-base";

export default function Login({ navigation }) {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId:
      "983262100398-lsjepuiu06q8pl7t2tbveqnl9668aapm.apps.googleusercontent.com",
  });

  React.useEffect(() => {
    if (response?.type === "success") {
      console.log(response);
      RootNavigation.navigate("MenuDrawer", {
        screen: "Home",
        params: response.authentication,
      });
    }
  }, [response]);

  return (
    <NativeBaseProvider>
      <ImageBackground
        source={require("../assets/fondo-negro.jpg")}
        resizeMode="cover"
        style={s.image}
      >
        <Box>
          <Image
            style={s.userImagenLogin}
            source={require("../assets/logobedidas.png")}
            alt="logo"
          />
        </Box>

        <Box>
          <Button
            style={s.buttonSingIn}
            onPress={() => {
              promptAsync();
            }}
          >
            Sign In With Google
          </Button>
          <Image
            style={s.googleIcon}
            source={require("../assets/iconogoogle.png")}
            alt="Alternate Text"
          />
        </Box>
      </ImageBackground>
    </NativeBaseProvider>
  );
}
