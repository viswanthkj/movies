/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class DescriptionComponent extends Component {
  render() {
    const {description} = this.props;
    return (
      <View style={{flex: 1, marginVertical: 10}}>
        <Text style={{marginBottom: 5}}>Description:</Text>
        <Text>{description}</Text>
      </View>
    );
  }
}
