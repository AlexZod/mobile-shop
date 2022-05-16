import React from 'react';
import {Image, Text, View} from 'react-native';
import RenderHtml from 'react-native-render-html';
import {mockedData} from '../../api';
import {Dropdown} from '../Dropdown/Dropdown';
import {screenWidth} from '../../utils/commonStyles';
import {styles} from './styles';

export const Card = () => {
  const tagsStyles = {
    p: {
      margin: 0,
      lineHeight: 30,
      fontSize: 15,
      letterSpacing: -0.1,
    },
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {mockedData.variants[0].title}
      </Text>
      <View>
        <View style={styles.rateCostContainer}>
          <View style={styles.rate}>
            <Image source={require('../../assets/star.png')}/>
            <Text
              style={styles.ratePriceFont}>
              {mockedData.score.avg} / 5
            </Text>
          </View>
          <View style={styles.priceCapacity}>
            <Text
              style={styles.ratePriceFont}>
              {mockedData.variants[0].capacity} —
            </Text>
            <Text
              style={styles.ratePriceFont}>
              {mockedData.variants[0].price} €
            </Text>
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <RenderHtml
            source={{html: `${mockedData.description}`}}
            tagsStyles={tagsStyles}
            contentWidth={screenWidth}
          />
        </View>
        <View style={styles.divider}/>
        <Dropdown
          customStyles={styles.dropdown}
          title={'COMMENT APPLIQUER CE PRODUIT?'}
        />
      </View>
    </View>
  );
};
