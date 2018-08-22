import {
  createStackNavigator,
} from 'react-navigation';

import Home from './src/screens/Home'
import TopTracksCountry from './src/screens/TopTracksCountry'
import Song from './src/screens/Song'

const App = createStackNavigator({
  Home: { screen: Home },
  TopTracksCountry: { screen: TopTracksCountry },
  Song: { screen:Song }
});

export default App