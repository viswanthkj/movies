import React, {Component} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

import MovieList from './components/index';
import comedyData from './data/comedyData.json';
import actionData from './data/actionData.json';
import thrillerData from './data/thrillerData.json';

export default class MainApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comedy: comedyData,
      action: actionData,
      thriller: thrillerData,
    };
  }
  render() {
    const {comedy, action, thriller} = this.state;
    return (
      <SafeAreaView>
        <ScrollView>
          <MovieList genre={comedy.genre} movieData={comedy.movies} />
          <MovieList genre={action.genre} movieData={action.movies} />
          <MovieList genre={thriller.genre} movieData={thriller.movies} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
