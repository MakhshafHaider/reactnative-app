import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Switch,
  ScrollView,
} from 'react-native';
import {RadioButton} from 'react-native-paper';

import Feather from 'react-native-vector-icons/Feather';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header, Button, AddNewBtn, TextInput} from '../../components';
import {height, heightToDp, width, widthToDp} from '../../utils/Dimensions';
import {useTheme, fonts} from '../../utils/theme';
import current_Location from '../../assets/current_Location.png';
import { Calendar } from 'react-native-calendars';

const theme = useTheme();

const daysOfWeek = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

const ConsumerHostingLocation = props => {
  const [checked, setChecked] = useState('first');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: widthToDp(5),
            width: widthToDp(90),
          }}>
          {/* <Image source={back} /> */}
          <View style={{marginLeft: 0}}>
            <Header backBtn />
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={styles.heading}>
            Where are you <Text style={{color: '#84668C'}}>hosting?</Text>
          </Text>
        </View>
              {/* <Calendar
        // Initially visible month. Default = Date()
        current={'2023-09-15'}
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        minDate={'2023-09-01'}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        maxDate={'2023-09-30'}
        // Handler which gets executed on day press. Default = undefined
        onDayPress={(day) => {
          console.log('selected day', day);
        }}
      /> */}
       
        <Text
          style={{
            fontSize: 14,
            color: '#67718C',
            marginLeft: widthToDp(4),
            marginRight: widthToDp(23),
          }}>
          HOST LOCATION
        </Text>

        <View style={styles.LocationContainer}>
          <View style={styles.currentLocation}>
            <Image
              source={current_Location}
              style={{height: 24, width: 24, marginRight: 5}}
            />
            <Text style={{color: '#84668C', fontSize: 16}}>
              Use Current Location
            </Text>
          </View>
          <Text style={{marginHorizontal: widthToDp(2), marginVertical: 5}}>
            Recent Location's
          </Text>
          <View style={styles.daysOfWeekContainer}>
            <RadioButton.Group
              onValueChange={newValue => setChecked(newValue)}
              value={checked}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <RadioButton value="first" />
                <Text>Arbab's house</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <RadioButton value="second" />
                <Text>Ami's place</Text>
              </View>
            </RadioButton.Group>
          </View>
        </View>
        <AddNewBtn
          title={'Add a new address'}
          iconColor={theme.counterGrey}
          titleStyle={{color: theme.counterGrey}}
          onPress={() => props.navigation.navigate('ConsumerApplyPromoCode')}
        />
        <Text style={styles.heading}>
          Would you like to add a <Text style={{color:"#84668C"}}>note?</Text>
        </Text>
        
        <Text
          style={{
            color: '#67718C',
            fontWeight: '700',
            marginVertical: 10,
            marginHorizontal: widthToDp(5),
          }}>
          BOOKING NOTES: <Text style={{fontWeight: '200'}}>(Optional)</Text>
        </Text>

        <View>
          <TextInput
            input={text => setName(text)}
            placeholder={
              'Please tell us anything that may assist with the order...'
            }
            multiline
            inputBoxStyle={{
              backgroundColor: '#ffffff',
              borderBottomColor: '#ffffff',
              padding: 10,

              height: heightToDp(45),
              borderRadius: 10,
              textAlignVertical: 'top',
            }}
          />
          <Text
            style={{
              color: '#29AAE2',
              position: 'absolute',
              right: 25,
              bottom: 5,
            }}>
            0/100
          </Text>
        </View>
        <View style={{marginVertical: 10}}>

        <Button title="Place Order" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ConsumerHostingLocation;

const styles = StyleSheet.create({
  heading: {
    color: '#0F2851',
    fontSize: 40,
    marginLeft: widthToDp(4),
    fontWeight: '700',
  },
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    paddingTop: heightToDp(7),
  },
  time: {
    // backgroundColor: theme.primary,
    color: '#ffffff',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  btn: {marginTop: 15},
  LocationContainer: {
    backgroundColor: 'white',
    paddingHorizontal: widthToDp(2),
    marginHorizontal: widthToDp(4),
    marginTop: heightToDp(2),
    width: widthToDp(92),
    paddingVertical: 15,
    borderRadius: 10,
  },
  currentLocation: {flexDirection: 'row', marginHorizontal: widthToDp(2)},
  daysOfWeekContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timeSlotContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: widthToDp(4),
  },
  active: {flexDirection: 'row', alignItems: 'center'},
  btnnew: {marginHorizontal: widthToDp(4), marginVertical: heightToDp(3)},
  dayOfWeekButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 8,

    // borderWidth: 1,
    // borderColor: '#0F2851',
  },
  selectedDayButton: {
    backgroundColor: theme.primary,
    borderColor: theme.primary,
    borderRadius: 30,
  },
  dayOfWeekText: {
    fontSize: 12,
    color: '#0F2851',
    fontFamily: fonts.hk_bold,
  },
  selectedDayText: {
    color: 'white',
  },
  newSlotContainer: {flexDirection: 'row', alignItems: 'center'},
  timeSlot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: widthToDp(4),
    marginVertical: 15,
  },
  input: {
    backgroundColor: '#EEEEEE',
    width: 50,
    borderRadius: 10,
    marginHorizontal: widthToDp(4),
  },
});
