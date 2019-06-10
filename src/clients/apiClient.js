import axios from 'axios';

class ApiClient {

    async GetRecentEvent() {
        const url = 'api/meetup/events';

        const response = await axios.get(url);
        return response.data;
    }

}

export default ApiClient;