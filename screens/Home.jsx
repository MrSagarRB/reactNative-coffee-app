import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { MagnifyingGlassIcon, MapPinIcon } from "react-native-heroicons/solid";
import { BellIcon } from "react-native-heroicons/outline";
import coffeeCategories from "../data/coffeeCategories.json";
import Carousel from "react-native-snap-carousel";
import coffeeCardData from "../data/coffeeCard.json";
import CoffeCard from "../components/CoffeCard";

const Home = () => {
  const [activeCategory, setActiveCategory] = useState(1);
  return (
    <View className="flex-1 relative bg-white">
      <StatusBar />
      <Image
        source={require("../assets/beanbackground1.png")}
        className="w-full absolute -top-5  opacity-10"
        style={{ height: 220 }}
      />
      <SafeAreaView className="flex-1">
        {/* Avtar */}
        <View className="flex-row justify-between items-center px-4 ">
          <Image
            source={require("../assets/avtar.png")}
            className="h-9 w-9  "
          />
          <View className="flex-row items-center space-x-2">
            <MapPinIcon size="25" color={"orange"} />
            <Text className="text-base font-semibold">New York UK</Text>
          </View>
          <BellIcon size="27" color={"black"} />
        </View>
        {/* SearchBar */}
        <View className="mx-4 mt-16">
          <View className="flex-row justify-center rounded-full p-1 bg-[#e6e6e6]">
            <TextInput
              placeholder="Search"
              className="p-4 flex-1 font-semibold text-gray-700"
            />
            <TouchableOpacity className="rounded-full items-center justify-center  bg-orange-300 w-fit h-fit p-3">
              <MagnifyingGlassIcon color="white" size="25" strokeWidth={2} />
            </TouchableOpacity>
          </View>
        </View>
        {/* Categories */}
        <View className="px-5 mt-6">
          <FlatList
            horizontal
            data={coffeeCategories}
            keyExtractor={(item) => item.id}
            className="overflow-visible"
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  backgroundColor:
                    activeCategory == item.id ? "orange" : "rgba(0,0,0,0.07)",
                }}
                className={`p-4 px-5 rounded-full mr-2  `}
                onPress={() => setActiveCategory(item.id)}
              >
                <Text
                  className={`font-semibold ${
                    activeCategory == item.id ? "text-white" : "text-black"
                  }`}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
        {/* Coffee card */}
        <View className="mt-10">
          <Carousel
            containerCustomStyle={{ overflow: "visible" }}
            data={coffeeCardData}
            firstItem={1}
            inactiveSlideOpacity={0.75}
            inactiveSlideScale={0.77}
            sliderWidth={400}
            itemWidth={260}
            slideStyle={{ display: "flex", alignItems: "center" }}
            renderItem={({ item }) => <CoffeCard item={item} />}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Home;
