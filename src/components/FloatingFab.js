import React from 'react';
import { Fab } from '@material-ui/core';
import { PersonAdd } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        position: 'fixed',
        bottom: '5rem',
        right: '2rem',
    }
}));

function FloatingFab(props) {
    const classes = useStyles();
    return (
        <Fab className={classes.root} {...props}>
            <PersonAdd/>
        </Fab>
    );
}

export default FloatingFab;