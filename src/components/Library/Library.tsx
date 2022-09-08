import React, { useState }from 'react'
import { Navbar } from '../Navbar';
import { 
    Theme,
    useTheme, 
    makeStyles, 
    createStyles, 
    Button,
    Dialog, 
    DialogActions, 
    DialogContent,
    DialogContentText, 
    DialogTitle,
} from '@material-ui/core';
import { useGetData } from '../../custom-hooks'
import { DataTable } from '../../components/DataTable';
import { BookForm } from '../BookForm'

const useStyles = makeStyles((theme: Theme) => createStyles({
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
    main: {
        display: 'flex',
        flexDirection: 'column',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`,
        width: '100%',
        height: '100%',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: "Georgia, 'Times New Roman', Times, serif",
    },
    h3: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
    },
    text: {
        display: 'flex',
        flexDirection: 'column',
        color: '#4ef3b4',
        textDecoration: 'none',
        backgroundColor: 'white',
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    root: {
        display: 'flex',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
    },
    hide: {
        display: 'none',
    },
    margin_top: {
        marginTop: '50px',
    },
    font: {
        fontFamily: "Georgia, 'Times New Roman', Times, serif",
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    toolbar:{
        display: 'flex',
        backgroundColor: '#373737',
        color: 'white',
        fontFamily: "Georgia, 'Times New Roman', Times, serif",
    },
    toolbar_button: {
        marginLeft: 'auto',
        color: 'white',
        fontFamily: "Georgia, 'Times New Roman', Times, serif",
    },
}));

export const Library = () => {

    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const [dialogOpen, setDialogOpen] = useState(false);

    const handleDialogClickOpen = () => {
        setDialogOpen(true)
    };

    const handleDialogClickClose = () => {
        setDialogOpen(false)
    };

    return (
        <div className={`${classes.root} ${classes.column}`}>
            <Navbar />
            <div className={`${classes.background}`}>
                <div className={classes.title}>
                    <h2>Library</h2>
                </div>
            </div>
            <Button className={classes.toolbar_button} onClick={handleDialogClickOpen}>Add a New Book!</Button>
            <Dialog open={dialogOpen} onClose={handleDialogClickClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add a New Book!</DialogTitle>
                <DialogContent>
                    <DialogContentText></DialogContentText>
                    <BookForm />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClickClose} color="primary">Cancel</Button>
                    <Button onClick={handleDialogClickOpen} color="primary">Done</Button>
                </DialogActions>
            </Dialog>
            <main>
                <div className={classes.header} />
                <DataTable />
            </main>
        </div>
    )
}