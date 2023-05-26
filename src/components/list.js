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
      <Card containerStyle={styles.Cardlabel}>
        <Text style={styles.label}>{item.label}</Text>
      </Card>
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
    fontSize: 17
  },
  card:{
    borderRadius:10
  },
  Cardlabel:{
    borderRadius: 32,
    backgroundColor:'#f15700',
    borderWidth: 0,
    alignSelf: 'flex-start',
    padding: 9

  },
  label:{
    color:'#fff'
  }
});

export default List;
