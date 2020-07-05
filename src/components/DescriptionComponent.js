/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from '../styles/styles';

export default class DescriptionComponent extends Component {
  render() {
    const {description} = this.props;
    return (
      <View style={{flex: 1, marginVertical: 10}}>
        <Text style={[styles.genreDetailTitle, {marginBottom: 5}]}>
          Description:
        </Text>
        <Text style={[styles.descText, {marginBottom: 5}]}>{description}</Text>
      </View>
    );
  }
}
