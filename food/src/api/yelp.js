import axois from 'axios';
import { Key } from './key';

export default axois.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: `Bearer ${Key.YELP}`,
  },
});
