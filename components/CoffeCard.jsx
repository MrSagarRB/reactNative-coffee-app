import { View, Text } from "react-native";
import React from "react";

const CoffeCard = (item) => {
  return (
    <View className="bg-orange-400 h-[350] w-[250] rounded-[40px]">
      <View>
        <Text>{item.name}</Text>
      </View>
    </View>
  );
};

export default CoffeCard;
