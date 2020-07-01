import React, { useState } from 'react' 
import { View, TextInput, StyleSheet, Button, Text, Alert } from 'react-native'

// const TextInputComponent = ({value, onChangeText, name, ...props}) => (
//     <TextInput
//         value={value}
//         onChangeText={(value) => onChangeText(name, value)} //... Bind the name here
//         {...props}
//     />
// )

function AddTransaction ({handleSubmit}) {
  const [transaction, setTransaction] = useState({
    text: '',
    amount: '0'
  }) 

  const handleChange = (type, value) => { 
    if (type === 'amount') {
      let number = Number(value)
      if (Number.isNaN(number)){
        Alert.alert('Only Numbers allowed', {text: 'OK'})
      }
    }
    setTransaction({
      text: (type === 'text') ? value.trim() : transaction.text,
      amount: (type === 'amount') ? value : transaction.amount
    })
  }

  const handleSubmitHere = () => {
     if (transaction.text === '' || transaction.amount === 0){
      return Alert.alert('please insert something', {text: 'OK'})
    }

    handleSubmit(transaction)
  }


    return (
        <View style={styles.container}>
            <Text style={{borderBottomWidth: 0.5, padding: 2, fontWeight: "bold"}}>Add new transaction</Text>
            <View onSubmit={handleSubmitHere}>
                <View style={styles.formControl}>
                    <TextInput
                        style={styles.input}
                        value={transaction.text}
                        onChangeText={(text) => handleChange( 'text', text)} placeholder="Enter text..." />
                </View>
            <View style={styles.formControl}>
              <Text>
                  Amount
                (negative - expense, positive - income)
                </Text>
              <TextInput 
                  style={styles.input}
                  value={transaction.amount}
                  placeholder="Enter amount..."
                  onChangeText={(text) => handleChange('amount', text)} />
            </View>
            <Button style={styles.btn} title="Add transaction" onPress={() => handleSubmitHere}/>
      </View>
        </View>
    )
};

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 0.2,
        backgroundColor: "#eee",
        padding: 0     
    },
    container:{
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
    formControl: {
      margin: 5
    },
    btn:{
        backgroundColor: "#9c88ff",
      //  add shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.32,
        shadowRadius: 2,
        elevation: 4,
        // end of shadow
        color: "#fff",
        borderWidth: 0,
        fontSize: 16,
        marginTop: 10,
        marginRight: 0,
        marginBottom: 30,
        padding: 10,
        width: "100%",
    }
})
export default AddTransaction;