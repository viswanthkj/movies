/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native';

export default class MovieList extends Component {
  renderListItem = ({index, item}) => {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          borderWidth: 1,
          justifyContent: 'center',
          alignItems: 'center',
          margin: 10,
        }}
        onPress={() => {}}>
        <Image
          style={{width: 100, height: 100}}
          source={{
            uri: item.poster,
          }}
        />
        <Text style={{fontSize: 14, color: '#194000'}}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  extracListtKey = ({id}) => id;

  render() {
    const {genre, movieData} = this.props;
    return (
      <View>
        <Text style={{margin: 10}}>{genre}</Text>
        <FlatList
          data={movieData}
          renderItem={this.renderListItem}
          keyExtractor={this.extracListtKey}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  }
}
