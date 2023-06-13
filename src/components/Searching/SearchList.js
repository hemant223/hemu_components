
import React,{useState} from "react";
import {  
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";

// definition of the Item, which will be rendered in the FlatList
const Item = (props) => {
    return (
   
        <View style={{backgroundColor:'red',marginTop:5,width:'100%'}}>
          <Text >Company of Vehicle {props.item.vehicleCompany}</Text>
          <Text >Price of Vehicle= {props.item.price}</Text>
          <Text >Offer of Vehicle= {props.item.offer}</Text>
        </View>
     
    )
  };
  
  const RenderItem = ({ item,searchPhrase }) => {
    if (searchPhrase === "") {
      return <Item  item={item} />;
    }
    
  
    if (item.vehicleCompany.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
      return <Item item={item} />;
    }
  
  
    
    if (item.price.toUpperCase().includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
      return <Item item={item} />;
    }
  };
  
  


const SearchList = (props) => {
    const [refresh, setRefresh] = useState(false);
    var num=1
    return (
      <>
        <View
          onStartShouldSetResponder={() => {
            props.setClicked(false);
          }}
        //  style={{width:'100%'}}
        >
          <FlatList
          numColumns={num}
            data={props.data}
            renderItem={({item})=><RenderItem item={item} refresh={refresh} setRefersh={setRefresh} searchPhrase={props.searchPhrase}  />}
            keyExtractor={(item) => item.id}
          />
        </View>
      </>
    );
  };

export default SearchList

const styles = StyleSheet.create({
   
    title: {
      fontSize: 20,
      color: '#000',
      fontWeight: "bold",
      marginBottom: 5,
      fontStyle: "italic",
    },
  });