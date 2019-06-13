import axios from 'axios';

class ApiClient {
    
    baseUrl = 'http://localhost:4200';

    async GetEvents() {
        const url = `${this.baseUrl}/gdg-astra-api/meetup/events`;

        const response = await axios.get(url);
        return response.data;
    }

    async GetMembers() {
        const url = `${this.baseUrl}/gdg-astra-api/meetup/members`;

        const response = await axios.get(url);
        return response.data;
    }

}

export default ApiClient;