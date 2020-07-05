import React, {Component} from 'react';
import {View, Dimensions, Image} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class CarosuelComponent extends Component {
  _renderItem({item, index}) {
    return (
      <View
        style={{
          width: windowWidth,
          height: windowHeight / 3,
        }}>
        <Image
          style={{width: windowWidth, height: windowHeight / 3}}
          source={{uri: item}}
        />
      </View>
    );
  }

  render() {
    const {carouselData} = this.props;
    return (
      <Carousel
        data={carouselData}
        sliderWidth={windowWidth}
        itemWidth={windowWidth}
        renderItem={this._renderItem}
        autoplay={true}
        autoplayDelay={500}
        autoplayInterval={3000}
        loop={true}
      />
    );
  }
}
