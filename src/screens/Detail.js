/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {
  CarosuelComponent,
  SeperatorList,
  DescriptionComponent,
} from '../components/index';

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
    const {movieProps} = this.props;
    console.log('viswanth-movieProps', movieProps);
    return (
      <SafeAreaView>
        <ScrollView contentContainerStyle={{borderWidth: 1, margin: 10}}>
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
