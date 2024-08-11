import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { heightToDp, width, widthToDp } from '../../utils/Dimensions';
import starYellow from '../../assets/star_yellow.png';
import hosting from '../../assets/hosting.png';
const popular_image = require('../../assets/popular_image.png');

const ArtistItem = ({ name, rating, reviewCount, address, category, distance }) => {
  return (
    <View style={styles.containerContent}>
      <View>
        <Image source={popular_image} style={styles.images} />
      </View>
      <View style={styles.imageContainer}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text>{name}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={starYellow} style={{ height: 10, width: 10 }} />
            <Text style={{ paddingHorizontal: 5 }}>{rating}</Text>
            <Text style={{ paddingHorizontal: 5 }}>({reviewCount})</Text>
          </View>
        </View>
        <View>
          <Text style={{ color: '#9A9A9A', fontSize: 12 }}>{address}</Text>
        </View>
        <View>
          <Text style={{ color: '#1583D8', fontSize: 13, marginTop: 2 }}>
            {category} • Top <Text style={{ color: '#9A9A9A' }}>~$$$</Text>
          </Text>
        </View>
        <View style={styles.distance}>
          <Text
            style={{
              color: '#FFFFFF',
              backgroundColor: '#008274',
              borderRadius: 20,
              padding: 5,
              fontSize: 11,
              marginTop: 8,
            }}>
            {distance}
          </Text>
          <Image
            source={hosting}
            style={{ height: 20, width: 18, resizeMode: 'cover' }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerContent: {
      width: width * 0.93,
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: widthToDp(5),
    // padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    // elevation: 5,
  },
  imageContainer: {
    flex: 1,
    padding:10,
    backgroundColor:"white",
    height: heightToDp(31),

  },
  distance: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  images: {width: widthToDp(33), height: heightToDp(37), resizeMode: 'cover'},
});

export default ArtistItem;
