import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { widthToDp } from '../../utils/Dimensions';
const EditableField = ({
  label,
  value,
  isEditing,
  onEditPress,
  onChangeText,
  placeholder,
  onSavePress,
  limitText,
}) => {
  return (
    <View style={styles.titleContainer}>
      <View style={styles.titleContent}>
        <Text style={{ fontWeight: 'bold' }}>{label}</Text>
        {isEditing ? (
          <Feather
            style={{ color: '#67718C', fontSize: 18, marginLeft: 10 }}
            name="x"
            onPress={onEditPress}
          />
        ) : (
          <Feather
            style={{ color: '#193356', fontSize: 18, marginLeft: 10 }}
            name="edit-2"
            onPress={onEditPress}
          />
        )}
      </View>
      <View style={styles.separator}></View>
      <View style={styles.title}>
        {isEditing ? (
          <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            style={styles.input}
            multiline
          />
        ) : (
          <Text>{value}</Text>
        )}
      </View>
      {isEditing && (
        <View style={styles.saveButtonContainer}>
          <TouchableOpacity onPress={onSavePress} style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
          <Text style={styles.limitText}>{limitText}</Text>
        </View>
      )}
    </View>
  );
};

export default EditableField;

const styles= StyleSheet.create({
    
  titleContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  input: {backgroundColor: 'white', borderBottomColor:"white"},
  titleContainer: {
    marginTop: 10,
    backgroundColor: 'white',
    marginHorizontal: widthToDp(4),
    paddingVertical: 10,
    borderRadius: 10,
  },
  title: {paddingLeft: 10, flex: 1},
  separator: {
    height: 1,
    backgroundColor: '#EEEEEE',
    marginVertical: 5,
  },
  
  saveButtonContainer: {
    alignItems: 'center',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  saveButtonText: {color: '#84668C', fontSize: 12},
  limitText: {fontSize: 12, paddingRight: 15, paddingLeft: 5, color: '#29AAE2'},
  saveButton: {
    borderWidth: 1,
    borderColor: '#84668C',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
  },
})