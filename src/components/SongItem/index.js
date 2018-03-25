import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

const SongItem = ({ song, player, onPress }) => {
  let icon = 'play-circle-outline';

  if (player.currentSong.id === song.id) {
    icon = player.paused ? 'play-circle-outline' : 'pause-circle-outline';
  }

  return (
    <TouchableOpacity key={song} style={styles.container} onPress={onPress} >
      <View style={styles.info}>
        <Text
          style={[
            styles.title,
            (player.currentSong.id === song.id) ? styles.active : {},
          ]}
        >
          {song.title}
        </Text>

        <Text style={styles.author}>{song.author}</Text>
      </View>

      { player.loadingId === song.id
        ? <ActivityIndicator size="small" color="#999" style={styles.loading} />
        : <Icon name={icon} size={24} style={styles.play} />
      }

    </TouchableOpacity>
  );
};

SongItem.propTypes = {
  song: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
  player: PropTypes.shape({
    loading: PropTypes.bool,
  }).isRequired,
  onPress: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  player: state.player,
});

export default connect(mapStateToProps, null)(SongItem);
