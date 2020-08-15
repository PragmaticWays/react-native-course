import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [searchResults, setSearchResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const DEFAULT_SEARCH_TERM = 'Pasta';
    onSearchSubmit(DEFAULT_SEARCH_TERM);
  }, []);

  const onSearchSubmit = async (_searchValue) => {
    console.log('hello');
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: _searchValue,
          location: 'baltimore',
        },
      });
      setSearchResults(response.data.businesses);
    } catch (error) {
      setErrorMessage('Something went wrong');
    }
  };

  return [searchResults, errorMessage, onSearchSubmit];
};
