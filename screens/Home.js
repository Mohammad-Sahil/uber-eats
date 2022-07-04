import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import HeaderTabs from '../components/HeaderTabs'

export default function Home() {
  return (
    <SafeAreaView>
      <HeaderTabs style={{marginHorizontal: 200}}/>
    </SafeAreaView>
  )
}