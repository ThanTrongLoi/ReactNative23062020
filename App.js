import React, { Component } from 'react'
import {Text, 
        View, 
        SafeAreaView} from 'react-native'

import Layout1 from './layout/Layout1'
import Layout2 from './layout/Layout2'
import Layout3 from './layout/Layout3'
export default class App extends Component {
  render() {
    return (
      <View style = {{flex:1}}>
        {/* <Layout1/> */}
        <Layout2/>
        {/* <Layout3/> */}
      </View>
    )
  }
}
