import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, Alert } from 'react-native'
import Header from './components/Header';
import IncomeExpense from './components/IncomeExpense';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import TransactionHistory from './components/History';
import axios from 'react-native-axios'

const url = 'http://localhost:2200/api/v1/transaction'

function App() {
  const [transactions, setTransactions ] = useState([])
  
  const amounts = transactions.map(transaction => Number(transaction.amount))
  
  const getTransactions = async (url) => {
   try {
    const res = await axios.get(url)

    setTransactions((transactions) => {
      return [...res.data.data]
    })
    
   } catch (error) {
     Alert(error)
   }
  
  }

  useEffect(() => {
   getTransactions(url)
  }, [])

 const deleteTransaction = async (id) => {
   try {
    await axios.delete(`${url}/${id}`)
    setTransactions(transactions.filter((item) => item._id !== id))
   } catch (error) {
     return {
       transactions, 
       error
     }
   }
     
  }
 
 const addTransaction = async (transaction) => {
   const config = {
     "Content-type": "application/json"
   }

    try {
      await axios.post(url, transaction, config)
      setTransactions([...transactions, transaction])
    } catch (error) {
      console.log(error)
  }
   
 }

  return (
    <FlatList style={styles.body}
      ListHeaderComponent = {
        <View style={ styles.container}>
            <Header />
            <Balance transactions={amounts}/>
            <IncomeExpense amounts={amounts}/>
            <TransactionHistory transactions={transactions} deleteTransaction={deleteTransaction}/>
        </View>
      }
      // data={transactions}
      // renderItem={(transaction) => 'this should work now'}
      ListFooterComponent = {
        <View style={ styles.container }>
          <AddTransaction handleSubmit={addTransaction}/>
        </View> 
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
    marginHorizontal: "auto",
    width: "80%",
    marginLeft: 20
  },
  contentContainerStyle:{
    backgroundColor: "#f7f7f7",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100%",
    margin: 0,
    fontFamily: "'Lato', sans-serif",

  }
})


export default App;
