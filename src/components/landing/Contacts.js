import React from 'react';
import { Container, Typography, Grid } from '@material-ui/core'; 

function Contacts() {

    const media = [
        {
            icon: 'fa fa-vk',
            href:'https://www.vk.com/gdgastra'
        },
        {
            icon: 'fa fa-facebook',
            href:'https://www.facebook.com/gdgastra'
        },
        {
            icon: 'fa fa-telegram',
            href:'https://www.t.me/gdgastra'
        },
        {
            icon: 'fa fa-meetup',
            href:'https://www.meetup.com/GDG-Astrakhan'
        },
    ];

    return (
        <>
        <Container id="contacts">
            <div>
                <Typography variant="h6" component="h2">Как нас найти</Typography>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2754.458244535177!2d48.02727431586474!3d46.34044897912103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41a90f85b6cc4881%3A0x53caa39b63e30191!2z0YPQuy4g0JHQsNC60LjQvdGB0LrQsNGPLCA3OdCwLCDQkNGB0YLRgNCw0YXQsNC90YwsINCQ0YHRgtGA0LDRhdCw0L3RgdC60LDRjyDQvtCx0LsuLCA0MTQwMjQ!5e0!3m2!1sru!2sru!4v1520151589862" width="100%" height="300" frameBorder="0" allowFullScreen=""></iframe>
        </Container>
        <Container className="footer">
            {media.map((m, idx)=>{
                    return (
                        <a key={idx} className="media" href={m.href} target="_blank">
                            <i className={m.icon}></i>
                        </a>
                    )
                })}
                <br/><br/>
            <div>
                © {new Date().getFullYear()} GDG Astakhan
            </div>
        </Container>
        </>
    );    
}

export default Contacts;