import React, {
  AppRegistry,
  Component,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

var MOCKED_MOVIES_DATA = [
  {title: 'Title', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
];

class AwesomeProject extends Component {
  render() {
    var movie = MOCKED_MOVIES_DATA[0];
    return (
      <View style={styles.container}>
        <Image 
           source={{uri: movie.posters.thumbnail}} 
           style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
           <Text>{movie.title}</Text>
           <Text>{movie.year}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  thumbnail: {
     width: 53,
     height: 81,
     marginLeft: 5,
  },
  rightContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
     fontSize: 20,
     marginBottom: 8,
     textAlign: 'center',
  },
  year: {
     textAlign: 'center',
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
