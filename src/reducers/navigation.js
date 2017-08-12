import NavigationContainer from '../containers/NavigationContainer';

export default (state, action) => NavigationContainer.router.getStateForAction(action, state);
