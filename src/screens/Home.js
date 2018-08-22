import React, {Component} from 'react'
import {Text, View, Button} from 'react-native'
import ArtistSearch from '../ArtistSearch'

export default class Home extends Component
{
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={ {flex:1} } >
                <Button
                    title="Tracks tops en tu pais"
                    onPress={() => navigate('TopTracksCountry')}
                />
                <ArtistSearch />
            </View>
        )
    }
} 