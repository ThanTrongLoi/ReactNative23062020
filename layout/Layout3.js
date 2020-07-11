import React, { Component } from 'react'
import {Text, 
        View, 
        SafeAreaView, 
        StyleSheet } from 'react-native'

export default class Layout3 extends Component {
    render() {
        return (
            <SafeAreaView style = {styles.container}>
                <View style={styles.box1}>
                    <View style = {styles.textBox1}>
                        <Text style = {styles.text}>1</Text>
                    </View>
                    <View style = {styles.textBox2}>
                        <Text style = {styles.text}>2</Text>
                    </View>
                </View>
                <View style={styles.box2}>
                    <View style = {styles.textBox34}>
                        <View style = {styles.textBox3}>
                            <Text style = {styles.text}>3</Text>
                        </View>
                        <View style = {styles.textBox4}>
                            <Text style = {styles.text}>4</Text>
                        </View>
                    </View>
                    <View style = {styles.textBox5}>
                        <Text style = {styles.text}>5</Text>
                    </View>
                </View>
                <View style={styles.box3}>
                    <View style = {styles.textBox6}>
                        <Text style = {styles.text}>6</Text>
                    </View>
                    <View style = {styles.textBox7}>
                        <Text Text style = {styles.text}>7</Text>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    box1:{
        flex: 1/4,
        flexDirection: 'row',
        // backgroundColor: 'red'
    },
    textBox1: {
        flex: 1/3,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#000',
        borderWidth: 10
    },
    textBox2: {
        flex: 2/3,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#000000',
        borderBottomWidth: 10,
        borderRightWidth: 10,
        borderTopWidth: 10
    },
    box2:{
        flex: 2/4,
        flexDirection: 'row',
        // backgroundColor: 'green',
        
    },
    textBox34: {
        flex: 3/4,
    },
    textBox3: {
        flex: 1,
        backgroundColor: '#388e3c',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#000000',
        borderLeftWidth: 10,
        borderBottomWidth: 10,
        borderRightWidth: 10
    },
    textBox4: {
        flex: 1,
        backgroundColor: '#7b1fa2',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#000000',
        borderLeftWidth: 10,
        borderBottomWidth: 10,
        borderRightWidth: 10
    },
    textBox5: {
        flex: 1/4,
        backgroundColor: '#e1bee7',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#000000',
        borderRightWidth: 10,
        borderBottomWidth: 10
    },
    box3:{
        flex: 1/4,
        flexDirection: 'row',
        backgroundColor: 'yellow',
    },
    textBox6: {
        flex: 1,
        backgroundColor: '#ff5722',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#000000',
        borderLeftWidth: 10,
        borderBottomWidth: 10,
        borderRightWidth: 10
    },
    textBox7: {
        flex: 1,
        backgroundColor: '#0d47a1',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#000000',
        borderRightWidth: 10,
        borderBottomWidth: 10
    },
    text: {
        color: '#000000',
        fontSize: 100
    }
})