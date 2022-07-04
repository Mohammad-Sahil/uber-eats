import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import HeaderTabs from '../components/home/HeaderTabs'
import SearchBar from '../components/home/SearchBar'
import Categories from '../components/home/Categories'

export default function Home() {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
    <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs style={{marginHorizontal: 200}}/>
        <SearchBar/>
    </View>
        <Categories/>
    </SafeAreaView>
  )
}