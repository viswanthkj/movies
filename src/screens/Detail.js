/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import {
  CarosuelComponent,
  SeperatorList,
  DescriptionComponent,
} from '../components/index';
import styles from '../styles/styles';

export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   comedy: comedyData,
      //   action: actionData,
      //   thriller: thrillerData,
      //   carouselItems: postersData,
    };
  }

  render() {
    const {movieProps, genre} = this.props;
    return (
      <SafeAreaView>
        <ScrollView contentContainerStyle={{margin: 10, paddingBottom: 15}}>
          <Text
            style={[
              styles.genreDetailTitle,
              {marginVertical: 5},
            ]}>{`${genre} movies`}</Text>
          <Text style={[styles.listDetailTitle, {marginVertical: 10}]}>
            {movieProps.title}
          </Text>
          <CarosuelComponent carouselData={movieProps.images} />
          <SeperatorList
            language={movieProps.language}
            year={movieProps.year}
            duration={movieProps.runtime}
            category={movieProps.category}
          />
          <DescriptionComponent description={movieProps.description} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
