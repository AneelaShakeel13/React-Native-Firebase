import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';

const App = () => {
  const [myData, setMyData] = useState(null);

  useEffect(() => {
    getDatabase();
  }, []);

  const getDatabase = async () => {
    try {
      const data = await firestore()
        .collection('testing')
        .doc('3Wa1pOIDLu62GLCpL4DM')
        .get();
      console.log(data._data);
      setMyData(data._data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View>
      <Text>NAME :{myData ? myData.name : 'Loading...'}</Text>
      <Text>AGE :{myData ? myData.age : 'Loading...'}</Text>
      <Text>
        HOBBY :{myData ? myData.hobby.map(item => ` ${item}`) : 'Loading...'}
      </Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
