import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {DATA} from '../utils/data';
import Video from 'react-native-video';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Shorts = () => {
  const [selectedIndex, setSelectedIndex] = useState<any>(0);
  const _renderItem = ({item, index}: any) => {
    return (
      <View style={styles.videoView}>
        <Video
          style={styles.videoView}
          paused={selectedIndex == index ? false : true}
          resizeMode={'cover'}
          source={item.Video}
        />
        <TouchableOpacity
          style={styles.pauseView}
          onPress={() => {
            if (selectedIndex == -1) {
              setSelectedIndex(index);
            } else {
              setSelectedIndex(-1);
            }
          }}>
          {selectedIndex == -1 ? (
            <Image
              style={styles.pauseButton}
              source={require('../assets/icon/pause.png')}
            />
          ) : null}
        </TouchableOpacity>
        <View style={styles.bottomHead}>
          <Text style={styles.titletxt}>{item.title}</Text>

          <View style={styles.channettxt}>
            <Image style={styles.profiletxt} source={item.profile} />
            <Text style={styles.profiletxt}>{item.channelName}</Text>
            <TouchableOpacity>
              <Image
                style={styles.subscribeButton}
                source={require('../assets/icon/subscribe.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={_renderItem}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        onScroll={(e: any) => {
          setSelectedIndex(e.nativeEvent.contentOffset.y.toFixed(0) / height);
        }}
      />
    </View>
  );
};

export default Shorts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  videoView: {
    width: width,
    height: height,
  },
  pauseView: {
    width: width,
    height: height,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
  },
  pauseButton: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 25,
  },
  bottomHead: {
    position: 'absolute',
    width: '100%',
    bottom: 20,
  },
  titletxt: {
    color: 'white',
    fontSize: 16,
    fontWeight: '800',
    marginLeft: 10,
  },
  channettxt: {
    flexDirection: 'row',
  },
  profiletxt: {
    height: 30,
    width: 30,
  },
  subscribeButton: {
    height: 40,
    width: 130,
    bottom: 10,
  },
});
