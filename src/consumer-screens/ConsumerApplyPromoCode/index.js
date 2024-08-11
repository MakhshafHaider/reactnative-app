import React, { useState } from 'react';
import {
  StyleSheet,
  Switch,
  Text,
  View,
  ScrollView,
  Image,
  Modal
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  AddNewBtn,
  Button,
  Header,
  TextInput,
} from '../../components';

import CircularProgressBar from '../../components/CircularProgressBar';
import MultiButton from '../../components/MultiButton';
import {
  heightToDp,
  widthToDp,
  width,
} from '../../utils/Dimensions';
import { GLOBAL_STYLES } from '../../utils/styles';
import { useTheme } from '../../utils/theme';

const ConsumerApplyPromoCode = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const closeModal = () => {
    setIsModalVisible(false);
  };
  const PromoCodeData = [
    {
      title: 'Invite Bonus',
      content: 'Powered By Kayanchi',
      date: 'Use by 09-September-2023',
      discount: '15% off',
    },
    {
      title: 'Invite Bonus',
      content: 'Powered By Kayanchi',
      date: 'Use by 09-September-2023',
      discount: '15% off',
    },
  ];

  return (
    <SafeAreaView style={[GLOBAL_STYLES.containerHome, { paddingTop: 10}]}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: heightToDp(10) }}
      >
        <Header backBtnGrey title="Apply Promo code" />
        <Text style={[GLOBAL_STYLES.title, { fontWeight: '700' }]}>
          {'Promo codes'}
        </Text>
        <Text style={{ color: '#67718C', marginHorizontal: widthToDp(6) }}>
          Use one of the codes below to avail your invite bonus from Kaynchi!
        </Text>

        {PromoCodeData.map((promoCode, index) => (
          <View key={index} style={styles.inviteContent}>
            <View style={styles.inviteContainer}>
              <Text style={{ fontWeight: '800', fontSize: 20, color: '#D8B29B' }}>
                {'%'}
              </Text>
              <View style={styles.alignRow}>
                <Text
                  style={{
                    color: '#193356',
                    fontWeight: '700',
                    fontSize: 16,
                    marginLeft: 10,
                  }}
                >
                  {promoCode.title}
                </Text>
                <Text style={{ color: '#677790', fontSize: 10 }}>
                  {promoCode.content}
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.alignRow,
                {
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginHorizontal: widthToDp(5),
                },
              ]}
            >
              <Text style={{ marginLeft: widthToDp(7) }}>
                {promoCode.date}
              </Text>
              <Text style={{ fontSize: 22, color: '#84668C' }}>
                {promoCode.discount}
              </Text>
            </View>
          </View>
        ))}
        {/* <View style={{position:'absolute', bottom: heightToDp(5) }}> */}

        <Button title="Apply Discount"            onPress={() => setIsModalVisible(true)}
/>
        {/* </View> */}
      
      <Modal
          visible={isModalVisible}
          animationType="slide"
          style={{flex: 1, margin: 0, justifyContent: 'flex-end'}}
          onRequestClose={closeModal}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text
                style={{
                  fontSize: 34,
                  fontWeight: '700',
                  color: '#2F3A58',
                  marginHorizontal: widthToDp(5),
                }}>
                Waiting for confirmation
              </Text>
              <View style={{alignItems: 'center', marginVertical: 20}}>
                <CircularProgressBar
                  progress={80}
                  radius={80}
                  strokeWidth={4}
                  color="#84668C"
                  textStyle={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    fill: '#29AAE2',
                  }}
                />
              </View>
              <Text style={{fontSize: 16, marginHorizontal: widthToDp(5)}}>
                Waiting for Narmeen Iqbal to accept your booking.
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  marginTop: 10,
                  marginHorizontal: widthToDp(5),
                }}>
                You may cancel your booking in 3 minutes if she does not accept.
              </Text>
              <View style={styles.indicatorView}>
                <View style={styles.row}>
                  <MultiButton  
                    title={'Go Back Home'}
                    btnStyle={{backgroundColor: '#67506D'}}
                    onPress={() => props.navigation.navigate("ConsumerHomeStack", {screen: "ConsumerProfile"})}
                  />
                  <MultiButton
                    title={'Cancel Request'}
                    btnStyle={{backgroundColor: '#9A9A9A'}}
                  />
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
      </SafeAreaView>
  );
};

export default ConsumerApplyPromoCode;

const styles = StyleSheet.create({
  alignRow: { flex: 1, flexDirection: 'row', justifyContent: 'space-between' },
  inviteContainer: { flexDirection: 'row', marginHorizontal: widthToDp(5) },
  inviteContent: {
    backgroundColor: 'white',
    paddingVertical: 10,
    marginHorizontal: widthToDp(6),
    marginVertical: 10,
    borderRadius: 20,
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
    backgroundColor: 'white', // Transparent black background
  },
  modalContent: {
    // padding: 20,
    borderRadius: 10,
    paddingTop: 20,
  },

});
