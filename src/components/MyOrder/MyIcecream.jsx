import axios from 'axios';

export default axios.create(
    {
        baseURL:'https://react-ice-creambuilder-default-rtdb.firebaseio.com/'
    }
)


