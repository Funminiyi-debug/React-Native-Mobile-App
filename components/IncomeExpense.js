import React from 'react' 
import { View, Text, StyleSheet } from 'react-native';

function IncomeExpense ({amounts}) {
  const totalExpenses = amounts
                          .filter((item) => item < 0)
                          .reduce((total, num) => total + num, 0);
  const totalIncome = amounts
                          .filter(((item) => item > 0))
                          .reduce((total, num) => total + num, 0);
 

    return (
        <View style={styles.incExpContainer}>         
            <View style={styles.incExpViewOne}>
                <Text>Income</Text>
                <Text style={styles.moneyPlus}>+${totalIncome}</Text>
            </View>

            <View style={styles.incExpView}>
                <Text>Expense</Text>
                <Text style={styles.moneyMinus}>-${Math.abs(totalExpenses)}</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    incExpContainer: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#fff",
        // add shadow 
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.32,
        shadowRadius: 2,
        elevation: 4,
        padding: 20,
        justifyContent: "space-between",
        marginVertical: 20,
        marginHorizontal: 0
    },
    moneyPlus: {
        fontSize: 20,
        letterSpacing: 1,
        marginVertical: 5,
        marginHorizontal: 0,
        color: "#2ecc71",
    },
    moneyMinus: {
        fontSize: 20,
        letterSpacing: 1,
        marginVertical: 5,
        marginHorizontal: 0,
        color: "#c0392b",
    },
    incExpViewOne: {
        backgroundColor: "#fff",
        flex: 1,
        textAlign: "center",
        borderRightWidth: 1,
        borderStyle: "solid",
        borderColor: "#dedede"
    },
    incExpView: {
        flex: 1,
        textAlign: "center",
        paddingLeft: 20
    }

})
export default IncomeExpense;