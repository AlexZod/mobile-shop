import React from 'react';
import {Card} from '../Components/Card/Card';
import {CustomCarousel} from '../Components/Carousel/Carousel';
import {ScrollView} from 'react-native';
import {styles} from './styles';

export const Product = () => {
  return (
    <ScrollView style={styles.main}>
      <CustomCarousel />
      <Card/>
    </ScrollView>
  );
};
