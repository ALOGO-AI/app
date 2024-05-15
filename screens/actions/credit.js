import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

class CreditCardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardNumber: '',
      cardHolder: '',
      expirationDate: '',
      cvv: ''
    };
  }

  handleSave = () => {
    const { cardNumber, cardHolder, expirationDate, cvv } = this.state;
    console.log('Card Number:', cardNumber);
    console.log('Card Holder:', cardHolder);
    console.log('Expiration Date:', expirationDate);
    console.log('CVV:', cvv);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Ajouter une carte de crédit</Text>
        <TextInput
          style={styles.input}
          placeholder="Numéro de carte"
          onChangeText={(cardNumber) => this.setState({ cardNumber })}
          value={this.state.cardNumber}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Titulaire de la carte"
          onChangeText={(cardHolder) => this.setState({ cardHolder })}
          value={this.state.cardHolder}
        />
        <TextInput
          style={styles.input}
          placeholder="Date d'expiration (MM/YY)"
          onChangeText={(expirationDate) => this.setState({ expirationDate })}
          value={this.state.expirationDate}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="CVV"
          onChangeText={(cvv) => this.setState({ cvv })}
          value={this.state.cvv}
          keyboardType="numeric"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={this.handleSave}>
          <Text style={styles.buttonText}>Enregistrer</Text>
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

export default CreditCardPage;
