import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

class OTPPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        otp1: '',
        otp2: '',
        otp3: '',
        otp4: ''
    };
  }

  handleVerifyOTP = () => {
    const { otp1, otp2, otp3, otp4 } = this.state;
    const otp = otp1 + otp2 + otp3 + otp4;
    console.log('OTP:', otp);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Vérification OTP</Text>
        <Text style={styles.subtitle}>Entrez l'OTP envoyé à votre numéro de mobile</Text>
        <View style={styles.otpContainer}>
          <TextInput
            style={styles.input}
            maxLength={1}
            onChangeText={(otp1) => this.setState({ otp1 })}
            value={this.state.otp1}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            maxLength={1}
            onChangeText={(otp2) => this.setState({ otp2 })}
            value={this.state.otp2}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            maxLength={1}
            onChangeText={(otp3) => this.setState({ otp3 })}
            value={this.state.otp3}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            maxLength={1}
            onChangeText={(otp4) => this.setState({ otp4 })}
            value={this.state.otp4}
            keyboardType="numeric"
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={this.handleVerifyOTP}>
          <Text style={styles.buttonText}>Verifier OTP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.resendButton}>
          <Text style={styles.resendButtonText}>Renvoyer OTP</Text>
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
      marginBottom: 10,
    },
    subtitle: {
      fontSize: 16,
      marginBottom: 20,
    },
    otpContainer: {
      flexDirection: 'row',
      marginBottom: 20,
    },
    input: {
      width: 50,
      height: 50,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      paddingHorizontal: 10,
      marginRight: 10,
      textAlign: 'center',
    },
    button: {
      backgroundColor: 'blue',
      width: '80%',
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      marginBottom: 10,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    resendButton: {
      marginBottom: 20,
    },
    resendButtonText: {
      color: 'blue',
      fontSize: 14,
      fontWeight: 'bold',
    },
  });

export default OTPPage;
