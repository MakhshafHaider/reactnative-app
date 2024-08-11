import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  StyleSheet,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, Header, HomeCard, SearchBox} from '../../components';
import {heightToDp, width, widthToDp, height} from '../../utils/Dimensions';
import {fonts, useTheme, images} from '../../utils/theme';
import Feather from 'react-native-vector-icons/Feather';
import {useSelector} from 'react-redux';
import api from '../../utils/APIservice';
import SliderComponent from '../../components/Slider';
import {useNavigation} from '@react-navigation/native'; // Import the navigation hook
import Insights from './components/Insights';
import Performance from './components/Performance';
import ModalContent from '../../components/ModalContent';

const theme = useTheme();
//images import
const timer = require('../../assets/timer.png');
const carBrown = require('../../assets/car_brown.png');
const location = require('../../assets/Path.png');
const pending = require('../../assets/pending.png');
const completed = require('../../assets/completed.png');
const confirmed = require('../../assets/confirmed.png');
const information = require('../../assets/information.png');
const completion = require('../../assets/Completion.png');
const punctuality = require('../../assets/Punctuality.png');
const availability = require('../../assets/Availabilty.png');
const leftArrow = require('../../assets/left.png');
const rightArrow = require('../../assets/right.png');
const upArrow = require('../../assets/up.png');
const impression = require('../../assets/impressions.png');
const host_green = require('../../assets/host_green.png');
const CreateGig = require('../../assets/CreateGig.png');
const CreatePromo = require('../../assets/CreatePromo.png');

const dummyServiceData = [
  {
    name: 'Hair Styling',
    address_text: '123 Main St',
    verified: true,
    popular: true,
  },
  {
    name: 'Nail Art',
    address_text: '456 Broadway Ave',
    verified: false,
    popular: true,
  },
  {
    name: 'Makeup Artist',
    address_text: '789 Elm Rd',
    verified: true,
    popular: false,
  },
  {
    name: 'Massage Therapy',
    address_text: '101 Oak Lane',
    verified: false,
    popular: false,
  },
];

const orders = [
  {
    name: 'John Doe',
    serviceCost: 30000,
    services: ['Foot Massage', 'Haircut', 'Manicure'],
    salonAddress: '123 Salon Street, Cityville',
    arrivalTime: '50-60 mins',
    imageLink: carBrown,
    status: 'wants to TRAVEL',
  },
  {
    name: 'Jane Smith',
    serviceCost: 25000,
    services: ['Facial', 'Pedicure'],
    salonAddress: '456 Spa Avenue, Townsville',
    arrivalTime: '30-40 mins',
    imageLink: host_green,
    status: 'wants to HOST',
  },
];

const dummyArtistData = [
  {
    name: 'John Doe',
    location: 'New York, NY',
    subText: 'Specializes in Hair Styling',
    verified: true,
    popular: true,
  },
  {
    name: 'Jane Smith',
    location: 'Los Angeles, CA',
    subText: 'Specializes in Makeup Artistry',
    verified: true,
    popular: false,
  },
  {
    name: 'Alex Johnson',
    location: 'Chicago, IL',
    subText: 'Specializes in Nail Art',
    verified: true,
    popular: false,
  },
  {
    name: 'Emily Wilson',
    location: 'Houston, TX',
    subText: 'Specializes in Massage Therapy',
    verified: false,
    popular: false,
  },
];

const DATA = [
  {
    mainText: 'Rizwan Noor',
    location: true,
    subText: 'Tariq Road',
    verified: true,
    popular: true,
  },
  {
    mainText: 'Rizwan Noor',
    location: true,
    subText: 'Tariq Road',
    verified: true,
    popular: false,
  },
  {
    mainText: 'Rizwan Noor',
    location: true,
    subText: 'Tariq Road',
    verified: true,
    popular: false,
  },
  {
    mainText: 'Rizwan Noor',
    location: true,
    subText: 'Tariq Road',
    verified: true,
    popular: false,
  },
];

const ModalData = [
  {
    id: 'gig',
    modalImageSource: images.CreateGig,
    modalDescription:
      'Basic gig allows you to offer services in snigle category only',
    modalTitle: 'Create a Gig',
  },
  {
    id: 'promo',
    modalImageSource: images.CreatePromo,
    modalDescription:
      'Promotional are mix of your gigs and any additional service you want to offer',
    modalTitle: 'Create a Promo',
  },
];
const insightData = [
  {
    title: 'Impression',
    count: '955',
    imageLink: impression,
  },
  {
    title: 'Clicks',
    count: '16',
    imageLink: impression,
  },
  {
    title: 'Conversions',
    count: '0.21%',
    imageLink: impression,
  },
];

const PerformanceData = [
  {
    percantage: '92%',
    title: 'Completion Rate',
    Description: 'You completed 32 out of 36 jobs',
    imageLink: completion,
  },
  {
    percantage: '87%',
    title: 'Punctuality',
    Description: 'You completed 32 out of 36 jobs',
    imageLink: punctuality,
  },
  {
    percantage: '92%',
    title: 'Avaiabiltiy Rate',
    Description: 'You completed 32 out of 36 jobs',
    imageLink: availability,
  },
];

const orderSummary = [
  {
    bookingCount: 5,
    status: 'Bookings Pending',
    imageSource: pending,
  },
  {
    bookingCount: 5,
    status: 'Bookings Confirmed',
    imageSource: confirmed,
  },
  {
    bookingCount: 5,
    status: 'Bookings Completed',
    imageSource: completed,
  },
];

const ArtistHome = props => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [service, setService] = useState([]);
  const [artist, setArtist] = useState([]);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = newValue => {
    setSliderValue(newValue);
  };

  const handleOrder = () => {
    props.navigation.navigate('ArtistOrderStack', {
      screen: 'ArtistOrders',
    });
  };
  const handleButtonPress = () => {
    // setIsModalVisible(true);
    props.navigation.navigate('ArtistHomeStack', {screen: 'ArtistGig'});
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const handleInfoIconPress = () => {
    props.navigation.navigate('ArtistHomeStack', {screen: 'ArtistRankUp'});
  };

  const user = useSelector(state => console.log(state.auth.token));
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
  const getService = async () => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setService(dummyServiceData);
    } catch (error) {
      console.log(error);
    }
  };

  const getArtist = async () => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setArtist(dummyArtistData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getService();
    getArtist();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{paddingBottom: 90}}>
        <View style={styles.logoView}>
          <Image
            source={require('../../assets/KAYNCHI.png')}
            style={styles.logo}
          />
          <Text style={styles.text}>Get 15% off</Text>
        </View>
        {/* welcome text and icons */}
        <View style={styles.welcome}>
          <View>
            <Text style={styles.welcomeTxt}>Welcome</Text>
            <Text style={styles.welcomeTxt}>Narmeen!</Text>
          </View>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../../assets/Status.png')}
                style={{
                  height: 20,
                  width: 20,
                  resizeMode: 'contain',
                  marginRight: 5,
                  marginLeft: 5,
                }}
              />
              <Text>Your Status</Text>
            </View>
            <View style={styles.icons}>
              <View
                style={[styles.iconConatiner, {backgroundColor: '#ebebeb'}]}>
                <Image
                  source={require('../../assets/host.png')}
                  style={styles.iconStyle}
                />
              </View>
              <View
                style={[styles.iconConatiner, {backgroundColor: '#1583d8'}]}>
                <Image
                  source={require('../../assets/car.png')}
                  style={styles.iconStyle}
                />
              </View>
              <View
                style={[styles.iconConatiner, {backgroundColor: '#a77246'}]}>
                <Image
                  source={require('../../assets/ondemand.png')}
                  style={styles.iconStyle}
                />
              </View>
            </View>
          </View>
        </View>

        {/* last hosted */}

        <View style={styles.hosted}>
          <Text style={styles.hostedHeading}>
            Last hosted at North Nazimabad
          </Text>
          <Text style={{textAlign: 'center', marginTop: 2}}>
            Amjad is expecting you at 10:30AM
          </Text>
        </View>

        {/* create a gig button */}
        <Button
          title="Create a new gig"
          btnStyle={{backgroundColor: '#644874'}}
          image={timer}
          imageStyle={styles.buttonicon}
          onPress={handleButtonPress} // Call the handleButtonPress function when the button is pressed
        />

        {/* The Modal */}
        <Modal
          visible={isModalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={closeModal}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <TouchableOpacity
                onPress={closeModal}
                style={styles.closeIconContainer}>
                <Feather name="x" size={24} color="black" />
              </TouchableOpacity>

              {ModalData.map((data, index) => (
                <View style={[styles.modalElement]} key={index}>
                  <View
                    style={[
                      data.id === 'gig'
                        ? {backgroundColor: '#416245'}
                        : {backgroundColor: theme.primary},
                      {
                        width: widthToDp(60),
                        padding: 15,
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        borderRadius: 10,
                      },
                    ]}>
                    <Text style={styles.modalText}>{data.modalTitle}</Text>
                    <Text style={styles.modalDescription}>
                      {data.modalDescription}
                    </Text>
                  </View>
                  <View>
                    <Image
                      source={data.modalImageSource}
                      style={styles.imageModal}
                    />
                  </View>
                </View>
              ))}
            </View>
          </View>
        </Modal>

        {/* <SearchBox
          value={searchKeyword}
          onChange={txt => setSearchKeyword(txt)}
          placeholder={'Artist, salon, or service…'}
          onSearch={() =>
            props.navigation.navigate('HomeStack', {screen: 'Search'})
          }
        /> */}

        {/* latest Order */}

        <View style={styles.latestOrder}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 5,
            }}>
            <Text>Your latest orders</Text>
            <TouchableOpacity onPress={handleOrder}>
              <Text style={{color: '#32aee3'}}>View all</Text>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row'}}>
            {orders.map((order, index) => (
              <View key={index} style={styles.orderContainer}>
                <View
                  style={{paddingHorizontal: widthToDp(3), paddingBottom: 5}}>
                  <View style={styles.orderDetails}>
                    <Image source={order.imageLink} style={styles.OrderImage} />
                    <Text style={styles.latestbutton}>On-Demand</Text>
                  </View>
                  <View>
                    <Text style={styles.headingName}>{order.name}</Text>
                    <View style={{flexDirection: 'row'}}>
                      <Text>{order.status}</Text>
                      <Image
                        source={information}
                        style={{
                          height: 15,
                          width: 15,
                          marginLeft: widthToDp(2),
                        }}
                      />
                    </View>
                    <Text style={styles.textBold}>
                      SERVICES: Rs {order.serviceCost}
                    </Text>
                    {order.services.map((service, serviceIndex) => {
                      const maxServicesToShow = 1;

                      if (serviceIndex < maxServicesToShow) {
                        return <Text key={serviceIndex}>{service}</Text>;
                      } else if (serviceIndex === maxServicesToShow) {
                        const remainingServices =
                          order.services.length - maxServicesToShow;
                        return (
                          <TouchableOpacity
                            key={serviceIndex}
                            onPress={() => {
                              console.log('Touchable link pressed!');
                            }}>
                            <Text
                              style={{
                                color: '#32aee3',
                              }}>{`and ${remainingServices} more service(s)`}</Text>
                          </TouchableOpacity>
                        );
                      }
                      return null; // If more than the maximum services are shown, don't render them
                    })}
                    <Text style={styles.textBold}>Travelling to:</Text>
                    <View style={{flexDirection: 'row'}}>
                      <Image
                        source={location}
                        style={{height: 15, width: 15, resizeMode: 'contain'}}
                      />
                      <Text style={{color: '#32aee3'}}>
                        {order.salonAddress}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text style={styles.textBold}>Arriving in:</Text>
                      <Text style={{color: theme.primary, fontSize: 12}}>
                        {order.arrivalTime}
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.buttons}>
                  <TouchableOpacity
                    style={styles.buttonOrder}
                    onPress={()=> props.navigation.navigate('ArtistOrderStack', {
                      screen: 'ArtistTimeline',
                    })}>
                    <Text style={styles.buttonText}>View</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonOrder}>
                    <Text style={styles.buttonText}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* order summary */}
        <View>
          <Text style={{marginLeft: widthToDp(5)}}>Order Summary</Text>
          <View style={{flexDirection: 'row', margin: widthToDp(3)}}>
            {orderSummary.map(item => (
              <View style={styles.OrderSummaryContainer}>
                <Text style={styles.bookingCount}>{item.bookingCount}</Text>
                <Text>{item.status}</Text>
                <Image
                  source={item.imageSource}
                  style={styles.orderSummaryImage}
                />
              </View>
            ))}
          </View>
        </View>

        {/* Rank up */}

        <View style={{marginLeft: widthToDp(5), marginTop: heightToDp(5)}}>
          <TouchableOpacity onPress={handleInfoIconPress}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.heading}>Grow your Rank</Text>
              <Image source={information} style={{height: 20, width: 20}} />
            </View>
          </TouchableOpacity>
          <Text>
            <Text style={{fontWeight: 'bold'}}>Next evaluation</Text>
            {' (25th Jul 2023)'}
          </Text>
          <Text>(Approaching in 12 days)</Text>
        </View>
        {/* slider */}
        <View
          style={{
            marginHorizontal: widthToDp(5),
            marginVertical: heightToDp(2),
          }}>
          <SliderComponent
            min={0}
            max={100}
            value={sliderValue}
            onChange={handleSliderChange}
            colorSlider="#29AAE2"
            start="New"
            end="Expert"
          />
        </View>

        {/* Performance */}

        <View>
          <Text style={{marginLeft: widthToDp(5)}}>
            Your Performance metrices
          </Text>
          <Performance PerformanceData={PerformanceData} />
        </View>

        {/* Earning */}

        <View>
          <View style={styles.EarningDetail}>
            <View>
              <Text style={styles.heading}>Earning</Text>
            </View>
            <View style={styles.arrowDetail}>
              <Image source={leftArrow} style={styles.arrow} />
              <Text style={{marginHorizontal: widthToDp(5)}}>Last Month</Text>
              <Image source={rightArrow} style={styles.arrow} />
            </View>
          </View>

          <View style={styles.EarningConatiner}>
            <View style={styles.hostingContainer}>
              <Text style={styles.hostingHeading}>Hosting Orders</Text>
              <Image source={upArrow} style={styles.arrow} />
            </View>
            <View style={styles.TotalEarned}>
              <Text style={styles.EarnedAmount}>Rs 48,700</Text>
              <Text style={{textAlign: 'right'}}>Total Earned</Text>
            </View>
          </View>

          <Insights insightData={insightData} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.homeBackground,
  },

  modalElement: {
    backgroundColor: 'white',
    width: width * 0.91,
    height: (height * 0.91) / 4.5, // Set a fixed height or remove this line if you want it to adjust based on content
    // paddingVertical: 20,
    // paddingHorizontal: 10,
    flexDirection: 'row',
    borderRadius: 10,
    marginTop: 20,
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  modalDescription: {
    fontSize: 12,
    color: 'white',
    textAlign: 'justify',
    paddingRight: widthToDp(17),
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent black background
  },
  modalContent: {
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    paddingTop: 20,
  },
  imageModal: {
    width: 80,
    height: 100,
    resizeMode: 'contain',
    marginTop: heightToDp(5),
    marginLeft: 10,
  },
  closeIconContainer: {
    backgroundColor: '#EEEEEE',
    borderRadius: 20,
    position: 'absolute',
    right: 20,
    top: 5,
  },

  welcome: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: widthToDp(5),
  },
  logoView: {
    flexDirection: 'row',
    height: heightToDp(24),
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: widthToDp(29.5),
    height: heightToDp(7),
    marginTop: heightToDp(2),
    resizeMode: 'contain',
  },
  icons: {
    flexDirection: 'row',
    marginTop: 5,
  },
  iconStyle: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  separator: {
    height: 1,
    backgroundColor: 'yellow',
    marginVertical: 5,
  },
  iconConatiner: {
    marginTop: 5,
    margin: 5,
    borderRadius: 50,
    padding: 5,
  },
  hosted: {
    backgroundColor: 'white',
    padding: heightToDp(8),
    margin: widthToDp(5),
    borderRadius: 20,
  },
  EarningDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: widthToDp(5),
  },
  buttons: {flexDirection: 'row', backgroundColor: 'white', borderRadius: 5},
  buttonText: {
    color: '#32aee3',
    width: widthToDp(22.3),
    textAlign: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#f7f7f7',
  },
  textBold: {
    fontWeight: 'bold',
  },
  // buttonOrder:{
  //   width: (width * .91)/2
  // },
  insightDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  arrow: {height: 12, width: 12, resizeMode: 'contain'},
  arrowDetail: {flexDirection: 'row', alignItems: 'center'},
  orderSummaryImage: {
    width: 20,
    height: 20,
    position: 'absolute',
    right: 8,
    top: 8,
    resizeMode: 'contain',
  },
  hostingContainer: {
    backgroundColor: theme.primary,
    flexDirection: 'row',
    alignItems: 'center',
    // padding: 15,
    padding: widthToDp(4),
    borderRadius: 10,
    marginRight: 10,
  },
  hostingHeading: {fontSize: 28, color: 'white', fontWeight: 'bold'},
  EarningConatiner: {
    flexDirection: 'row',
    marginHorizontal: widthToDp(5),
    // width: (width * 0.91) / 2,
    width: widthToDp(55),
  },
  TotalEarned: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: widthToDp(7),
  },
  EarnedAmount: {fontSize: 26, color: theme.primary, textAlign: 'right'},
  insight: {
    backgroundColor: 'white',
    margin: widthToDp(5),
    borderRadius: 10,
    padding: 10,
  },
  impressionDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 7,
  },
  OrderSummaryContainer: {
    // paddingTop: heightToDp(5),
    borderRadius: 20,
    paddingVertical: heightToDp(8),
    backgroundColor: 'white',
    marginHorizontal: widthToDp(2),
    paddingHorizontal: widthToDp(3),
    width: widthToDp(27),
  },
  orderDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  OrderImage: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
  bookingCount: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  hostedHeading: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#333',
  },
  buttonicon: {
    width: 30,
    hieght: 30,
    marginRight: 10,
  },
  headingName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
  },
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
  latestbutton: {
    backgroundColor: '#a77246',
    padding: 5,
    color: 'white',
    fontSize: 12,
    textTransform: 'uppercase',
    paddingLeft: widthToDp(3),
    paddingRight: widthToDp(3),
    borderRadius: 50,
  },
  welcomeTxt: {
    fontSize: 30,
    color: 'black',
  },
  orderContainer: {
    backgroundColor: 'white',
    width: widthToDp(44),
    marginRight: 10,
    // width: (width * 0.91) / 2,
    paddingTop: heightToDp(3),
    borderRadius: 10,
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
  latestOrder: {
    margin: widthToDp(5),
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
    width: width * 0.868,
    alignSelf: 'center',
    marginVertical: heightToDp(1.5),
  },
});

export default ArtistHome;
