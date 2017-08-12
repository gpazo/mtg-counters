import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import createStore from './src/store';

import AppWithNavigationState from './src/AppWithNavigationState';

export default () => (
  <Provider store={createStore()}>
    <AppWithNavigationState />
  </Provider>
);
