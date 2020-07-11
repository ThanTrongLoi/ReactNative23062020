import React, { Component } from 'react'
import {Text, 
        View, 
        SafeAreaView} from 'react-native'

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{flex:1}}>
        <View style={{marginRight:10, 
                      marginLeft:10,
                      backgroundColor: '#f20',
                      flex:1,
                      // flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems:'center'}}>
          <View style={{backgroundColor:'yellow',
                          flex:1}}>
            <Text>App</Text>
          </View>
          <Text style={{backgroundColor:'green',
                        flex:1}}>App</Text>
        </View>
      </SafeAreaView>
    )
  }
}
