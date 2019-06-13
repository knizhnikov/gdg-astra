import React from 'react';

import moment from 'moment';
import momentLocale from 'moment/locale/ru';

import { makeStyles } from '@material-ui/core/styles';
import { Typography, Card, CardActions, Button, CardMedia, CardContent, CardActionArea } from '@material-ui/core';
import { DateRange, LocationOn } from '@material-ui/icons';

const useStyles = makeStyles({
    card: {
        maxWidth: 600,
    },
});

function EventCard(props) {

    moment.locale('ru');
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={props.name}
                    height="140"
                    image={props.featured_photo!=null?props.featured_photo.photo_link:''}
                    title={props.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="h3">
                        {props.name}
                    </Typography>
                    <Typography component="p">
                        <LocationOn fontSize="small" /> {props.venue != null ? props.venue.name : ''}
                    </Typography>
                    <Typography component="p">
                        <DateRange fontSize="small" /> {moment(props.local_date).format('LL')}, {props.local_time}
                    </Typography>
                    <Typography style={{ maxHeight: '8rem', paddingTop: '.5rem' }} className="clipped" variant="body2" color="textSecondary" component="p">{props.description != null ? props.description.substr(0, 150).replace(/<\/?[^>]+(>|$)/g, "") : ''}... <a href={props.link} target="_blank">см. далее</a> </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default EventCard;