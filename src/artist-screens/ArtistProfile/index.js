import React from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Switch,
} from 'react-native';
import Modal from 'react-native-modal';
import {SafeAreaView} from 'react-native-safe-area-context';
import {fonts, useTheme} from '../../utils/theme';
import {heightToDp, width, widthToDp, height} from '../../utils/Dimensions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Button, GradientRadio} from '../../components';
import Row from './component/Row';
import {useDispatch, useSelector} from 'react-redux';
import {signout, testUpdateIsArtist} from '../../redux/actions';
import {useState} from 'react';
const beauty = require('../../assets/beauty_color.png');
const facebook = require('../../assets/facebook.png');
const instagram = require('../../assets/instagram.png');
const twitter = require('../../assets/twitter.png');
const idea = require('../../assets/idea.png');
const bug = require('../../assets/bug.png');
import faq from '../../assets/faq.png';

const kyanchiIcon = require('../../assets/profile_kyanchi.png');
const theme = useTheme();

const ArtistProfile = props => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalNavigation, setModalNavigation] = useState(null);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };
  const openFeedbackModal = navigation => {
    console.log('navigate', navigation)
    setModalVisible(true);
    setModalNavigation(navigation); // Save the navigation object in the state
  };
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.userDetails);
  console.log('22', user);

  function gotoArtist() {
    dispatch(testUpdateIsArtist({isArtist: false, isArtist: true}));
    console.log('22', user);
  }

  function gotoArtist() {
    dispatch(testUpdateIsArtist({isArtist: true, isArtist: false}));
  }

  const socialMediaIcons = [
    {title: 'Facebook', source: facebook},
    {title: 'Instagram', source: instagram},
    {title: 'Twitter', source: twitter},
  ];

  const PAYMENTS = [
    {
      icon: (
        <Ionicons
          name={'wallet-outline'}
          style={{fontSize: 16, color: theme.primary}}
        />
      ),
      title: 'My Wallet',
      onPress: () =>
        props.navigation.navigate('ArtistProfileStack', {
          screen: 'ArtistMyWallet',
        }),
    },
    {
      icon: (
        <FontAwesome
          name={'credit-card'}
          style={{fontSize: 16, color: theme.primary}}
        />
      ),
      title: 'Payment methods',
      onPress: () =>
        props.navigation.navigate('ArtistProfileStack', {
          screen: 'ArtistPaymentMethods',
        }),
    },
  ];

  const MYKAYNCHI = [
    {
      icon: (
        <AntDesign
          name={'questioncircleo'}
          style={{fontSize: 16, color: theme.primary}}
        />
      ),
      title: 'Help Center',
      onPress: () =>
        props.navigation.navigate('ArtistProfileStack', {
          screen: 'ArtistHelp',
        }),
    },
    {
      icon: (
        <Ionicons
          name={'ios-information-circle-outline'} // Use the information icon
          style={{fontSize: 16, color: theme.primary}}
        />
      ),
      title: 'About',
      onPress: () =>
        props.navigation.navigate('ArtistProfileStack', {
          screen: 'ArtistAbout',
        }),
    },
    {
      icon: (
        <Icon
          name={'message-text-outline'}
          style={{fontSize: 16, color: theme.primary}}
        />
      ),
      title: 'Give us feedback',
      onPress: () => openFeedbackModal(props.navigation), // Pass the navigation prop
    },
    {
      icon: (
        <Image
          source={require('../../assets/logout.png')}
          style={{
            width: widthToDp(4.5),
            height: heightToDp(4.5),
            resizeMode: 'cover',
          }}
        />
      ),
      title: 'Log out',
      onPress: () => dispatch(signout()),
    },
    // {
    //   icon: (
    //     <Image
    //       source={require('../../assets/logout.png')}
    //       style={{
    //         width: widthToDp(4.5),
    //         height: heightToDp(4.5),
    //         resizeMode: 'cover',
    //       }}
    //     />
    //   ),
    //   title: 'Continue as a artist',
    //   onPress: () => gotoArtist(),
    // },
  ];

  const MAIN = [
    {
      icon: (
        <Image
          source={require('../../assets/orderList.png')}
          style={{
            width: widthToDp(4.5),
            height: heightToDp(4.5),
            resizeMode: 'cover',
          }}
        />
      ),
      title: 'Order Settings',
      onPress: () =>
        props.navigation.navigate('ArtistProfileStack', {
          screen: 'ArtistOrderSetting',
        }),
    },
    {
      icon: (
        <Image
          source={require('../../assets/location.png')}
          style={{
            width: widthToDp(4.5),
            height: heightToDp(4.5),
            resizeMode: 'contain',
          }}
        />
      ),
      title: 'Your saved addresses',
      // onPress: () => props.navigation.navigate('ArtistSavedAddresses'),
      onPress: () =>
        props.navigation.navigate('ArtistProfileStack', {
          screen: 'ArtistSavedAddresses',
        }),
    },
    {
      icon: (
        <SimpleLineIcons
          name={'bell'}
          style={{fontSize: 16, color: theme.primary}}
        />
      ),
      title: 'Notifications',
      onPress: () =>
        props.navigation.navigate('ArtistProfileStack', {
          screen: 'ArtistNotifications',
        }),
    },
    {
      icon: (
        <Image
          source={require('../../assets/globe.png')}
          style={{
            width: widthToDp(4.5),
            height: heightToDp(4.5),
            resizeMode: 'cover',
          }}
        />
      ),
      title: 'Language',
      onPress: () =>
        props.navigation.navigate('ArtistProfileStack', {
          screen: 'ArtistLanguage',
        }),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: heightToDp(25)}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: widthToDp(4),
            marginTop: heightToDp(12.2),
          }}>
          <Image
            source={kyanchiIcon}
            style={{width: 50, height: 50, resizeMode: 'contain'}}
          />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>Switch to client</Text>
            <Switch
              trackColor={{false: '#767577', true: theme.primary}}
              thumbColor={isEnabled ? theme.primary : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
        <View style={styles.userProfileView}>
          <TouchableWithoutFeedback
            onPress={() => {
              props.navigation.navigate('ArtistProfileStack', {
                screen: 'ArtistYourProfile',
              });
            }}>
            <Image
              source={require('../../assets/profile.png')}
              style={styles.userImg}
            />
          </TouchableWithoutFeedback>
          <View style={styles.userDetailsView}>
            <Text style={styles.userName}>{'Rizwan Noor'}</Text>
            <View style={styles.centerDiv}>
              <Image
                source={beauty}
                style={{
                  width: 20,
                  height: 20,
                  resizeMode: 'contain',
                }}
              />
              <View style={[styles.centerDiv, {paddingTop: 5}]}>
                <Text
                  // onTextLayout={e => setTextWidth(e.nativeEvent.lines[0].width)}
                  style={[styles.artistLocation]}>
                  {'  Beautician '}
                </Text>

                <View style={[styles.dotContainer]}>
                  <Text
                    // onTextLayout={e => setRatingWidth(e.nativeEvent.lines[0].width)}
                    style={[styles.artistRating, {color: theme.primary}]}>
                    {'.'}
                  </Text>
                </View>
                <Text
                  // onTextLayout={e => setTextWidth(e.nativeEvent.lines[0].width)}
                  style={[styles.artistLocation]}>
                  {' New'}
                </Text>
              </View>
            </View>
          </View>
          <View>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() =>
                props.navigation.navigate('ArtistProfileStack', {
                  screen: 'ArtistProfileSaved',
                })
              }
              style={{padding: heightToDp(2.9)}}>
              <Icon
                name={'pencil'}
                style={[
                  styles.icon,
                  {backgroundColor: '#EEEEEE', padding: 5, borderRadius: 20},
                ]}
              />
            </TouchableOpacity>
          </View>
        </View>

        <GradientRadio
          source={require('../../assets/marketpreview.png')}
          containerStyle={{
            height: heightToDp(12.2),
            marginVertical: heightToDp(6.7),
            width: width * 0.91,
            alignItems: 'center',
            paddingVertical: 0,
            paddingHorizontal: 0,
            justifyContent: 'center',
            borderRadius: 41,
            alignSelf: 'center',
            flexDirection: 'row',
          }}
          title={'Your marketplace preview'}
          gradients={['#84668C', '#84668C']}
          gradientEnd={{x: 0, y: 1}}
          gradientStart={{x: 0, y: 0}}
          titleStyle={{marginTop: 0, marginLeft: widthToDp(2)}}
          imgStyle={{width: widthToDp(4.5), height: heightToDp(4.5)}}
        />
        <GradientRadio
          source={require('../../assets/mail.png')}
          containerStyle={{
            height: heightToDp(12.2),
            // marginVertical: heightToDp(1.7),
            marginBottom: 15,
            width: width * 0.91,
            alignItems: 'center',
            paddingVertical: 0,
            paddingHorizontal: 0,
            justifyContent: 'center',
            borderRadius: 41,
            alignSelf: 'center',
            flexDirection: 'row',
          }}
          title={'Invite friends & get 15% off'}
          gradients={['#668C6A', '#668C6A']}
          gradientEnd={{x: 0, y: 1}}
          gradientStart={{x: 0, y: 0}}
          titleStyle={{marginTop: 0, marginLeft: widthToDp(2)}}
          imgStyle={{width: widthToDp(4.5), height: heightToDp(4.5)}}
          onPress={() =>
            props.navigation.navigate('ArtistProfileStack', {
              screen: 'ArtistInviteFriends',
            })
          }
        />
        <View style={styles.btnView}>
          {MAIN.map((item, index) => {
            return (
              <View style={{marginTop: index > 0 ? heightToDp(4.5) : 0}}>
                <Row
                  icon={item.icon}
                  title={item.title}
                  onPress={item.onPress}
                />
              </View>
            );
          })}
        </View>
        <Text style={styles.heading}>{'Payments'}</Text>
        <View style={styles.btnView}>
          {PAYMENTS.map((item, index) => {
            return (
              <View style={{marginTop: index > 0 ? heightToDp(4.5) : 0}}>
                <Row
                  icon={item.icon}
                  title={item.title}
                  onPress={item.onPress}
                />
              </View>
            );
          })}
        </View>
        <Text style={styles.heading}>{'My Kaynchi'}</Text>
        <View style={styles.btnView}>
          {MYKAYNCHI.map((item, index) => {
            return (
              <View style={{marginTop: index > 0 ? 16 : 0}}>
                <Row
                  onPress={item.onPress}
                  icon={item.icon}
                  title={item.title}
                />
              </View>
            );
          })}
        </View>

        
        <View
          style={{
            marginHorizontal: widthToDp(4),
            paddingTop: 15,
          }}>
          <Text style={{paddingBottom: 10}}>Follow us</Text>
          <View style={{flexDirection: 'row'}}>
            {socialMediaIcons.map((icon, index) => (
              <View
                key={index}
                style={{
                  borderColor: theme.primary,
                  borderWidth: 1,
                  paddingVertical: 10,
                  paddingHorizontal: 38,
                  marginRight: 10,
                  borderRadius: 20,
                }}>
                <Image
                  source={icon.source}
                  style={{width: 25, height: 25, resizeMode: 'contain'}}
                />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      <Modal
          coverScreen={false}
          isVisible={modalVisible}
          style={{flex: 1, margin: 0, justifyContent: 'flex-end'}}
          onSwipeComplete={() => setModalVisible(!modalVisible)}
          swipeDirection={['down']}>
          <View style={styles.modalMainView}>
            <TouchableOpacity
              onPress={() =>
                modalNavigation.navigate('ArtistProfileStack', {
                  screen: 'ArtistShareIdea',
                })
              }>
              <View style={styles.feedbackContainer}>
                <Image source={idea} style={styles.ideaimage} />
                <View>
                  <Text style={{fontWeight: '700', color: '#2F3A58'}}>
                    Share an idea
                  </Text>
                  <Text>I have a suggestion or feature request</Text>
                </View>
                <Image source={faq} style={styles.faqimage} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                modalNavigation.navigate('ArtistProfileStack', {
                  screen: 'ArtistReportBug',
                })
              }>
              <View style={styles.feedbackContainer}>
                <Image source={bug} style={styles.ideaimage} />
                <View>
                  <Text style={{fontWeight: '700', color: '#2F3A58'}}>
                    Report a bug
                  </Text>
                  <Text>Something isn't working as expected</Text>
                </View>
                <Image source={faq} style={styles.faqimage} />
              </View>
            </TouchableOpacity>
            <Text
              style={{
                color: '#677790',
                marginHorizontal: widthToDp(9),
                marginTop: 15,
              }}>
              For help resolving issues related to an order, please contect{' '}
              <Text style={{color: '#84668C'}}>Customer Support</Text>
            </Text>
          </View>
        </Modal>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.homeBackground,
  },
  ideaimage: {width: 24, height: 26, resizeMode: 'contain'},
  feedbackContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    marginTop: 20,
    paddingVertical: 20,
    marginHorizontal: widthToDp(5),
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  you: {
    fontFamily: fonts.hk_bold,
    fontSize: 32,
    lineHeight: 34,
    color: theme.darkBlue,
    marginTop: heightToDp(23.9),
    marginLeft: widthToDp(6.7),
  },
  faqimage: {width: 12, height: 12, resizeMode: 'contain'},

  modalMainView: {
    // height: height * 0.55,
    backgroundColor: '#F7F7F7',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 15
  },
  userProfileView: {
    marginTop: heightToDp(2.2),
    paddingLeft: widthToDp(6.7),
    paddingRight: 8,
    flexDirection: 'row',
    alignItems: 'center',
    width: width * 0.91,
    alignSelf: 'center',
    height: 93,
    backgroundColor: theme.background,
    borderRadius: 10,
  },
  centerDiv: {flexDirection: 'row', alignItems: 'center'},
  artistName: {
    color: theme.background,
    fontSize: 32,
    fontFamily: fonts.hk_bold,
    lineHeight: 38.41,
  },
  artistLocation: {
    color: theme.primary,
    fontSize: 14,
    fontFamily: fonts.robo_reg,
    lineHeight: 16.41,
  },
  dotContainer: {
    width: 5, // Adjust the size of the dot
    height: 5, // Adjust the size of the dot
    borderRadius: 5, // Make it a circle
    backgroundColor: theme.primary, // Set the desired color for the dot
  },
  artistRating: {
    color: theme.primary,
    fontSize: 16,
    fontFamily: fonts.segoi,
    lineHeight: 21.28,
    marginLeft: 16,
    marginRight: 8.67,
  },
  icon: {
    fontSize: 20,
    color: theme.primary,
  },
  btnView: {
    width: width * 0.91,
    backgroundColor: theme.background,
    padding: 16,
    borderRadius: 10,
    alignSelf: 'center',
  },
  userImg: {
    width: widthToDp(12.8),
    height: heightToDp(12.8),
    resizeMode: 'cover',
    borderRadius: heightToDp(12.8) / 2,
  },
  userDetailsView: {
    flex: 1,
    marginLeft: widthToDp(5),
    marginRight: widthToDp(2.2),
  },
  userName: {
    fontFamily: fonts.robo_bold,
    fontSize: 20,
    lineHeight: 26,
    color: theme.profileBlueText,
  },
  userContact: {
    fontFamily: fonts.gothic_regular,
    fontSize: 14,
    lineHeight: 20,
    color: theme.profileBlueText,
  },
  inviteBtn: {
    backgroundColor: theme.inviteBtnBlue,
    marginVertical: heightToDp(4.5),
  },
  inviteBtnIcon: {
    fontSize: 20,
    color: theme.background,
    marginRight: widthToDp(2.2),
  },
  heading: {
    fontFamily: fonts.robo_med,
    fontSize: 14,
    lineHeight: 16.41,
    color: theme.counterGrey,
    marginLeft: widthToDp(4.5),
    marginTop: heightToDp(6.7),
    marginBottom: heightToDp(2, 2),
  },
});

export default ArtistProfile;
