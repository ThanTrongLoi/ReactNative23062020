import React, { Component } from 'react'
import {Text, 
        View, 
        SafeAreaView} from 'react-native'

export default class Layout1 extends Component {
  render() {
    return (
      <SafeAreaView style={{flex:1}}>
        <View style={{marginRight:10, 
                      marginLeft:10,
                      backgroundColor: '#f20',
                      flex:1,}}> 
          <View style = {{flex: 1,
                          justifyContent: 'center',
                          backgroundColor: 'yellow'}}>
            <View style = {{flex: 1, 
                            justifyContent: 'center', 
                            alignItems: 'center',
                            backgroundColor: 'red'}}>
              <Text>A</Text>
            </View>
            <View style = {{flex: 1, 
                            justifyContent: 'center', 
                            alignItems: 'center',
                            backgroundColor: 'green'}}>
              <Text>B</Text>
            </View>
            <View style = {{flex: 1, 
                            justifyContent: 'center', 
                            alignItems: 'center',
                            backgroundColor: 'yellow'}}>
              <Text>C</Text>
            </View>
            <View style = {{flex: 1, 
                            justifyContent: 'center', 
                            alignItems: 'center',
                            backgroundColor: 'blue'}}>
              <Text>D</Text>
            </View>
          </View>
          <View style = {{flex: 1,
                          flexDirection: 'row',
                          backgroundColor: 'green'}}>
            <View style = {{flex: 1, 
                            justifyContent: 'center', 
                            alignItems: 'center',
                            backgroundColor: 'red'}}>
              <Text>A</Text>
            </View>  
            <View style = {{flex: 1, 
                            justifyContent: 'center', 
                            alignItems: 'center',
                            backgroundColor: 'green'}}>
              <Text>B</Text>
            </View>
            <View style = {{flex: 1, 
                            justifyContent: 'center', 
                            alignItems: 'center',
                            backgroundColor: 'yellow'}}>
              <Text>C</Text>
            </View>
            <View style = {{flex: 1, 
                            justifyContent: 'center', 
                            alignItems: 'center',
                            backgroundColor: 'blue'}}>
              <Text>D</Text>
            </View>    
          </View>
        </View>
      </SafeAreaView>
    )
  }
}
