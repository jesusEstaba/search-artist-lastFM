import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableHighlight} from 'react-native';

export default class Track extends Component
{

    render() {
        const {url, name, listeners, image, artist} = this.props

        const thumbnail = image[2]['#text'] ? image[2]['#text'] : 'https://vignette.wikia.nocookie.net/undertale-rho/images/5/5f/Placeholder.jpg/revision/latest?cb=20180213155916';
        
        return ( 
            <TouchableHighlight onPress={ () => {this.props.navigate('Song', { url, name, listeners, image, artist })} }>
                <View style={ styles.container }>
                    <View style={ styles.imageWrapper }>
                        <Image source={ {
                            uri: thumbnail,
                            width:150,
                            height:150
                        } } />
                    </View>
                    
                    <Text style={ styles.title }>
                        {name}
                    </Text>
                    <Text style={ styles.listeners }>
                        {listeners.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </Text>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 15,
    },
    imageWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        color: '#333333',
        textAlign: 'center',  
    },
    listeners: {
        fontSize: 20,
        textAlign: 'center',
    },
})