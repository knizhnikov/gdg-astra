import axios from 'axios';

class ApiClient {

    async GetRecentEvent() {
        const url = 'https://knizhnikov.com/gdg-astra-api/meetup/events';

        const response = await axios.get(url);
        return response.data;
    }

}

export default ApiClient;