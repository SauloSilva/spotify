import React from 'react';

import { View, TextInput, FlatList } from 'react-native';

import SongItem from 'components/SongItem';

import styles from './styles';

const songs = [];

const Search = () => (
  <View style={styles.container}>
    <View style={styles.form}>
      <TextInput
        style={styles.searchInput}
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Busque sua música..."
        placeholderTextColor="#666"
        underlineColorAndroid="transparent"
      />

      <FlatList
        data={songs}
        keyExtractor={song => String(song.id)}
        renderItem={({ item }) => <SongItem song={item} />}
      />
    </View>
  </View>
);

Search.navigationOptions = {
  title: 'Sua busca',
};

export default Search;
