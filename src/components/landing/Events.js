import React, { useState } from 'react';
import { Container, Typography, Grid } from '@material-ui/core';

import EventCard from './EventCard';

import ApiClient from '../../clients/apiClient';


function Events() {

    const [state, setState] = useState({ events: [] });
    const apiClient = new ApiClient();

    if (state.events.length === 0) {
        apiClient.GetRecentEvent().then(res => {
            setState({
                events: res.reverse().slice(0, 4)
            });
        });
    }

    return (
        <Container>
            <Typography variant="h5" component="h2">Последние мероприятия <a className="header-link" href="https://www.meetup.com/GDG-Astrakhan/events/past/" target="_blank" rel="noopener noreferrer" >(см. все)</a></Typography>
            <Grid container spacing={3}>
                {state.events.map((e, i) => {
                    return (
                        <Grid key={e.id} item xs={12} sm={6} md={4} lg={3}>
                            <EventCard {...e} />
                        </Grid>
                    );
                })}
            </Grid>
            <br />
        </Container>
    );
}

export default Events;