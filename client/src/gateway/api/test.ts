import axios from 'axios';

export default {
  test: () => axios.get('/api/test')
    .then((response) => response.data),
};
