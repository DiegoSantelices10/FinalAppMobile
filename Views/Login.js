import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import * as Google from "expo-auth-session/providers/google";
import * as RootNavigation from "../Components/RootNavigation";
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
    <View>
      <Button
        
        title="Login"
        onPress={() => {
          promptAsync();
        }}
      />
    </View>
  );
}
