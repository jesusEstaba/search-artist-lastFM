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
  TextInput,
  FlatList,
  Button,
  TouchableHighlight 
} from 'react-native';

import Artista from './Artista'

export default class App extends Component {
  state = {
    search: '',
    artists: []
  }

  lastfm = () => {
    let artistName = this.state.search.trim();

    if (!artistName) {
      return alert('No se puede hacer una busqueda vacia');
    }
    
    let url = `http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${artistName}&api_key=52c2b0ddb9459bc5576f12e551a5c3ad&format=json`
    
    fetch(url)
      .then( res => res.json() )
      .then(resultados => {
        this.setState({
          artists: resultados.results.artistmatches.artist
        })
      })
  }


  textToSearch = (search) => {
    this.setState({search})
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Busca a tu artista favorito!
        </Text>
        <TextInput 
          onChangeText={this.textToSearch} 
          placeholder="Nombre de tu idolo" 
          style={styles.input}
        />
        <View style={ {width:'80%'} }>
          <Button 
            title="Buscar" 
            onPress={this.lastfm}
            color="#d41d24"
          />
        </View>
        <FlatList  
          style={ styles.list }
          data={this.state.artists}
          renderItem = { ( {item} ) => <Artista {...item}  /> }
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
