import React from 'react';
import logo from '../../assets/logo.png';
import stock from '../../assets/img/stock.png';

import { Button, Container, Grid, Hidden, Typography } from '@material-ui/core';

const Hero = () => {
    return (
        <Container className="hero">
            <Grid container spacing={3}>
                <Hidden smUp>
                    <Grid item xs={12} style={{ textAlign: 'center' }}>
                        <img className="logo" alt="logo" src={logo} />
                    </Grid>
                </Hidden>
                <Grid item xs={12} sm={6}>
                    <img alt="stock" className="stock" src={stock} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Hidden xsDown>
                        <img className="logo" alt="logo" src={logo} />
                    </Hidden>
                    <Typography variant="body1" component="p">
                        Google Developers Group — это некоммерческое IT-сообщество,
                        в основе которого лежат технологии Google для разработчиков
                    </Typography>
                    <br />
                    <Typography className="text-muted" variant="body1" component="p">
                        #GDGAstra #GDG #GDGAstrakhan #WTM
                    </Typography>
                    <p>
                        <a href="https://www.meetup.com/GDG-Astrakhan/?action=join" target="_blank"><Button className="m-r-1" color="primary" variant="contained">Присоединиться</Button></a>
                        <a href="#about-us"><Button>Подробнее</Button></a>
                    </p>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Hero;