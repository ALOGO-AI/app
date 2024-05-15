import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleLogin = () => {
    const { username, password } = this.state;
    console.log('Username:', username);
    console.log('Password:', password);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Connexion</Text>
        <TextInput
          style={styles.input}
          placeholder="Nom d'utilisateur"
          onChangeText={(username) => this.setState({ username })}
          value={this.state.username}
        />
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          onChangeText={(password) => this.setState({ password })}
          value={this.state.password}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
          <Text style={styles.buttonText}>Connecter</Text>
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

export default LoginPage;
