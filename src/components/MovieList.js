/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import {Actions} from 'react-native-router-flux';
import styles from '../styles/styles';

export default class MovieList extends Component {
  renderListItem = ({index, item}) => {
    const {genre, movieData} = this.props;
    return (
      <TouchableOpacity
        style={{
          width: 100,
          alignItems: 'center',
          margin: 10,
        }}
        onPress={() => {
          Actions.detail({
            movieProps: item,
            genre,
          });
        }}>
        <Image
          style={{width: 100, height: 100}}
          source={{
            uri: item.poster,
          }}
          resizeMode="cover"
        />
        <Text style={styles.listTitle} numberOfLines={2}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };

  extracListtKey = ({id}) => id;

  render() {
    const {genre, movieData} = this.props;
    return (
      <View>
        <Text numberOfLines={1} style={[styles.genreTitle, {margin: 10}]}>
          {genre}
        </Text>
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
