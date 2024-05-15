import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      password: ''
    };
  }

  handleSignup = () => {
    const { firstName, lastName, phoneNumber, password } = this.state;
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Phone Number:', phoneNumber);
    console.log('Password:', password);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Inscription</Text>
        <TextInput
          style={styles.input}
          placeholder="Prénoms"
          onChangeText={(firstName) => this.setState({ firstName })}
          value={this.state.firstName}
        />
        <TextInput
          style={styles.input}
          placeholder="Nom"
          onChangeText={(lastName) => this.setState({ lastName })}
          value={this.state.lastName}
        />
        <TextInput
          style={styles.input}
          placeholder="Numéro de téléphone"
          onChangeText={(phoneNumber) => this.setState({ phoneNumber })}
          value={this.state.phoneNumber}
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          onChangeText={(password) => this.setState({ password })}
          value={this.state.password}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={this.handleSignup}>
          <Text style={styles.buttonText}>S'inscrire</Text>
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

export default SignupPage;
