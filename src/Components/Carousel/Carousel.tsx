import React, {useState, useEffect} from 'react';
import {
  View,
} from 'react-native';
import Carousel, {
  AdditionalParallaxProps,
  Pagination,
  ParallaxImage,
} from 'react-native-snap-carousel';
import Video from 'react-native-video';
import {styles} from './styles';
import {mockedData} from '../../api';
import {screenWidth} from '../../utils/commonStyles';

export const CustomCarousel = () => {
  const [entries, setEntries] = useState<string[]>([]);
  const [activeSlide, setActiveSlide] = useState(0);

  // The way to define type of the content;
  // For the lake of time I'm going to stick with this, but in long term
  // perspective I would do a little research and find a better solution.
  const isContentVideo = (uri: string): boolean => uri.includes('mp4');

  useEffect(() => {
    setEntries(mockedData.additionalImages);
  }, []);

  const renderItem = (
      {item} : {item: string},
      parallaxProps?: AdditionalParallaxProps) => {
    return (
      <View style={styles.contentContainer}>
        {isContentVideo(item) ?
        <Video
          resizeMode="cover"
          source={{uri: item}} // the video file
          paused={false} // make it start
          playInBackground={false}
          style={styles.video} // any style you want
          repeat
        /> :
          (
        <ParallaxImage
          {...parallaxProps}
          source={{uri: item}}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.11}
          resizeMode="cover"
        />
         )}
      </View>
    );
  };

  return (
    <View>
      <Carousel
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth}
        data={entries}
        renderItem={renderItem}
        hasParallaxImages
        onSnapToItem={(index) => setActiveSlide(index)}
        pagingEnabled
      />
      <Pagination
        dotsLength={entries.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.paginationDotStyle}
        inactiveDotStyle={styles.inactiveDotStyle}
      />
    </View>
  );
};
