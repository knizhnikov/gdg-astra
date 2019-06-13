import React from 'react';
import { Typography, Container, Grid, Fab } from '@material-ui/core';

import ara from '../../assets/img/arm.jpeg';
import vas from '../../assets/img/vas2.jpg';
import alex from '../../assets/img/alex.jpg';

function Team() {

    const team = [
        {
            name: 'Арман Шахназарян',
            company: 'CEO Delitec',
            photo: ara,
            socials: [
                {
                    icon: 'fa fa-vk',
                    href: 'https://vk.com/armanitos'
                },
                {
                    icon: 'fa fa-telegram',
                    href: 'https://www.t.me/armanitos'
                },
                {
                    icon: 'fa fa-facebook',
                    href: 'https://www.facebook.com/armanitos'
                }
            ]
        },
        {
            name: 'Василий Книжников',
            company: 'Tech Lead Альфа Банк',
            photo: vas,
            socials: [
                {
                    icon: 'fa fa-vk',
                    href: 'https://vk.com/vknizhnikov'
                },
                {
                    icon: 'fa fa-telegram',
                    href: 'https://www.t.me/knizhnikov'
                },
                {
                    icon: 'fa fa-facebook',
                    href: 'https://www.facebook.com/knizhnikov'
                }
            ]
        },
        {
            name: 'Александр Морозов',
            company: 'CTO Adeptik',
            photo: alex,
            socials: [
                {
                    icon: 'fa fa-vk',
                    href: 'https://vk.com/a_v_morozov'
                },
                {
                    icon: 'fa fa-telegram',
                    href: 'https://www.t.me/avmorozov'
                },
                {
                    icon: 'fa fa-facebook',
                    href: 'https://www.facebook.com/alexander.v.morozov'
                }
            ]
        }
    ];

    return (
        <Container id="team" >
            <Typography variant="h6" component="h2">Команда</Typography>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                {team.map((m, i) => (
                    <Grid key={i} className="team-member" item xs={12} sm={4}>
                        <div className="photo">
                            <img src={m.photo} />
                        </div>
                        <div className="details">
                            <b>{m.name}</b><br />
                            {m.company}
                            <p>
                                {m.socials.map((s, j) => (
                                    <a key={j} href={s.href} target="_blank" rel="noreferer noopener">
                                        <Fab key={j} color="secondary" size="small" className="m-r-1">
                                            <i className={s.icon}></i>
                                        </Fab>
                                    </a>
                                ))}
                            </p>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Team;