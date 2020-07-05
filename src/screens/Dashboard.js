/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {SafeAreaView, ScrollView, BackHandler} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {MovieList, CarosuelComponent} from '../components/index';
import comedyData from '../data/comedyData.json';
import actionData from '../data/actionData.json';
import thrillerData from '../data/thrillerData.json';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comedy: comedyData,
      action: actionData,
      thriller: thrillerData,
    };
  }

  componentDidMount = () => {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  };

  componentWillUnmount = () => {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  };

  onBackPress() {
    if (Actions.currentScene === 'dashboard') {
      BackHandler.exitApp();
    }
  }

  render() {
    const {comedy, action, thriller} = this.state;
    const carouselItems = comedy.movies.map((el) => el.poster);
    return (
      <SafeAreaView>
        <ScrollView contentContainerStyle={{paddingBottom: 15}}>
          <CarosuelComponent carouselData={carouselItems} />
          <MovieList genre={comedy.genre} movieData={comedy.movies} />
          <MovieList genre={action.genre} movieData={action.movies} />
          <MovieList genre={thriller.genre} movieData={thriller.movies} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
