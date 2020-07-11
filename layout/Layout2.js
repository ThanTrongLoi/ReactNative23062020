import React, { Component } from 'react'
import { Text, View, SafeAreaView, StyleSheet } from 'react-native'

export default class Layout2 extends Component {
    render() {
        return (
            <SafeAreaView style ={{flex:1}}>
                <View style={{flex:1/3,
                            backgroundColor: 'red',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderColor: '#000000',
                            borderWidth: 8}}>
                    <Text style={styles.textBox}>1</Text>
                </View>
                <View style={{flex:2/3,
                            flexDirection: 'row',
                            backgroundColor: 'green'}}>
                    <View style={{flex:1/3,
                                backgroundColor: 'yellow',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderColor: '#000000',
                                borderLeftWidth: 8,
                                borderBottomWidth: 8,
                                borderRightWidth: 8}}>
                        <Text style={styles.textBox}>2</Text>
                    </View>
                    <View style={{flex:2/3,
                                backgroundColor: 'grey',
                                }}>
                        <View style={{flex: 2/3,
                                    backgroundColor: 'blue',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderColor: '#000000',
                                    borderBottomWidth: 8,
                                    borderRightWidth: 8}}>
                            <Text style={styles.textBox}>3</Text>
                        </View>
                        <View style={{flex:1/3,
                                    flexDirection: 'row'}}>
                            <View style={{flex:1,
                                        backgroundColor: 'pink',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderColor: '#000000',
                                        borderBottomWidth: 8,
                                        borderRightWidth: 8}}>
                                <Text style={styles.textBox}>4</Text>
                            </View>
                            <View style={{flex:1,
                                        backgroundColor: 'purple',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderColor: '#000000',
                                        borderBottomWidth: 8,
                                        borderRightWidth: 8}}>
                                <Text style={styles.textBox}>5</Text>
                            </View>
                        </View>
                    </View>
                </View>

            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    textBox: {
        color: '#000000',
        fontSize: 100
    }
})
