import React, {useState} from 'react';
import Hero from './Hero';
import About from './About';
import Events from './Events';
import Team from './Team';
import Contacts from './Contacts';

import ApiClient from '../../clients/apiClient';

import styles from './styles/Landing.css';

function Landing() {
    const apiClient = new ApiClient();
    const [events, setEvents] = useState(null);
    const [members, setMembers] = useState(null);

    if (events == null) {
        apiClient.GetEvents().then(res => {
            setEvents(res);
        });
    }

    if (members == null) {
        apiClient.GetMembers().then(res => {
            setMembers(res);
        });
    }

    return (
        <>
            <Hero />
            <About events={events} members={members} />
            <Events events={events!=null?events.reverse().slice(0,4):[]} />
            <Team />
            <Contacts />
        </>
    );
}

export default Landing;