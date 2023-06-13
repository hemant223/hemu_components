import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  ActivityIndicator,
  ScrollView
} from 'react-native';
import SearchList from './SearchList';
import SearchBar from './SearchBar';
const SearchScreen = props => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [clicked, setClicked] = useState(false);

  const CustomData = [
    {id: 1, vehicleCompany: 'Honda', price: '40000', offer: '2444'},
    {id: 2, vehicleCompany: 'Suzuki', price: '30000', offer: '5999'},
    {id: 7, vehicleCompany: 'Suzuki', price: '30000', offer: '5999'},
    {id: 8, vehicleCompany: 'Suzuki', price: '30000', offer: '5999'},
    {id: 3, vehicleCompany: 'Tata', price: '70000', offer: '30642'},
    {id: 4, vehicleCompany: 'Tata', price: '70000', offer: '30642'},
    {id: 5, vehicleCompany: 'Tata', price: '70000', offer: '30642'},
    {id: 6, vehicleCompany: 'Tata', price: '70000', offer: '30642'},
  ];
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    setRefresh(!refresh);
  }, [props]);
  return (
    <SafeAreaView style={styles.root}>

      <View style={{ /* backgroundColor:'blue', */zIndex:4,width:'70%',alignSelf:'center'}}>
        <SearchBar
          searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase}
          clicked={clicked}
          setClicked={setClicked}
        />
      </View>
      {!CustomData ? (
        <ActivityIndicator size="large" />
      ) : (
        <ScrollView  style={{height:'90%',backgroundColor:'yellow',marginTop:20,width:'98%'}} horizontal={true}>
          <SearchList
            searchPhrase={searchPhrase}
            data={CustomData}
            setClicked={setClicked}
          />
        </ScrollView>
       
      )}
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  root: {
    // alignItems: 'center',
    // height:'100%'
  },
});
