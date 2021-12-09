import React, { useState, useEffect } from "react";
import s from "../styles/Style";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import * as RootNavigation from "../Components/RootNavigation";
import axios from "axios";
import { ImageBackground } from "react-native";
import {
  VStack,
  Text,
  Input,
  Button,
  Icon,
  Box,
  AspectRatio,
  Image,
  Heading,
  NativeBaseProvider,
  ScrollView,
  Center,
} from "native-base";

const config = {
  dependencies: {
    "linear-gradient": require("expo-linear-gradient").LinearGradient,
  },
};

export default function Home(props) {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState([]);
  let token = props.route.params.accessToken;
  useEffect(() => {
    const fetch = () => {
      axios
        .get(
          "https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=" +
            token
        )
        .then((response) => {
          setQuery(response.data);
        })
        .catch((err) => console.log(err));
    };
    fetch();
  }, []);

  return (
    <NativeBaseProvider>
      <Box style={s.welcome}>
        <Heading textAlign="left">Welcome</Heading>
        <Text>{query.name}</Text>
      </Box>

      <Center>
        <Box>
          <VStack width="90%" space={2} alignItems="center">
            <Text mt={20}>Search for the best drinks</Text>
            <Input
              placeholder="Search"
              width="100%"
              borderRadius="4"
              onChangeText={setInput}
              py="3"
              px="4"
              fontSize="14"
              _web={{
                _focus: {
                  borderColor: "muted.200",
                  style: { boxShadow: "none" },
                },
              }}
              InputRightElement={
                <Icon
                  m="2"
                  mr="3"
                  size="6"
                  color="gray.400"
                  as={<MaterialIcons name="search" />}
                />
              }
            />
          </VStack>
          <VStack>
            <Button
              mt={4}
              onPress={() => RootNavigation.navigate({ name: "DrinkResult", params: {input : input} })}
            >
              Search
            </Button>
          </VStack>
          <VStack>
          <Text mt={20} textAlign={"center"}>Discover your Drinks of the day</Text>
            <Button
              mt={4}
              onPress={() => RootNavigation.navigate({ name: "RandomDrink" })}
            >
              Drinks Random
            </Button>
          </VStack>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
}
