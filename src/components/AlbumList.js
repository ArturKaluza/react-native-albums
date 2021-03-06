import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import axios from 'axios';

import AlbumDetali from './AlbumDetail';

class AlbumList extends Component {
    state = {
        albums: []
    };

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(res => this.setState({albums: res.data}));
    }

    renderAlbums() {
        return this.state.albums.map(album => <AlbumDetali key={album.title} album={album} />);
    }

    render() {
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>        
        );
    };
};

export default AlbumList;