import React from 'react';
import { Container, Typography, Grid } from '@material-ui/core';

import EventCard from './EventCard';


function Events(props) {
    const eventsList = props.events != null? 
        props.events.map((e, i) => {
        return (
            <Grid key={e.id} item xs={12} sm={6} md={4} lg={3}>
                <EventCard {...e} />
            </Grid>
        );
    }) : (<div></div>);

    return (
        <Container id="events">
            <Typography variant="h5" component="h2">Последние мероприятия <a className="header-link" href="https://www.meetup.com/GDG-Astrakhan/events/past/" target="_blank" rel="noopener noreferrer" >(см. все)</a></Typography>
            <Grid container spacing={3}>
                {eventsList}
            </Grid>
            <br />
        </Container>
    );
}

export default Events;