import React from 'react';

import PropTypes from 'prop-types';

import { View, StatusBar, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

import AlbumItem from './components/AlbumItem';

const albums = [
  {
    id: 0,
    title: 'Hybrid Theory',
    author: 'Linkin Park',
    thumbnail: 'https://s3-sa-east-1.amazonaws.com/gonative/linkin_park.jpg',
    songs: [
      {
        id: 0,
        title: 'Papercut',
        author: 'Linkin Park',
      },
      {
        id: 1,
        title: 'One Step Closer',
        author: 'Linkin Park',
      },
      {
        id: 2,
        title: 'With You',
        author: 'Linkin Park',
      },
      {
        id: 3,
        title: 'Points of Authority',
        author: 'Linkin Park',
      },
      {
        id: 4,
        title: 'Crawling',
        author: 'Linkin Park',
      },
    ],
  },
  {
    id: 1,
    title: 'Greatest Hits',
    author: 'Foo Fighters',
    thumbnail: 'https://s3-sa-east-1.amazonaws.com/gonative/foo_fighters.jpg',
    songs: [
      {
        id: 0,
        title: 'Papercut',
        author: 'Linkin Park',
      },
      {
        id: 1,
        title: 'One Step Closer',
        author: 'Linkin Park',
      },
      {
        id: 2,
        title: 'With You',
        author: 'Linkin Park',
      },
      {
        id: 3,
        title: 'Points of Authority',
        author: 'Linkin Park',
      },
      {
        id: 4,
        title: 'Crawling',
        author: 'Linkin Park',
      },
    ],
  },
  {
    id: 2,
    title: 'Live from Villa Mix',
    author: 'Alok',
    thumbnail: 'https://s3-sa-east-1.amazonaws.com/gonative/alok.jpg',
    songs: [
      {
        id: 0,
        title: 'Papercut',
        author: 'Linkin Park',
      },
      {
        id: 1,
        title: 'One Step Closer',
        author: 'Linkin Park',
      },
      {
        id: 2,
        title: 'With You',
        author: 'Linkin Park',
      },
      {
        id: 3,
        title: 'Points of Authority',
        author: 'Linkin Park',
      },
      {
        id: 4,
        title: 'Crawling',
        author: 'Linkin Park',
      },
    ],
  },
  {
    id: 3,
    title: 'Hybrid Theory',
    author: 'Linkin Park',
    thumbnail: 'https://s3-sa-east-1.amazonaws.com/gonative/linkin_park.jpg',
    songs: [
      {
        id: 0,
        title: 'Papercut',
        author: 'Linkin Park',
      },
      {
        id: 1,
        title: 'One Step Closer',
        author: 'Linkin Park',
      },
      {
        id: 2,
        title: 'With You',
        author: 'Linkin Park',
      },
      {
        id: 3,
        title: 'Points of Authority',
        author: 'Linkin Park',
      },
      {
        id: 4,
        title: 'Crawling',
        author: 'Linkin Park',
      },
    ],
  },
  {
    id: 4,
    title: 'Live from Villa Mix',
    author: 'Alok',
    thumbnail: 'https://s3-sa-east-1.amazonaws.com/gonative/alok.jpg',
    songs: [
      {
        id: 0,
        title: 'Papercut',
        author: 'Linkin Park',
      },
      {
        id: 1,
        title: 'One Step Closer',
        author: 'Linkin Park',
      },
      {
        id: 2,
        title: 'With You',
        author: 'Linkin Park',
      },
      {
        id: 3,
        title: 'Points of Authority',
        author: 'Linkin Park',
      },
      {
        id: 4,
        title: 'Crawling',
        author: 'Linkin Park',
      },
    ],
  },
  {
    id: 5,
    title: 'Greatest Hits',
    author: 'Foo Fighters',
    thumbnail: 'https://s3-sa-east-1.amazonaws.com/gonative/foo_fighters.jpg',
    songs: [
      {
        id: 0,
        title: 'Papercut',
        author: 'Linkin Park',
      },
      {
        id: 1,
        title: 'One Step Closer',
        author: 'Linkin Park',
      },
      {
        id: 2,
        title: 'With You',
        author: 'Linkin Park',
      },
      {
        id: 3,
        title: 'Points of Authority',
        author: 'Linkin Park',
      },
      {
        id: 4,
        title: 'Crawling',
        author: 'Linkin Park',
      },
    ],
  },
  {
    id: 6,
    title: 'Hybrid Theory',
    author: 'Linkin Park',
    thumbnail: 'https://s3-sa-east-1.amazonaws.com/gonative/linkin_park.jpg',
    songs: [
      {
        id: 0,
        title: 'Papercut',
        author: 'Linkin Park',
      },
      {
        id: 1,
        title: 'One Step Closer',
        author: 'Linkin Park',
      },
      {
        id: 2,
        title: 'With You',
        author: 'Linkin Park',
      },
      {
        id: 3,
        title: 'Points of Authority',
        author: 'Linkin Park',
      },
      {
        id: 4,
        title: 'Crawling',
        author: 'Linkin Park',
      },
    ],
  },
];

const Main = ({ navigation }) => (
  <View style={styles.container}>
    <StatusBar barStyle="light-content" />

    <FlatList
      data={albums}
      keyExtractor={album => String(album.id)}
      renderItem={({ item }) => <AlbumItem onPress={() => { navigation.navigate('Album', { album: item }); }} album={item} />}
    />
  </View>
);

Main.navigationOptions = ({ navigation }) => ({
  title: 'Sua biblioteca',
  headerRight: (
    <TouchableOpacity style={styles.headerRight} onPress={() => navigation.navigate('Search')}>
      <Icon name="search" size={24} color="#fff" />
    </TouchableOpacity>
  ),
});

Main.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default Main;
