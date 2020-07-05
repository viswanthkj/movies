/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, Dimensions} from 'react-native';

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
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginVertical: 5,
          }}>
          <Text style={{textAlign: 'left', maxWidth: windowWidth / 4}}>
            Language
          </Text>
          <Text style={{textAlign: 'left', maxWidth: windowWidth / 4}}>
            Releasing Year
          </Text>
          <Text style={{textAlign: 'left', maxWidth: windowWidth / 4}}>
            Duration
          </Text>
          <Text style={{textAlign: 'left', maxWidth: windowWidth / 4}}>
            Category
          </Text>
        </View>
        <View style={{borderBottomWidth: 1}} />
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginVertical: 5,
          }}>
          <Text style={{maxWidth: windowWidth / 4}}>{language}</Text>
          <Text style={{maxWidth: windowWidth / 4}}>{year}</Text>
          <Text style={{maxWidth: windowWidth / 4}}>{duration}</Text>
          <Text style={{maxWidth: windowWidth / 4}}>{category}</Text>
        </View>
      </View>
    );
  }
}
