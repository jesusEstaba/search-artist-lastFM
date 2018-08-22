/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList, 
} from 'react-native';

import Track from './Track'

export default class App extends Component {
  state = {
    country: '',
    tracks: []
  }

  componentDidMount() {
    this.lastfm()
  }

  lastfm = () => {
    navigator.geolocation.getCurrentPosition( 
      ({ coords })=>{
        console.log(coords)

        fetch(`http://maps.googleapis.com/maps/api/geocode/json?latlng=${coords.latitude},${coords.longitude}&sensor=false`)
          .then( res => res.json() )
          .then( data => {
            if (data.status != 'OK') {
              return alert('Error en la consulta')
            }
            
            let [country] = data.results[0].address_components.filter( dir => {
              return dir.types.some( type => type =='country' )
            })

            this.setState({country: country.long_name})

            return fetch(`http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=${country.long_name}&api_key=52c2b0ddb9459bc5576f12e551a5c3ad&format=json`)
          } )
          .then( res => res.json() )
          .then( data => {
            console.log(data)

            this.setState({
              tracks: data.tracks.track
            })
          })
      }, 
      () => { 
        alert('no se pudo acceder a la geolocaliazacion') 
      }
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          { this.state.country }!
        </Text>
        <FlatList  
          style={ styles.list }
          data={this.state.tracks}
          renderItem = { ( {item} ) => <Track {...item} navigate={this.props.navigate} /> }
          keyExtractor={(item, mbid) => '' + mbid}
          ListEmptyComponent={ <Text>vacio</Text> }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    color: '#333333',
  },
  input:{
    fontSize: 20,
    width: '80%',
  },
  list:{
    marginVertical:10,
  },
});
