import React from 'react' 
import Transaction from './Transaction'
import { Text, View, FlatList, StyleSheet } from 'react-native';

function TransactionHistory ({transactions, deleteTransaction}) {

    return (
    <View>
        <Text>History</Text>
        <FlatList 
        style={styles.list}
        data={transactions}
        renderItem={(transaction) => (<Transaction key={transaction._id} transaction={transaction} deleteTransaction={deleteTransaction} />)} />
    </View>
    )
};

const styles = StyleSheet.create({
    list: {
        padding: 0,
        marginBottom: 40
    }
})
export default TransactionHistory;