import { View, Text, Image, StatusBar } from "react-native";
import React from "react";
import { ButtonCircle } from "./Button";
import { assets } from "../constants";

const DetailHeader = ({ data, navigation }) => {
  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <View style={{ width: "100%", height: 373 }}>
      <Image
        style={{ width: "100%", height: "100%" }}
        source={data.image}
        resizeMode="cover"
      />
      <ButtonCircle
        left={15}
        top={StatusBar.currentHeight + 10}
        imgUrl={assets.left}
        handlePress={handleBack}
      />
      <ButtonCircle
        right={15}
        top={StatusBar.currentHeight + 10}
        imgUrl={assets.heart}
      />
    </View>
  );
};

export default DetailHeader;
