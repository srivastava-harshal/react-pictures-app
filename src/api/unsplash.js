import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID Mgh-dd0G7idjdOApEYXn-Y_t5vFhjNlLjJnTXY9oT5I',
  },
});
