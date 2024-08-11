import React from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AddNewBtn, Header} from '../../components';
import {heightToDp, widthToDp, width} from '../../utils/Dimensions';
import {GLOBAL_STYLES} from '../../utils/styles';
import {useTheme} from '../../utils/theme';
import CardComponent from './components/CardComponent';
import logo1 from '../../assets/logo1.png';
import PromoCodeComponent from './components/PromoCodeComponent';
const theme = useTheme();
const promocodeData = [
    {
      code: 'HNY22!',
      discount: 'Get 15% on your next order',
    },
    {
      code: 'HNY23!',
      discount: 'Get 15% on your next order',
    },
    {
      code: 'HNY24!',
      discount: 'Get 15% on your next order',
    },
  ];
const DATA = [
  {
    titleData: 'My saved Cards',
    state: 'Manage',
    number: '5314 9303 2876 4544',
    number2: '5314 9303 2876 4544',
    defaultCard: 'Default',
    makeDefault: 'Make Default',
  },
  {
    titleData: 'My JazzCash account',
    state: 'Edit details',
    number: '03320310780',
    number2: '03320310780',
    screen:"ConsumerAddJazzCash",
    // defaultCard:"Default",
    // makeDefault:"Make Default"
  },
  {
    titleData: 'My EasyPaisa account',
    state: 'Edit details',
    number: '03320310780',
    number2: '03320310780',
    screen:"ConsumerAddEasyPaisa",
    // defaultCard:"Default",
    // makeDefault:"Make Default"
  },
];

const ConsumerPaymentMethods = props => {
  return (
    <SafeAreaView style={GLOBAL_STYLES.containerHome}>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: heightToDp(30)}}>
        <Header backBtnGrey />
        <Text style={[GLOBAL_STYLES.title, {fontWeight: '700'}]}>
          {'Payment methods'}
        </Text>

        <Text
          style={{
            fontSize: 16,
            color: '#67718C',
            marginLeft: widthToDp(6),
            marginRight: widthToDp(6),
            marginBottom: 9,
          }}>
          Top up your balance in Kyanchi's wallet via EasyPaisa or JazzCash and
          save your time
        </Text>

        <Text style={{textAlign: 'center'}}>Avaiable Kyanchi credit </Text>
        <Text style={{textAlign: 'center', color: theme.primary, fontSize: 32}}>
          PKR 2,000
        </Text>

        {DATA.map((item, index) => {
          return (
            <CardComponent
              titleData={item.titleData}
              state={item.state}
              number={item.number}
              number2={item.number2}
              defaultCard={item.defaultCard}
              makeDefault={item.makeDefault}
              screen={item.screen}
              navigation={props.navigation} 
            />
          );
        })}

        <Text style={{marginLeft: widthToDp(4), marginTop: heightToDp(2.7)}}>
          Promotions
        </Text>
        <AddNewBtn
          title={'Add referal code'}
          iconColor={'#1583D8'}
          titleStyle={{color: '#1583D8'}}
        />

        

        {promocodeData.map((item, index) => (
        <PromoCodeComponent key={index} code={item.code} discount={item.discount} />
      ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ConsumerPaymentMethods;
