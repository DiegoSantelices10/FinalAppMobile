import React, { useState, useEffect } from "react";
import s from "../styles/Style";
import * as RootNavigation from "../Components/RootNavigation";
import axios from "axios";
import {
  Text,
  Box,
  AspectRatio,
  Image,
  Heading,
  NativeBaseProvider,
  ScrollView,
} from "native-base";

export default function Home(props) {
  const [query, setQuery] = useState([""]);
  let token = props.route.params.accessToken;
  useEffect(() => {
    const fetch = () => {
      axios
        .get("https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=" + token)
        .then((response) => {
          setQuery(response);
          console.log(response.data)
        })
        .catch((err) => console.log(err));
      // console.log(result.data.data.results)
    };
    fetch();
  }, []);

  return (
    <NativeBaseProvider>
      <ScrollView>
          <Box
            
            rounded="lg"
            overflow="hidden"
            width="80%"
            mb={5}
            left={10}
            _light={{ backgroundColor: "gray.50" }}
            _dark={{ backgroundColor: "black" }}
          >
            <Box backgroundColor={"black"}>
              <Heading
            
                textAlign="center"
                fontSize={20}
                color={"white"}
              >
              </Heading>
              <AspectRatio ratio={16 / 9}>
                <Image
                  alt="image"
                />
              </AspectRatio>
              <Text textAlign="center" p={2} color={"white"}>
              </Text>
            </Box>
          </Box>
      </ScrollView>
    </NativeBaseProvider>
  );
}




const config = {
  dependencies: {
    "linear-gradient": require("expo-linear-gradient").LinearGradient,
  },
}; 

