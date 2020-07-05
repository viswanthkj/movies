/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {MovieList, CarosuelComponent} from '../components/index';
import comedyData from '../data/comedyData.json';
import actionData from '../data/actionData.json';
import thrillerData from '../data/thrillerData.json';
import postersData from '../data/dashboardPoster.json';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comedy: comedyData,
      action: actionData,
      thriller: thrillerData,
      carouselItems: postersData,
    };
  }

  render() {
    const {comedy, action, thriller, carouselItems} = this.state;
    return (
      <SafeAreaView>
        <ScrollView contentContainerStyle={{paddingBottom: 15}}>
          <CarosuelComponent carouselData={carouselItems.posters} />
          <MovieList genre={comedy.genre} movieData={comedy.movies} />
          <MovieList genre={action.genre} movieData={action.movies} />
          <MovieList genre={thriller.genre} movieData={thriller.movies} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
