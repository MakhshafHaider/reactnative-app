import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {heightToDp, width, widthToDp} from '../../utils/Dimensions';
const star = require('../../assets/star_yellow.png');

const ArtistTreatmentCard = ({
  name,
  rating,
  reviews,
  expertise,
  orders,
  imageSource,
}) => {
  return (
    <View style={styles.artistContainer}>
      <Image source={imageSource} style={styles.artistImage} />
      <View style={styles.artistInfo}>
        <View style={styles.artistHeader}>
          <Text style={styles.artistName}>{name}</Text>
          <Image source={star} style={styles.starIcon} />
          <Text style={styles.artistRating}>{rating}</Text>
          <Text style={styles.artistReviews}>({reviews})</Text>
        </View>
        <Text style={styles.artistExpertise}>{expertise}</Text>
        <Text style={styles.artistOrders}>
          Completed {orders} orders{'\n'}with promos & discounts
        </Text>
      </View>
      <View style={styles.viewContainer}>
        <Text style={styles.viewStyle}>View</Text>
        <Text style={[styles.viewStyle, styles.profileLink]}>Profile</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  artistContainer: {flexDirection: 'row', marginHorizontal: widthToDp(5), marginTop: 10},
  artistImage: {
    height: 73,
    width: 71,
    borderRadius: 10,
  },
  artistInfo: {
    flex: 1,
    marginLeft: 10,
  },
  artistHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  artistName: {
    fontWeight: '700',
  },
  starIcon: {
    height: 14,
    width: 13,
    marginLeft: 5,
  },
  artistRating: {
    color: '#333333',
    marginHorizontal: 5,
  },
  artistReviews: {
    color: '#9A9A9A',
  },
  artistExpertise: {
    fontSize: 12,
  },
  artistOrders: {
    fontSize: 12,
  },
//   viewContainer: {
//     alignItems: 'flex-end',
//   },
  viewStyle: {
    backgroundColor: '#84668C',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    color: 'white',
  },
  profileLink: {
    marginTop: 10,
  },
});

export default ArtistTreatmentCard;
