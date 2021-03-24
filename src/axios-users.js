import axios from 'axios';

const instance = axios.create({
baseURL: 'https://danse-skole-default-rtdb.firebaseio.com/'
});

newUsers = () => {
    axios.post('/users/json', users)
    .then(response => console.log(response))
    .catch(error => console.log(error));
}

export default instance;