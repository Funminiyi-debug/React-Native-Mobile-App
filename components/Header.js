import React from 'react' 
import { View, Text, StyleSheet } from 'react-native'

function Header (props) {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Income Expense App</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#301f1f",
        color: "white",
        paddingVertical: 5,
        marginVertical: 0,
        marginHorizontal: "auto",
    },
    headerText: {
        color: "#fff",  
        // textAlign: "center"
        fontSize: 20,
        paddingLeft: 10,
    }
})
export default Header;