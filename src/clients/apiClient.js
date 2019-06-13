import axios from 'axios';

class ApiClient {
    
    apiHost = 'https://knizhnikov.com';

    async GetEvents() {
        const url = `${this.baseUrl}/gdg-astra-api/meetup/events`;

        const response = await axios.get(url);
        return response.data;
    }

    async GetMembers() {
        const url = `${this.apiHost}/gdg-astra-api/meetup/members`;

        const response = await axios.get(url);
        return response.data;
    }

}

export default ApiClient;