import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {heightToDp, widthToDp, width} from '../../utils/Dimensions';
import {Header} from '../../components';
import {TextInput} from '../../components';
import {Button} from '../../components';
const grooming = require('../../assets/grooming.png');
const clockcolor = require('../../assets/clockcolor.png');
const carBrown = require('../../assets/car_brown.png');
const host_green = require('../../assets/host_green.png');
const information = require('../../assets/information.png');
const location = require('../../assets/Path.png');

const orders = [
  {
    name: 'John Doe',
    serviceCost: 30000,
    services: ['3x Foot Massage', 'Haircut', 'Manicure'],
    salonAddress: ' North Nazmabad',
    arrivalTime: '50-60 mins',
    imageLink: carBrown,
    status: 'wants to TRAVEL',
  },
];

export default function ArtistGrooming(props) {
  const [name, setName] = useState('');
  const GroomingDoneHandler = () => {
    props.navigation.navigate('ArtistOrderStack', {
      screen: 'ArtistGroomingDone',
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{marginLeft: 0}}>
          <Header
            backBtn
            title="help?"
            titleStyle={{
              position: 'absolute',
              right: 0,
              borderRadius: 20,
              borderWidth: 1,
              borderColor: '#84668C',
              fontSize: 14,
              color: '#84668C',
              paddingVertical: 1,
              paddingHorizontal: 15,
            }}
          />
        </View>
        <View style={styles.imageContainer}>
          <Image source={grooming} style={styles.image} />
        </View>
        <View>
          <Text style={styles.heading}>Grooming has started</Text>
          <Text style={{color: '#67718C', textAlign: 'center'}}>
            Estimated grooming time:
          </Text>
          <View style={styles.timeContainer}>
            <Image source={clockcolor} style={styles.clockImage} />
            <Text>60:00 min</Text>
          </View>
        </View>
        <View>
          {orders.map((order, index) => (
            <View key={index} style={styles.orderContainer}>
              <TouchableOpacity
                onPress={() =>
                  props.navigation.navigate('ArtistProfileStack', {
                    screen: 'ArtistWhyCancel',
                  })
                }>
                <View
                  style={{
                    paddingHorizontal: widthToDp(3),
                    paddingBottom: 5,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View>
                    <View>
                      <Text style={styles.headingName}>{order.name}</Text>

                      <Text style={styles.textBold}>SERVICES:</Text>
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
                                  fontSize: 12,
                                }}>{`${remainingServices} more service(s)`}</Text>
                            </TouchableOpacity>
                          );
                        }
                        return null;
                      })}
                      <Text style={{color: '#84668C'}}>
                        Rs {order.serviceCost}
                      </Text>
                    </View>
                  </View>

                  <View>
                    <View style={styles.orderDetails}>
                      <Text>
                        is
                        <Text style={{color: '#84668C'}}> HOSTING</Text>
                      </Text>

                      <Image
                        source={order.imageLink}
                        style={styles.OrderImage}
                      />
                    </View>
                    <Text style={{color: '#29AAE2'}}>
                      3.5 kms{' '}
                      <Text style={{color: '#0F2851'}}>away for you </Text>{' '}
                    </Text>
                    <Text style={styles.textBold}>Hosting at:</Text>
                    <View style={{flexDirection: 'row'}}>
                      <Image
                        source={location}
                        style={{height: 15, width: 15, resizeMode: 'contain'}}
                      />
                      <Text style={{color: '#32aee3'}}>
                        {order.salonAddress}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <View>
          <TextInput
            input={text => setName(text)}
            placeholder={'Enter total amount '}
            inputBoxStyle={{
              backgroundColor: '#ebe8ec',
              borderBottomColor: '#ebe8ec',
              borderRadius: 5,
            }}
          />
        </View>
        <Text
          style={{
            color: '#67718C',
            marginHorizontal: widthToDp(20),
            textAlign: 'center',
            marginVertical: 15,
          }}>
          Amount should be equal to or more than
          <Text style={{color: '#007AFF'}}> Rs 3400</Text>
        </Text>
        <View style={{marginBottom: 20}}>
          <Button title="Grooming Done" onPress={GroomingDoneHandler} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    paddingTop: heightToDp(7),
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: heightToDp(55),
    width: widthToDp(69),
  },
  heading: {
    fontWeight: '700',
    fontSize: 28,
    color: '#0F2851',
    textAlign: 'center',
    marginTop: 10,
  },
  clockImage: {
    width: 28,
    height: 21,
    resizeMode: 'contain',
  },
  orderContainer: {
    backgroundColor: 'white',
    // width: widthToDp(44),
    marginHorizontal: widthToDp(5),
    // width: (width * 0.91) / 2,
    paddingVertical: heightToDp(5),
    paddingHorizontal: widthToDp(1),
    borderRadius: 10,
  },
  orderDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  OrderImage: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
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
  headingName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textBold: {
    fontWeight: 'bold',
  },
});
