import React from 'react' 
import { View, Button, StyleSheet } from 'react-native';

function Transaction ({transaction, deleteTransaction}) {
    const styleTransaction = (transaction.amount < 0) ? styles.minus : styles.plus;

    return (
        <View style={styleTransaction()} key={ transaction._id}>
            
            <Text>{transaction.text} <Text>{(transaction.amount < 0) ? '-' : '+'}${Math.abs(transaction.amount)}</Text></Text> 
            <Button 
            style={deleteBtn}
            onPress={(e) => deleteTransaction(transaction._id)}
            >x</Button>
        </View> 
    )
};

const styles = StyleSheet.create({
    deleteBtn: {
        backgroundColor: "#e74c3c",
        borderWidth: 0,
        color: "#fff",
        fontSize: 20,
        lineHeight: 20,
        paddingVertical: 2,
        paddingHorizontal:  5,
        position: "absolute",
        top: "50%",
        left: 0,
        // transform: "translate(-100%, -50%)",
        opacity: 0,
        // transition:" opacity 0.3s ease",
    },
    minus: {
        borderRightWidth: 5,
        borderStyle: "solid",
        borderColor: "#c0392b"     
    },
    plus: {
        borderRightWidth: 5,
        borderStyle: "solid",
        borderColor: "#2ecc71"
    }
})

export default Transaction;