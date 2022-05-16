import {Dimensions, Platform, StyleSheet} from 'react-native';
import {screenWidth} from '../../utils/commonStyles';

export const styles = StyleSheet.create({
  item: {
    width: screenWidth,
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
  },
  paginationContainer: {
    position: 'absolute',
    bottom: -14,
    width: '100%',
  },
  paginationDotStyle: {
    width: 8,
    height: 8,
    borderRadius: 20,
    marginHorizontal: -6,
  },
  inactiveDotStyle: {
    width: 16,
    height: 16,
  },
  contentContainer: {
    height: 428,
    width: '100%',
  },
  videoContainer: {
    height: 428,
    width: '100%',
  },
  video: {
    flex: 1,
  },
});
