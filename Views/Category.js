import React from "react";
import s from "../styles/Style";
import * as RootNavigation from "../Components/RootNavigation";
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
  Stack,
  Center,
  HStack,
  Button
} from "native-base";


export default function Category({ navigation }) {
  const Shot = "Shot";
  const Cocktail = "Cocktail";
  const Beer = "Beer";
  const Punch = "Punch \/ Party Drink";
  const OrdinaryDrink = "Ordinary Drink";
  const HomemadeLiqueur = "Homemade Liqueur";

  return (
    <NativeBaseProvider>
      <Heading textAlign={"center"} mt={10}>Select a category</Heading>
      <Stack space={6} style={s.BoxCategory}>
        <HStack  space={3}>
          <Button style={s.ButtonCategory} onPress={() => RootNavigation.navigate({ name: "CategoryResult", params: Shot })} >Shot</Button>
          <Button style={s.ButtonCategory} onPress={() => RootNavigation.navigate({ name: "CategoryResult", params: Cocktail })}>Cocktail</Button>
        </HStack>
        <HStack space={3} >
          <Button style={s.ButtonCategory} onPress={() => RootNavigation.navigate({ name: "CategoryResult", params: Beer })} >Beer</Button>
          <Button style={s.ButtonCategory} onPress={() => RootNavigation.navigate({ name: "CategoryResult", params: Punch })} >Punch</Button>
        </HStack>
        <HStack space={3} >
          <Button style={s.ButtonCategory} onPress={() => RootNavigation.navigate({ name: "CategoryResult", params: OrdinaryDrink })} >Ordinary Drink</Button>
          <Button style={s.ButtonCategory} onPress={() => RootNavigation.navigate({ name: "CategoryResult", params: HomemadeLiqueur })} >Homenade Liqueur</Button>
        </HStack>
      </Stack>
    </NativeBaseProvider>
  );
}
