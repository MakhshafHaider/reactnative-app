import React, {useRef} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {fonts, useTheme} from '../../utils/theme';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Button, Header} from '../../components';
import {height, heightToDp, width, widthToDp} from '../../utils/Dimensions';
import {useDispatch} from 'react-redux';
import {showMessage} from 'react-native-flash-message';
import {saveUserData} from '../../redux/actions';
import Icon from 'react-native-vector-icons/FontAwesome';
import MultiButton from '../../components/MultiButton';

const theme = useTheme();

const slides = [
  {
    key: 1,
    heading: 'Menu',
    title: 'First things first, we create  our own groming menu',
    text: 'You can either offer one-off services or package them together asa  deal. We recommend both.',
    image: require('../../assets/Demo1.png'),
  },
  {
    key: 2,
    heading: 'Mood',
    title: `It's all about you, so your mood comes first`,
    text: 'Choose between traveling or hosting. Select both to activate all your gigs because all gigs have their own mood.',
    image: require('../../assets/Demo2.png'),
  },
  {
    key: 3,
    heading: 'Orders',
    title: 'Menu done? Set your availablity and get verified',
    text: 'Verify yourself in 3 easy steps and set your availability and booking slots to get order. Color coded so you can remember easily',
    image: require('../../assets/Demo3.png'),
  },
  {
    key: 4,
    heading: 'Charts',
    title: 'Grow ranks with analytics and show up on charts',
    text: 'Track your growth with our leveling system. With our weekly yop 10s for every category, you can now make a name nationality.   ',
    image: require('../../assets/Demo4.png'),
  },
];

const car = require('../../assets/car.png');
const host = require('../../assets/host.png');
const booking = require('../../assets/booking.png');
const ondemand = require('../../assets/ondemand.png');
const info = require('../../assets/information.png');

const ArtistOnBoarding = props => {
  const {navigation, route} = props;

  // const {data} = route.params;
  const dispatch = useDispatch();
  const myFlatList = useRef(null);

  const addData = async () => {
    //   navigation.replace('MainStack');
    // try {
    //   // setLoading(true);
    //   dispatch(saveUserData(data));
    //   navigation.replace('MainStack');
    // } catch (error) {
    //   showMessage({
    //     message: error?.message,
    //     type: 'warning',
    //   });
    //   console.log(error);
    // }
  };

  const _renderItem = ({item, index}) => {
    return (
      <View style={{flex: 1}}>
        <Header
          title={item.heading}
          skip
          onSkip={() => navigation.replace('ArtistHome')}
        />
        <Image style={styles.img} source={item.image} resizeMode="contain" />

        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.txt}>{item.text}</Text>
        {item.key == 1 && (
          <View style={styles.indicatorView}>
            <View style={styles.row}>
              <Text style={styles.indicatorTxt}>Basic Gigs</Text>
              <Image
                source={info}
                style={{width: 20, height: 20, marginLeft: 5}}
              />
            </View>
            <View style={styles.row}>
              <Text style={styles.indicatorTxt}>Promotional Gigs</Text>
              <Image
                source={info}
                style={{width: 20, height: 20, marginLeft: 5}}
              />
            </View>
          </View>
        )}
        {item.key == 2 && (
          <View style={styles.indicatorView}>
            <View style={styles.row}>
              <MultiButton title={'Travel to Client'} image={car} disable />
              <MultiButton title={'Host the client'} image={host} disable />
            </View>
          </View>
        )}
        {item.key == 3 && (
          <View style={styles.indicatorView}>
            <View style={styles.row}>
              <MultiButton
                title={'On-Demand'}
                btnStyle={{backgroundColor: '#a77246'}}
                image={ondemand}
                disable
              />
              <MultiButton
                title={'Booking Only'}
                btnStyle={{backgroundColor: '#008274'}}
                image={booking}
                disable
              />
            </View>
          </View>
        )}
        {/* <Button title={item.btn} btnStyle={{position:'absolute',bottom:heightToDp(5.5)}} /> */}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppIntroSlider
        ref={myFlatList}
        style={{flex: 1, backgroundColor: '#FFF'}}
        renderItem={_renderItem}
        activeDotStyle={{width: 0, height: 0}}
        dotStyle={{height: 0, width: 0}}
        renderNextButton={() => <Button title={'Next'} disable />}
        renderDoneButton={() => <Button title={"Let's go"} onPress={() => props.navigation.navigate('ArtistHomeStack')} disable />}
        data={slides}
        onDone={addData}
        onSkip={() => navigation.replace('AuthStack')}
      />
    </SafeAreaView>
  );
};

export default ArtistOnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    paddingTop: heightToDp(8),
  },
  indicatorTxt: {
    fontSize: 16,
    fontFamily: fonts.robo_reg,
    color: theme.darkBlack,
    lineHeight: 18.75,
    marginLeft: widthToDp(2),
  },
  dot: {
    width: 9,
    height: 9,
    borderRadius: 9 / 2,
  },
  indicatorView: {marginHorizontal: 24, marginTop: heightToDp(6)},
  row: {flexDirection: 'row', alignItems: 'center'},
  img: {
    resizeMode: 'cover',
    height: heightToDp(86.95),
    width: widthToDp(69.9),
    alignSelf: 'center',
    marginTop: heightToDp(6.7),
  },
  txt: {
    fontSize: 16,
    marginHorizontal: 24,
    fontFamily: fonts.robo_reg,
    color: theme.darkBlack,
    marginTop: 8,
    lineHeight: 18.75,
    marginRight: widthToDp(5),
  },
  title: {
    fontSize: 24,
    marginHorizontal: 24,
    fontFamily: fonts.robo_med,
    color: theme.lightBlack,
    marginTop: 23,
    lineHeight: 28.13,
  },
});
