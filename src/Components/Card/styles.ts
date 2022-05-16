import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: '600',
    marginBottom: 8,
  },
  rateCostContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  rate: {
    flexDirection: 'row',
    flex: 1,
  },
  priceCapacity: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    paddingRight: 4,
  },
  ratePriceFont: {
    fontSize: 14,
    fontWeight: '700',
    marginLeft: 4,
  },
  descriptionContainer: {
    marginTop: 10,
    marginBottom: 24,
  },
  divider: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    opacity: 0.4,
  },
  dropdown: {
    marginTop: 14,
  },
});
