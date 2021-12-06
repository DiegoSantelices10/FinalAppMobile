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
} from "native-base";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Category() {
  const [query, setQuery] = useState([]);
  URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007`;

  useEffect(() => {
    const fetch = () => {
      console.log("----------------nueva respuesta -----------------------");
      axios
        .get(URL)
        .then((response) => {
          setQuery(response.data.drinks);
        })
        .catch((err) => console.log(err));
    };
    fetch();
  }, []);


  return (
    <NativeBaseProvider>
      <ScrollView>
        {query.map((item) => (
          <Box
            key={item.idDrink}
            rounded="lg"
            overflow="hidden"
            width="80%"
            shadow={1}
            mb={5}
            left={10}
            _light={{ backgroundColor: "gray.50" }}
            _dark={{ backgroundColor: "black" }}
          >
            <Box backgroundColor={"black"}>
              <Heading
                key={item}
                textAlign="center"
                fontSize={20}
                color={"white"}
              >
                {item.strDrink}
              </Heading>
              <AspectRatio ratio={16 / 9}>
                <Image
                  source={{
                    uri: `${item.strDrinkThumb}`,
                  }}
                  alt="image"
                />
              </AspectRatio>
              <Text textAlign="center" p={2} color={"white"}>
                {item.strInstructions}
              </Text>
            </Box>
          </Box>
        ))}
      </ScrollView>
    </NativeBaseProvider>
  );
}
