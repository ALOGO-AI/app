import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

class TransfertPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipient: '',
      amount: '',
      message: ''
    };
  }

  handleTransfer = () => {
    const { recipient, amount, message } = this.state;
    console.log('Recipient:', recipient);
    console.log('Amount:', amount);
    console.log('Message:', message);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Formulaire de virement</Text>
        <TextInput
          style={styles.input}
          placeholder="Destinataire"
          onChangeText={(recipient) => this.setState({ recipient })}
          value={this.state.recipient}
        />
        <TextInput
          style={styles.input}
          placeholder="Montant du transfert"
          onChangeText={(amount) => this.setState({ amount })}
          value={this.state.amount}
          keyboardType="numeric"
        />
        <TextInput
          style={[styles.input, styles.messageInput]}
          placeholder="Commentaire (facultatif)"
          onChangeText={(message) => this.setState({ message })}
          value={this.state.message}
          multiline={true}
        />
        <TouchableOpacity style={styles.button} onPress={this.handleTransfer}>
          <Text style={styles.buttonText}>Envoyer</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  messageInput: {
    height: 80,
  },
  button: {
    backgroundColor: 'blue',
    width: '80%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TransfertPage;
