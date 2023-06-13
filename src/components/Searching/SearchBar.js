import React, { useEffect } from 'react';
import {StyleSheet, TextInput, View, Keyboard} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

const SearchBar = props => {
  
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // marginTop: 20,
        width: '100%',
        backgroundColor: '#fff',
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 10,
      }}>
      <Feather name="search" size={20} color="black" style={{}} />

      <TextInput
        style={{
          fontSize: 15,
          backgroundColor: '#fff',
          width: '80%',
          color: 'red',
          height: 40,
        }}
        placeholderTextColor={'red'}
        placeholder="Search"
        value={props.searchPhrase}
        onChangeText={props.setSearchPhrase}
        onFocus={() => {
          props.setClicked(true);
        }}
      />

      {props.searchPhrase.length >= 1 && (
        <Entypo
          name="cross"
          size={20}
          color="black"
          onPress={() => {
            props.setSearchPhrase('');
            Keyboard.dismiss();
            props.setClicked(false);
          }}
        />
      )}
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    // margin: 15,
    // justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    // width: '90%',
  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: 'row',
    width: '95%',
    backgroundColor: '#d9dbda',
    borderRadius: 15,
    alignItems: 'center',
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: 'row',
    width: '95%',
    backgroundColor: '#d9dbda',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: '90%',
  },
});

SearchBar.defaultProps = {};
