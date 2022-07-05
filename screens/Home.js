import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderTabs from '../components/home/HeaderTabs'
import SearchBar from '../components/home/SearchBar'
import Categories from '../components/home/Categories'
import RestaurantItems, { localRestaurants } from '../components/home/RestaurantItems'
import BottomTabs from '../components/home/BottomTabs'
import { Divider } from 'react-native-elements'

const YELP_API_KEY =
  "30684xSNpAusWhxNibOMV3eXBz5ZjjwfUzsTGHnm4OGd9FLd-xZBPvkwAHYtJ-vHDSN1GOwpOW3McmJINF8GIt3WPT7XB9OWMwrdT1VWvExS9stS4A5fDld6mQ3DYnYx";

export default function Home() {
    const [restaurantData, setRestaurantData] = useState(localRestaurants);
    const [city, setCity] = useState("San Francisco");
    const [activeTab, setActiveTab] = useState("Delivery");
    console.log(activeTab)
    const getRestaurantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
        const apiOptions = {
          headers: {
            Authorization: `Bearer ${YELP_API_KEY}`,
          },
        };
    
        return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
      };
    
      useEffect(() => {
        getRestaurantsFromYelp();
      }, [city, activeTab]);
      
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
    <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            style={{marginHorizontal: 200}}
         />
        <SearchBar cityHandler={setCity} />
    </View>
    <ScrollView showsVerticalScrollIndicator={false}>
        <Categories/>
        <RestaurantItems
          restaurantData={restaurantData}
        //   navigation={navigation}
        />
    </ScrollView>
      <Divider width={1} />
        <BottomTabs/>
    </SafeAreaView>
  )
}