import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header, Button} from '../../components';
import {height, heightToDp, width, widthToDp} from '../../utils/Dimensions';
import {useTheme, fonts} from '../../utils/theme';
import back from '../../assets/back.png';
const category = ['Hair', 'Face', 'Skin', 'Spa', 'Body'];
const audience = ['Female', 'Male', 'Non Binary'];
const theme = useTheme();

const index = props => {
  const {navigation, route} = props;
  const [selectedCat, setSelectedCat] = useState('');
  const [selectedAud, setSelectedAud] = useState([]);
  // const {data} = route.params;

  // console.log(data);
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 0,
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: widthToDp(5),
          width: widthToDp(90),
        }}>
        <Image source={back}></Image>
        <View style={{marginLeft: -20}}>
          <Header title={'Baisc gig info'} />
        </View>
      </View>
      <View style={styles.gigVersion}>
        <Text style={styles.title}>{'Name your service'}</Text>
      </View>
      <Text style={styles.txt}>
        {'This will be displayed as your gig title.'}
      </Text>
      <TextInput
        multiline={true}
        height={90}
        style={styles.inputField}
        placeholder="Sagan / Engagement makeupx"></TextInput>
      <Text style={styles.warning}>
        {'The title can not contain more than 30 letters.'}
      </Text>
      <View style={styles.gigVersion}>
        <Text style={styles.title}>{'Choose category'}</Text>
      </View>
      <Text style={styles.txt}>{'Please choose from the given. '}</Text>
      <View
        style={{
          flex: 0,
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: widthToDp(90),
            flex: 0,
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          {category.map(item => {
            return (
              <TouchableOpacity
                onPress={() => setSelectedCat(item)}
                style={{
                  width: 100,
                  height: 35,
                  flex: 0,
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 30,
                  backgroundColor: selectedCat == item ? '#84668C' : '#9A9A9A',
                  marginRight: 7,
                  marginTop: 10,
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '400',
                    fontFamily: fonts.robo_reg,
                    color: 'white',
                    lineHeight: 16,
                  }}>
                  {item}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <View style={styles.gigVersion}>
        <Text style={styles.title}>{'Target audience'}</Text>
      </View>
      <Text style={styles.txt}>
        {'Choose the target audience, this gig is for.'}
      </Text>
      <View
        style={{
          flex: 0,
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: widthToDp(90),

            flex: 0,
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          {audience.map(item => {
            return (
              <TouchableOpacity
                onPress={() => {
                  if (selectedAud.includes(item)) {
                    let arr = selectedAud;
                    const index = arr.indexOf(item);
                    const x = arr.splice(index, 1);
                    setSelectedAud([...arr]);
                  } else {
                    let arr = selectedAud;
                    arr.push(item);
                    setSelectedAud([...arr]);
                  }
                }}
                style={{
                  width: 100,
                  height: 35,
                  flex: 0,
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 30,
                  backgroundColor: selectedAud.includes(item)
                    ? '#A77246'
                    : '#9A9A9A',
                  marginRight: 7,
                  marginTop: 10,
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '400',
                    fontFamily: fonts.robo_reg,
                    color: 'white',
                    lineHeight: 16,
                  }}>
                  {item}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <Button
        title={'Continue'}
        btnStyle={styles.btn}
        onPress={() => {
          navigation.navigate('ArtistBasicGig2');
        }}
      />
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  gigVersion: {
    marginTop: 30,
  },
  warning: {
    fontSize: 14,
    marginHorizontal: 24,
    fontFamily: fonts.robo_reg,
    color: theme.darkGray,
    marginTop: 8,
    lineHeight: 18.75,
  },
  inputField: {
    backgroundColor: 'white',
    width: widthToDp(90),
    alignSelf: 'center',
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 24,
    fontFamily: fonts.hk_medium,
    color: '#8D8A94',
    marginTop: 8,
  },
  container: {
    flex: 1,
    backgroundColor: theme.white,
  },
  skipView: {
    position: 'absolute',
    bottom: heightToDp(23),
    alignSelf: 'center',
  },
  btn: {
    position: 'absolute',
    bottom: heightToDp(5.5),
  },
  img: {
    resizeMode: 'cover',
    height: heightToDp(59.95),
    width: widthToDp(67.9),
    alignSelf: 'center',
    marginTop: heightToDp(6.7),
  },
  skip: {
    fontSize: 14,
    fontFamily: fonts.robo_reg,
    lineHeight: 16.41,
    color: theme.linkTxt,
  },
  txt: {
    fontSize: 16,
    marginHorizontal: 24,
    fontFamily: fonts.robo_reg,
    color: '#67718C',
    marginTop: 8,
    lineHeight: 18.75,
    fontWeight: '400',
  },
  title: {
    fontSize: 24,
    marginHorizontal: 24,
    fontFamily: fonts.robo_med,
    color: theme.lightBlack,
    // marginTop: 23,
    lineHeight: 28.13,
  },
});
