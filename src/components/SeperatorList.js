/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from '../styles/styles';

export default class SeperatorList extends Component {
  render() {
    const {language, year, duration, category} = this.props;
    return (
      <View style={{flex: 1, marginVertical: 20}}>
        <View
          style={{
            flex: 4,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'flex-start',
            marginVertical: 5,
          }}>
          <Text
            style={[
              styles.genreTitle,
              {
                width: '25%',
              },
            ]}>
            Language
          </Text>
          <Text
            style={[
              styles.genreTitle,
              {
                width: '25%',
              },
            ]}>
            Releasing Year
          </Text>
          <Text
            style={[
              styles.genreTitle,
              {
                width: '25%',
              },
            ]}>
            Duration
          </Text>
          <Text
            style={[
              styles.genreTitle,
              {
                width: '25%',
              },
            ]}>
            Category
          </Text>
        </View>
        <View style={{borderBottomWidth: 1, borderBottomColor: '#ddd'}} />
        <View
          style={{
            flex: 4,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'flex-start',
            marginVertical: 5,
          }}>
          <Text
            style={[
              styles.listTitle,
              {
                width: '25%',
              },
            ]}>
            {language}
          </Text>
          <Text
            style={[
              styles.listTitle,
              {
                width: '25%',
              },
            ]}>
            {year}
          </Text>
          <Text
            style={[
              styles.listTitle,
              {
                width: '25%',
              },
            ]}>
            {duration}
          </Text>
          <Text
            style={[
              styles.listTitle,
              {
                width: '25%',
              },
            ]}>
            {category}
          </Text>
        </View>
      </View>
    );
  }
}
