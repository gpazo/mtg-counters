import React, { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';

import NavigationContainer from './containers/NavigationContainer';

export class AppWithNavigationState extends Component {
  render() {
    const { dispatch, navigation } = this.props;

    return (
      <NavigationContainer navigation={addNavigationHelpers({ dispatch, state: navigation })} />
    );
  }
}

export const mapStateToProps = ({ navigation }) => ({ navigation });

export default connect(mapStateToProps)(AppWithNavigationState);
