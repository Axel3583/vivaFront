import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, FlatList } from 'react-native';
import { Card } from "react-native-elements";
import jsonData from '../../assets/entreprise.json'

const List = () => {
  const dataList = jsonData.map((item, index) => ({
    key: index.toString(),
    title: item.title,
    label: item.label,
  }));

  const renderItem = ({ item }) => (
    
    <Card containerStyle={styles.card}>
      <Text style={styles.titre}>{item.title}</Text>
      
        <Text style={styles.label}>{item.label}</Text>
      
   </Card>
  );

  return (
    <View>
      <FlatList
        data={dataList}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  titre: {
    fontWeight: "bold",
    fontSize: 17,
    paddingBottom: 7
  },
  card:{
    borderRadius:10
  },
 
  label:{
    color:'black',
    
    fontSize: 12

  }
});

export default List;
