import React from 'react';
import { Container, Typography, Grid, Hidden, Paper } from '@material-ui/core';
import { School, Code, Cast } from '@material-ui/icons';

function About() {
    return (
        // <Container className="about-us">
        //     <Grid container>
        //         <Grid item xs={12} md={6}>
        //             <Typography variant="h5" component="h2">О нас</Typography>
        //             <Typography>
        //                 GDG Astrakhan является независимой группой; любые действия и мнения
        //                 в рамках этой группы не могут быть связаны с корпорацией Google.
        //                 Чтобы узнать больше о программе GDG, посетите <a href="https://developers.google.com/groups/">https://developers.google.com/groups/</a>
        //             </Typography>
        //             <br />
        //             <Hidden mdUp>
        //                 <Paper className="about-us-image"></Paper>
        //             </Hidden>

        //             <Typography variant="h5" component="h2">Чем мы занимаемся</Typography>
        //             <Grid
        //                 container
        //                 direction="row"
        //                 justify="center"
        //                 spacing={3}
        //             >
        //                 <Grid className="feature" item xs>
        //                     <School />
        //                     <div>Конференции</div>
        //                     <p className="subtitle">
        //                         Митапы для разработчиков, обсуждения новостей из мира технологий
        //                     </p>
        //                 </Grid>
        //                 <Grid className="feature" item xs>
        //                     <Code />
        //                     <div>Хакатоны</div>
        //                     <p className="subtitle">
        //                         Соревнования для разработчиков, дизайнеров, продакт менеджеров
        //                     </p>
        //                 </Grid>
        //                 <Grid className="feature" item xs>
        //                     <Cast />
        //                     <div>Видеотрансляции</div>
        //                     <p className="subtitle">
        //                         Выставки, конференции, доклады удаленных спикеров
        //                     </p>
        //                 </Grid>
        //             </Grid>
        //         </Grid>
        //         <Hidden smDown>
        //             <Grid item xs={12} md={6}>
        //                 <Paper className="about-us-image"></Paper>
        //             </Grid>
        //         </Hidden>
        //     </Grid>
        // </Container >
        <Container className="about-us">
            <div>
                <Typography align="center" variant="h5" component="h2">О нас</Typography>
                <Typography>
                    GDG Astrakhan является независимой группой; любые действия и мнения
                    в рамках этой группы не могут быть связаны с корпорацией Google.
                            Чтобы узнать больше о программе GDG, посетите <a href="https://developers.google.com/groups/">https://developers.google.com/groups/</a>
                </Typography>
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