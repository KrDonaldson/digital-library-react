import React from 'react'
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { Navbar } from '../Navbar';


interface Props {
    title:string;
}

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
    main_text: {
        textAlign: 'center',
        position: 'relative',
        top: '20%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
    },
    button_text: {
        color: 'white',
        textDecoration: 'none',
    },
});

export const Home = ( props:Props ) => {

const classes = useStyles();

    return (
        <>
            <Navbar />
            <div className={`${classes.background}`}>
            <div className={classes.main_text}>
                <h1>{ props.title }</h1>
                <Button>
                    <Link to='/Library' className={classes.button_text}>Take me to the Books</Link>
                </Button>
            </div>
            </div>
        </>
    )
}