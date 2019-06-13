import React from 'react';
import { Container, Typography, Grid, Hidden, Paper } from '@material-ui/core';
import { School, Code, Cast } from '@material-ui/icons';

function About(props) {
    const state = {
        membersCount: props.members != null ? props.members.meta.total_count : "",
        eventsCount: props.events != null ? props.events.length : ""
    };

    const membersThumb = props.members != null ? 
        props.members.results.filter(m => m.photo != null).map((m, idx)=>{
            return (
                <div key={idx} className="thumb-image" style={{ backgroundImage: `url(${m.photo!=null?m.photo.thumb_link:"none"}`}}></div>
            );
        }) : <></> ;

    return (
        <Container id="about-us">
            <div>
                <Typography align="center" variant="h5" component="h2">О нас</Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Typography>
                            GDG Astrakhan является независимой группой; любые действия и мнения
                            в рамках этой группы не могут быть связаны с корпорацией Google.
                                    Чтобы узнать больше о программе GDG, посетите <a href="https://developers.google.com/groups/">https://developers.google.com/groups/</a>
                        </Typography>
                    </Grid>
                    <Grid item xs={12}  md={6}>
                        <Grid container justify="center" direction="row" alignItems="center" className="numbers">
                            <Grid item xs sm={6} md={4} className="title">
                                <span>Участников</span>
                                {membersThumb}
                            </Grid>
                            <Grid className="value" item xs sm={6} md={4}>{state.membersCount}</Grid>
                        </Grid>
                        <Grid container justify="center" direction="row" alignItems="center"  alignItems="center" className="numbers">
                            <Grid item xs md={4} sm={6} className="title">
                                <span>Проведено<br/>мероприятий</span>
                            </Grid>
                            <Grid className="value" item xs sm={6} md={4}>{state.eventsCount}</Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <br />
                <Typography align="center" variant="h5" component="h2">Чем мы занимаемся</Typography>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={3}
                >
                    <Grid className="feature" item xs md={3}>
                        <School />
                        <div>Конференции</div>
                        <p className="subtitle">
                            Митапы для разработчиков, обсуждения новостей из мира технологий
                                </p>
                    </Grid>
                    <Grid className="feature" item xs md={3}>
                        <Code />
                        <div>Хакатоны</div>
                        <p className="subtitle">
                            Соревнования для разработчиков, дизайнеров, продакт менеджеров
                                </p>
                    </Grid>
                    <Grid className="feature" item xs md={3}>
                        <Cast />
                        <div>Видеотрансляции</div>
                        <p className="subtitle">
                            Выставки, конференции, доклады удаленных спикеров
                                </p>
                    </Grid>
                </Grid>
            </div>
        </Container >
    );
}

export default About;