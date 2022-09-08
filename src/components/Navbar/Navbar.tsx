import React from 'react'
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { GiBlackBook } from 'react-icons/gi';

const useStyles = makeStyles({
    logo: {
        width: '155px',
        height: 'auto',
        color: 'white',
    },
    navlogo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
    },
    navbar: {
        backgroundColor: '#4158D0',
        zIndex: 1,
        borderBottom: '1px solid purple',
        height: '9vh',
    },
    navbarItem: {
        color: 'white',
        textDecoration: 'none',
    },
    spaceBetween: {
        justifyContent: 'space-between',
    },
    alignCenter: {
        alignItems: 'center'
    },
    ul: {
        listStyleType: 'none',
    },
    width60: {
        width: '60%',
    },
    width100: {
        width: '100%',
    },
    psides: {
        paddingRight: '10px',
        paddingLeft: '10px',
    },
})

export const Navbar = () => {

    const classes = useStyles();

    return (
        <div className={`${classes.row} ${classes.navbar} ${classes.width100} ${classes.alignCenter} ${classes.spaceBetween}`}>
            <div className={`${classes.navlogo} `}>
                    <Link to='/' className={`${classes.logo} ${classes.navbarItem} ${classes.psides}`}><GiBlackBook /> My Digital Library
                    </Link>
            </div>
            <div className={`${classes.width60} ${classes.alignCenter}`}>
                <ul className={`${classes.ul} ${classes.row} ${classes.spaceBetween} ${classes.psides}`}>
                    <li>
                        <Button>
                            <Link to='/Library' className={`${classes.navbarItem} ${classes.psides}`}>Library</Link>
                        </Button>
                    </li>
                    <li>
                        <Button>
                            <Link to='About' className={`${classes.navbarItem} ${classes.psides}`}>About</Link>
                        </Button>
                    </li>
                </ul>
            </div>
        </div>
    )
}