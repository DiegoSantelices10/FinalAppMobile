import React, {useState, useEffect} from 'react'
import axios from "axios";
import {
    Box,
    AspectRatio,
    NativeBaseProvider,
    ScrollView,
    Image,
    Center
  } from "native-base";

export default function CategoryResult(props) {

const nombre = `${props.route.params}`;
  const [query, setQuery] = useState([]);
  URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${nombre}`;

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

  return (
    <NativeBaseProvider>
      <ScrollView>
        {query.map((item) => (
          <Box key={item.idDrink}>
            <Box>
              <AspectRatio ratio={4 / 5}>
                <Image
                  resizeMode="cover"
                  source={{
                    uri: `${item.strDrinkThumb}`,
                  }}
                  alt="image"
                />
              </AspectRatio>
              <Center
                bg="lightBlue.700"
                _dark={{
                  bg: "violet.400",
                }}
                _text={{
                  color: "warmGray.50",
                  fontWeight: "700",
                  fontSize: "xl",
                }}
                position="absolute"
                bottom="0"
                px="3"
                py="1.5"
              >
                {item.strDrink}
              </Center>
            </Box>
          </Box>
        ))}
      </ScrollView>
    </NativeBaseProvider>
  );
}
