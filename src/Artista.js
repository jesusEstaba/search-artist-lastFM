import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

function Artista(props) {
    const image = props.image[2]['#text'] ? props.image[2]['#text'] : 'https://vignette.wikia.nocookie.net/undertale-rho/images/5/5f/Placeholder.jpg/revision/latest?cb=20180213155916';

    return (
        <View style={ styles.container }>
            <View style={ styles.imageWrapper }>
                <Image source={ {
                    uri: image,
                    width:150,
                    height:150
                } } />
            </View>
            
            <Text style={ styles.title }>
                {props.name}
            </Text>
            <Text style={ styles.listeners }>
                {props.listeners.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </Text>
        </View>
    );
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

export default Artista;