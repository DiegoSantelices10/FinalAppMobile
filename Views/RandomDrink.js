import React from "react";
import s from "../styles/Style";
import {
  VStack,
  Box,
  AspectRatio,
  Divider,
  NativeBaseProvider,
  ScrollView,
  Image,
  Heading,
  Text,
  Center,
} from "native-base";
import axios from "axios";
import { useState, useEffect } from "react";

const config = {
  dependencies: {
    "linear-gradient": require("expo-linear-gradient").LinearGradient,
  },
};

export default function RandomDrink() {
  const [query, setQuery] = useState([]);
  URL = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;

  useEffect(() => {
    const fetch = () => {
      axios
        .get(URL)
        .then((response) => {
          setQuery(response.data.drinks);
        })
        .catch((err) => console.log(err));
    };
    fetch();
  }, []);

  console.log("--------category-------------");
  console.log(query);
  return (
    <NativeBaseProvider>
      {query.map((item) => (
        <Box key={item.idDrink} position="relative">
          <Box position="absolute" width="100%" mb={5}>
            <Box>
              <AspectRatio ratio={3 / 3}>
                <Image
                  source={{
                    uri: `${item.strDrinkThumb}`,
                  }}
                  alt="image"
                />
              </AspectRatio>
            </Box>
          </Box>
          <Box style={s.cardDrink} position="relative" borderWidth="3">
            <Box margin={5}>
              <Heading color="primary.50" textAlign={"center"}>
                {item.strDrink}
              </Heading>
              <Box alignItems={"center"} >
                <Heading color="primary.50" 
                fontWeight={"bold"}
                mt={7}
                
                >Ingredients</Heading>
                <Text color="primary.50">{item.strIngredient1}</Text>
                <Text color="primary.50">{item.strIngredient2}</Text>
                <Text color="primary.50">{item.strIngredient3}</Text>
                <Text color="primary.50">{item.strIngredient4}</Text>
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </NativeBaseProvider>
  );
}
