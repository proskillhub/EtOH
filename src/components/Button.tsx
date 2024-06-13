import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';

type buttonProps = {
  text: String;
  handlePress: React.EventHandler<any>;
};

export class Button extends Component<buttonProps> {
  constructor(props: buttonProps) {
    super(props);
  }
  render() {
    return (
      <TouchableOpacity style={styles.button} onPress={this.props.handlePress}>
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#bd486f',
    display: 'flex',
    width: 400,
    height: 60,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

export default Button;
