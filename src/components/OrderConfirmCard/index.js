import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {fonts, useTheme} from '../../utils/theme';
import {Counter} from '../../components';
import {heightToDp, widthToDp} from '../../utils/Dimensions';
import carBrown from '../../assets/car_brown.png';
import MultiButton from '../../components/MultiButton';

const theme = useTheme();

const OrderConfirmCard = props => {
  const {serviceCount, serviceName, artistName, screen, distance} = props;

  const [count, setCount] = useState(serviceCount);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <View style={styles.container}>
      <View>
        {screen == 'OrderConfirm' ? (
          <View>
            <View style={styles.alignRight}>
              <Text style={{color: '#193356', fontSize: 20, fontWeight: '700'}}>
                #334758
              </Text>
              <Text
                style={{
                  backgroundColor: '#84668C',
                  color: 'white',
                  borderRadius: 20,
                  paddingVertical: 5,
                  paddingHorizontal: 10,
                  textTransform:"uppercase"
                }}>
                Active
              </Text>
            </View>
            <Text style={{color: '#67718C'}}> Thurday, 2nd December</Text>
            <Text style={{color: '#67718C'}}> 7:30 - 8:30 AM</Text>
            <View style={styles.alignRight}>
              <Text
                style={{
                  color: '#93799A',
                  fontWeight: '700',
                  width: widthToDp(50),
                }}>
                You are travelling to the Narmeen’s location.
              </Text>
              <Image
                source={carBrown}
                style={{width: 30, height: 30, resizeMode: 'contain'}}
              />
            </View>
            <Text style={{color: '#50A2E1', width: widthToDp(80)}}>
              House A9, Lane 14-C, Main Mina Bazaar Commercial, Block 6, Karachi
            </Text>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.serviceName}>{serviceName}</Text>

                <Text
                  style={{
                    marginLeft: 16,
                    color: theme.primary,
                    fontFamily: fonts.hk_bold,
                    lineHeight: 20,
                    fontSize: 20,
                  }}>
                  {serviceCount}
                  {'X'}
                </Text>
              </View>
              <View>
                <Text style={{color: '#50A2E1'}}>Total amount inc travel</Text>
                <Text>Rs 5,699 </Text>
              </View>
            </View>
            <Text style={styles.artistLabel}>ARTIST</Text>
            <Text style={styles.artistName}>{artistName}</Text>
            <Text style={{color: '#50A2E1'}}>
              {distance} <Text style={{color: '#67718C'}}>away from you</Text>
            </Text>
          </View>
        ) : (
          <Text style={styles.serviceName}>{serviceName}</Text>
        )}
      </View>
      {!screen == 'OrderConfirm' && (
        <View>
          <Counter
            count={count}
            onPressIncrement={increment}
            onPressDecrement={decrement}
            btnStyle={{backgroundColor: undefined}}
            iconStyle={{color: theme.counterGrey}}
            countStyle={styles.counterCount}
          />
        </View>
      )}
    </View>
  );
};

export default OrderConfirmCard;

const styles = StyleSheet.create({
  // container: {
  //   flexDirection: 'row',
  //   alignItems: 'flex-start',
  //   justifyContent: 'space-between',F
  // },
  alignRight: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  serviceName: {
    fontFamily: fonts.hk_bold,
    fontSize: 20,
    lineHeight: 20,
    color: theme.darkBlack,
  },
  artistLabel: {
    fontFamily: fonts.robo_light,
    fontSize: 14,
    lineHeight: 20,
    color: theme.greyText,
    marginTop: heightToDp(2.2),
  },
  artistName: {
    fontFamily: fonts.robo_reg,
    fontSize: 16,
    lineHeight: 20,
    color: theme.greyText,
  },
  counterCount: {
    fontSize: 24,
    fontFamily: fonts.hk_bold,
    lineHeight: 30,
    color: theme.primary,
    marginHorizontal: 9,
  },
});
