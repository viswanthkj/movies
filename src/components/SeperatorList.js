/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, Dimensions} from 'react-native';
import styles from '../styles/styles';

const windowWidth = Dimensions.get('window').width;

export default class SeperatorList extends Component {
  render() {
    const {language, year, duration, category} = this.props;
    return (
      <View style={{flex: 1, marginVertical: 20}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'flex-start',
            marginVertical: 5,
          }}>
          <Text
            style={[
              styles.genreTitle,
              {textAlign: 'left', paddingHorizontal: 15},
            ]}>
            Language
          </Text>
          <Text
            style={[
              styles.genreTitle,
              {textAlign: 'left', paddingHorizontal: 15},
            ]}>
            Releasing Year
          </Text>
          <Text
            style={[
              styles.genreTitle,
              {textAlign: 'left', paddingHorizontal: 15},
            ]}>
            Duration
          </Text>
          <Text
            style={[
              styles.genreTitle,
              {textAlign: 'left', paddingHorizontal: 15},
            ]}>
            Category
          </Text>
        </View>
        <View style={{borderBottomWidth: 1}} />
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'flex-start',
            marginVertical: 5,
          }}>
          <Text
            style={[
              styles.listTitle,
              {
                textAlign: 'left',
                maxWidth: windowWidth / 4,
                paddingHorizontal: 15,
              },
            ]}>
            {language}
          </Text>
          <Text
            style={[
              styles.listTitle,
              {
                textAlign: 'left',
                maxWidth: windowWidth / 4,
                paddingHorizontal: 15,
              },
            ]}>
            {year}
          </Text>
          <Text
            style={[
              styles.listTitle,
              {
                textAlign: 'left',
                maxWidth: windowWidth / 4,
                paddingHorizontal: 15,
              },
            ]}>
            {duration}
          </Text>
          <Text
            style={[
              styles.listTitle,
              {
                textAlign: 'left',
                maxWidth: windowWidth / 4,
                paddingHorizontal: 15,
              },
            ]}>
            {category}
          </Text>
        </View>
      </View>
    );
  }
}
