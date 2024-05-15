import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class BankAccountStatementPage extends Component {
  render() {
    const bankStatement = {
      transactions: [
        { id: 1, date: '2022-05-01', description: 'Dépense', amount: -100 },
        { id: 2, date: '2022-05-05', description: 'Salaire', amount: 2000 },
        { id: 3, date: '2024-05-10', description: 'Dépense', amount: -50 },
      ]
    };

    // Calcul du solde total du relevé
    const totalBalance = bankStatement.transactions.reduce((total, transaction) => total + transaction.amount, 0);

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Relevé de votre compte bancaire</Text>
        <View style={styles.transactionList}>
          {bankStatement.transactions.map(transaction => (
            <View key={transaction.id} style={styles.transactionItem}>
              <Text>{transaction.date}</Text>
              <Text>{transaction.description}</Text>
              <Text>{transaction.amount > 0 ? '+' : '-'}{Math.abs(transaction.amount)} FCFA</Text>
            </View>
          ))}
        </View>
        <Text style={styles.totalBalance}>Total: {totalBalance} FCFA</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  transactionList: {
    marginBottom: 10,
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  totalBalance: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BankAccountStatementPage;
