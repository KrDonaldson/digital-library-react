import React from 'react'
import { Navbar } from '../Navbar';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    background: {
        backgroundImage: `linear-gradient(180deg, #4158D0 0%, #C850C0 46%, #FFCC70 85%, white 100%)`,
        backgroundColor: '#4158D0',
        width: '100%',
        height: '90%',
        backgroundPosition: 'center',
        position: 'absolute',
        zIndex: -1,
        margin: '0',
        padding: '0',
    },
    title: {
        textAlign: 'center',
        position: 'relative',
        top: '15%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
    },
});

export const Library = () => {

    const classes = useStyles();

    return (
        <>
            <Navbar />
            <div className={`${classes.background}`}>
                <div className={classes.title}>
                    <h2>Library</h2>
                </div>
            </div>

        </>
    )
}