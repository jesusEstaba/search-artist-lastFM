import React, {Component} from 'react'
import {Text, View, Button} from 'react-native'
import Country from '../Country'

export default class TopTracksCountry extends Component
{
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Country navigate={navigate} />
        )
    }
} 