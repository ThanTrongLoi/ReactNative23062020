import React, { Component } from 'react'
import {Text, 
        View, 
        SafeAreaView, 
        StyleSheet } from 'react-native'

export default class Layout4 extends Component {
    render() {
        return (
            <SafeAreaView style = {styles.container}>
                <View style = {styles.box1}>
                    <View style = {styles.textBox1}>
                        <Text style = {styles.text}>1</Text>
                    </View>
                    <View style = {styles.textBox34}>
                        <View style = {styles.textBox3}>
                            <Text style = {styles.text}>3</Text>
                        </View>
                        <View style = {styles.textBox4}>
                            <Text style = {styles.text}>4</Text>
                        </View>
                    </View>
                </View>
                <View style = {styles.box2}>
                    <View style = {styles.textBox2}>
                        <Text style = {styles.text}>2</Text>
                    </View>
                    <View style = {styles.textBoxGr}>
                        <View style = {styles.textBox56}>
                            <View style = {styles.textBox5}>
                                <Text style = {styles.text}>5</Text>
                            </View>
                            <View style = {styles.textBox6}>
                                <Text style = {styles.text}>6</Text>
                            </View>
                        </View>
                        <View style = {styles.textBox789}>
                            <View style = {styles.textBox7}>
                                <Text style = {styles.text}>7</Text>
                            </View>
                            <View style = {styles.textBox8}>
                                <Text style = {styles.text}>8</Text>
                            </View>
                            <View style = {styles.textBox9}>
                                <Text style = {styles.text}>9</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    box1: {
        flex: 1,
        flexDirection: 'row',
    },
    textBox1: {
        flex: 1/6,
        backgroundColor: '#76d275',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBox34: {
        flex: 5/6,
    },
    textBox3: {
        flex: 1,
        backgroundColor: '#d50000',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBox4: {
        flex: 1,
        backgroundColor: '#ffa4a2',
        justifyContent: 'center',
        alignItems: 'center'
    },
    box2: {
        flex: 1,
        flexDirection: 'row',
    },
    textBox2: {
        flex:1/6,
        backgroundColor: '#fff176',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBoxGr:{
        flex: 5/6,
        flexDirection: 'row'
    },
    textBox56:{
        flex: 2/3,
    },
    textBox5: {
        flex: 1,
        backgroundColor: '#6ec6ff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBox6: {
        flex: 1,
        backgroundColor: '#5e35b1',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBox789: {
        flex: 1/3,
    },
    textBox7: {
        flex: 1,
        backgroundColor: '#880e4f',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBox8: {
        flex: 1,
        backgroundColor: '#d84315',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBox9: {
        flex: 1,
        backgroundColor: '#9e9e9e',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#000000',
        fontSize: 50
    }
})