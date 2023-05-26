import React from 'react';
import { View, Text, FlatList } from 'react-native';
import jsonData from '../../assets/entreprise.json'

const List = () => {
  const dataList = jsonData.map((item, index) => ({
    key: index.toString(),
    title: item.title,
    label: item.label,
  }));

  const renderItem = ({ item }) => (
    <View>
      <Text>{item.title}</Text>
      <Text>{item.label}</Text>
    </View>
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

export default List;
