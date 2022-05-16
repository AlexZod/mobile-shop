/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

// Note: test renderer must be required after react-native.
import { addAllNumbers } from '../src/utils/arrayUtils';

// it('renders correctly', () => {
//   renderer.create(<App />);
// });

it('add all numbers', () => {
  expect(addAllNumbers([1, 2, 3, 4, 5])).toBe(15);
});

it('function has return defined value', () => {
  expect(addAllNumbers([1])).toBeDefined();
});

it('redner app', () => {
  renderer.create(<App />);
});
