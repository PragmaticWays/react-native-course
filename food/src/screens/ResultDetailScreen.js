import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultDetailScreen = ({ navigation }) => {
  const item = navigation.getParam('item');
  //console.log(item);

  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    getDetails(item.id);
  }, []);

  const getDetails = async (resultId) => {
    try {
      const response = await yelp.get(`/${resultId}`);
      setResult(response.data);
      console.log(response.data);
    } catch (error) {
      setErrorMessage('Something went wrong');
    }
  };

  return (
    <>
      <Text style={styles.text}>{item.name}</Text>
      <Image
        style={styles.mainImage}
        source={{ uri: item.image_url }}
        retainMode='cover'
      />
      <Text>{item.location.address1}</Text>
      <Text>
        {item.location.city}, {item.location.state} {item.location.zip_code}
      </Text>
      <Text>{item.display_phone}</Text>
      {errorMessage ? <Text style={styles.text}>{errorMessage}</Text> : null}
      {result ? (
        <>
          <Image style={styles.picture} source={{ uri: result.photos[0] }} />
          <Image style={styles.picture} source={{ uri: result.photos[1] }} />
          <Image style={styles.picture} source={{ uri: result.photos[2] }} />
        </>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  mainImage: {
    height: 200,
  },
  picture: {
    height: 100,
    width: 200,
  },
});

export default ResultDetailScreen;
