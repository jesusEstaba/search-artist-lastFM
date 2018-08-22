import React, {Component} from 'react'
import {Text, View, Button, StyleSheet, Image, TouchableOpacity, Linking, WebView} from 'react-native'

export default class Song extends Component
{
    name = this.props.navigation.getParam('name');
    state = {
        videoId : ''
    } 
    
    componentDidMount() {
        this.searchEmmbed();
    }
    
    searchEmmbed = () => {
        let url = `https://www.googleapis.com/youtube/v3/search?part=id,snippet&key=AIzaSyDiCmH9_VCwKDQYMwku8uYybXZ-0JXWjBA&q=${this.name}`;
        fetch(url)
            .then(res => res.json())
            .then( ({items: [{id: {videoId}}]}) => {
                this.setState({videoId})
            })
    }

    render() {
        //const { navigate } = this.props.navigation;
        const url = this.props.navigation.getParam('url');
        const name = this.props.navigation.getParam('name');
        const image = this.props.navigation.getParam('image');
        const listeners = this.props.navigation.getParam('listeners');
        const artist = this.props.navigation.getParam('artist');
        
        webview = <Text>Cargando...</Text>

        if (this.state.videoId) {
            webview = <WebView
                style={{flex:1}}
                javaScriptEnabled={true}
                source={{uri: `https://www.youtube.com/embed/${this.state.videoId}?rel=0&autoplay=0&showinfo=0&controls=0` }}
            />
        }
        
        return (
            <View style={ {flex:1} } >
                <TouchableOpacity onPress={ ()=>{ Linking.openURL(artist.url)}}>
                <Text  style={ {fontSize:30} }>{artist.name}</Text>
                </TouchableOpacity> 
                
                <View style={ styles.imageWrapper }>
                        <Image source={ {
                            uri: image[3]['#text'],
                            width:200,
                            height:200
                        } } />
                    </View>
                <Text style={ {fontSize:20} }>{name}</Text>
                <Text>{listeners}</Text>
                {webview}
                
            </View>
        )
    }
} 
const styles = StyleSheet.create({
    imageWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
    },
})