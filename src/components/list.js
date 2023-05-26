import React from 'react';
import { View, Text, FlatList } from 'react-native';

const List = () => {
  const data = require('./assets/entreprise.json'); // Importez le fichier JSON

  const renderItem = ({ item }) => (
    <View>
      <Text>{item.title}</Text>
      <Text>{item.label}</Text>
    </View>
  );

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default List;
 