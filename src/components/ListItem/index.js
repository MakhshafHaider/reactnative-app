// ListItem.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { widthToDp } from '../../utils/Dimensions';

const ListItem = ({ label }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.bulletPoint}>•</Text>
      <Text style={styles.itemText}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    paddingHorizontal: widthToDp(4),
    flexDirection: 'row', // Align bullet point and text horizontally
    alignItems: 'center', // Center vertically
    paddingVertical: 4,
  },
  bulletPoint: {
    fontSize: 16,
    marginRight: 8,
    color: 'black',
  },
  itemText: {
    fontSize: 14,
    color: 'black', // Change to a color that contrasts well with your background
  },
});

export default ListItem;
