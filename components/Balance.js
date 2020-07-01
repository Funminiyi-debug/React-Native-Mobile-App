import React from 'react' 
import { View, Text, StyleSheet } from 'react-native';

function Balance ({transactions}) {
   
     const calcTotal = transactions.reduce((total, num) => total + num, 0)
    return (
        <View style={styles.balance} >
            <Text style={styles.balanceText}>Your Balance</Text>
            <Text style={styles.balanceTotal}>${calcTotal}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    balance: {
        padding: 5,
        display: "flex",
        backgroundColor: "#f0e3e3",
        borderRightWidth: 5, 
        borderColor: "#c0392b",
        borderStyle: "solid",
        // add shadow here 
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.32,
        shadowRadius: 2,
        elevation: 4,
    },
    balanceTotal: {
        fontSize: 25,
        paddingLeft: 10,
    },
    balanceText: {
        paddingLeft: 10,    
    }
})
export default Balance;