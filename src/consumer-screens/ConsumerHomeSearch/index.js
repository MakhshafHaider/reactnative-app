import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  StyleSheet,
  FlatList,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, Header, HomeCard, SearchBox} from '../../components';
import {heightToDp, width, widthToDp} from '../../utils/Dimensions';
import {fonts, useTheme} from '../../utils/theme';
import ArtistItem from '../../components/ArtistItem';
import Feather from 'react-native-vector-icons/Feather';
import {useSelector} from 'react-redux';
// import api from '../../utils/APIservice';

const hair = require('../../assets/HairDark.png');
const face = require('../../assets/FaceDark.png');
const waxing = require('../../assets/BodyDark.png');
const Massages = require('../../assets/SpaDark.png');
const Botox = require('../../assets/TreatDark.png');
const hosting = require('../../assets/hosting.png');
const beauty_color = require('../../assets/beauty_color.png');
const topOffer = require('../../assets/topOffer.png');
const Mask_group = require('../../assets/Mask_group.png');
const popular_image = require('../../assets/popular_image.png');
const rose_gold = require('../../assets/rose_gold.png');
const People_flying = require('../../assets/People_flying.png');
const starYellow = require('../../assets/star_yellow.png');
const theme = useTheme();
const artistData = [
  {
    name: 'Nabeela Ahmed',
    rating: 5.0,
    reviewCount: 13,
    address: 'Phase VI, Ittehad Commercial...',
    category: 'Beautician • Top',
    distance: '4.5 Km away',
  },
  {
    name: 'Nabeela Ahmed',
    rating: 5.0,
    reviewCount: 13,
    address: 'Phase VI, Ittehad Commercial...',
    category: 'Beautician • Top',
    distance: '4.5 Km away',
  },
  // Add more artist data here as needed
];

const DATA = [
  {
    name: 'Top',
    imageLink: topOffer,
  },
  {
    name: 'Hair',
    imageLink: hair,
  },
  {
    name: 'Face',
    imageLink: face,
  },
  {
    name: 'Body',
    imageLink: waxing,
  },
  {
    name: 'Spa',
    imageLink: Massages,
  },
  {
    name: 'Treat',
    imageLink: Botox,
  },
];

const ConsumerHomeSearch = props => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [clickedIndex, setClickedIndex] = useState(0);

  // const getService = async () => {
  //   try {
  //     const res = await api.get('/api/service');

  //     console.log(res.data);
  //     setService(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const getArtist = async () => {
  //   try {
  //     const res = await api.get('/api/users/artists');

  //     console.log(res.data);
  //     setArtist(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   getService();
  //   getArtist();
  // }, []);
  const renderItem = ({item, index}) => (
    <TouchableOpacity
      onPress={() => setClickedIndex(index)}
      activeOpacity={0.7}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        padding: 10,
        borderRadius: 20,
        backgroundColor: clickedIndex === index ? '#5EAC66' : '#EEEEEE',
      }}>
      <Image
        source={item.imageLink}
        style={{width: 20, height: 20, resizeMode: 'contain', marginRight: 10}}
      />
      <Text style={{color: clickedIndex === index ? 'white' : '#0F2851'}}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{paddingBottom: 90}}>
        <Header backBtn title="Serach" />
        <SearchBox
          value={searchKeyword}
          onChange={txt => setSearchKeyword(txt)}
          placeholder={'Haircut'}
          onSearch={() =>
            props.navigation.navigate('HomeStack', {screen: 'Search'})
          }
        />
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.name}
          horizontal
        />

        <FlatList
          data={artistData}
          renderItem={({item}) => <ArtistItem {...item} />}
          keyExtractor={(item, index) => index.toString()}
        />

        <View style={styles.inviteContainer}>
          <View style={styles.InviteFriend}>
            <Text style={{color: 'white', fontWeight: '700', fontSize: 20}}>
              Invite a friend & get 15% off right now!
            </Text>
            <Text style={{color: '#D8B29B', fontSize: 13, paddingVertical: 10}}>
              {'Learn more   >'}
            </Text>
          </View>
          <View>
            <Image
              source={People_flying}
              style={{height: 94, width: 94, resizeMode: 'cover'}}
            />
          </View>
        </View>
      </ScrollView>
      {/* <Button
        title={'Continue'}
        btnStyle={styles.btn}
        onPress={() => props.navigation.navigate('Search')}
      /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.homeBackground,
    paddingTop: heightToDp(4),
  },
  discover: {
    backgroundColor: 'white',
    width: width * 0.42,
    borderRadius: 10,
    height: heightToDp(40),
  },
  chart: {
    backgroundColor: 'white',
    width: width * 0.45,
    borderRadius: 10,
    flex: 1,
    alignItems: 'stretch',
    paddingLeft: 10,
  },
  InviteFriend: {
    backgroundColor: '#67506D',
    width: widthToDp(65),
    padding: 10,
    borderRadius: 10,
  },
  inviteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: widthToDp(5),
    backgroundColor: 'white',
  },
  containerContent: {
    width: width * 0.93,
    flexDirection: 'row',
    height: heightToDp(40),
    marginHorizontal: widthToDp(4),
    borderRadius: 10,
    overflow: 'hidden', // Ensure content doesn't overflow the container
  },
  imageContainer: {
    flex: 1,
    backgroundColor: 'white',
    height: heightToDp(31),
    padding: 5,
  },
  distance: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  explorContainer: {flexDirection: 'row', marginHorizontal: widthToDp(4)},
  logoView: {
    flexDirection: 'row',
    height: heightToDp(24),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buzzTxt: {
    fontSize: 20,
    color: '#2F3A58',
    marginLeft: widthToDp(5),
    marginVertical: 10,
  },
  images: {width: widthToDp(33), height: heightToDp(37), resizeMode: 'cover'},
  text: {
    backgroundColor: '#587c5c',
    color: 'white',
    padding: 5,
    fontSize: 11,
    borderRadius: 20,
    position: 'absolute',
    right: widthToDp(5),
    top: heightToDp(10),
  },
  logo: {
    width: widthToDp(29.5),
    height: heightToDp(7),
    marginTop: heightToDp(2),
    resizeMode: 'contain',
  },
  btn: {
    position: 'absolute',
    bottom: heightToDp(5.5),
  },
  inputBox: {
    flex: 1,
    fontSize: heightToDp(4.5),
    fontFamily: fonts.robo_reg,
    lineHeight: 18.75,
    color: theme.darkBlack,
    paddingLeft: widthToDp(6.5),
  },
  searchBar: {
    height: heightToDp(13.3),
    width: width * 0.91,
    backgroundColor: theme.background,
    alignSelf: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
  },
  icon: {
    fontSize: heightToDp(5),
    padding: heightToDp(4.5),
    color: theme.primary,
  },
  title: {
    fontFamily: fonts.hk_medium,
    fontSize: 20,
    lineHeight: 24,
    color: theme.lightBlack,
    // width: width * 0.868,
    alignSelf: 'center',
    marginVertical: heightToDp(1.5),
  },
});

export default ConsumerHomeSearch;
