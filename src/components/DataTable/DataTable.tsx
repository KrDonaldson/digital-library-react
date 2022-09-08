import React, { useState } from 'react';
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import { useGetData } from '../../custom-hooks';
import { server_calls } from '../../api';
import { Button, Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle } from '@material-ui/core';
import { BookForm } from '../BookForm';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width:90, hide:true },
    { field: 'title', headerName: 'Title', flex: 2 },
    { field: 'author', headerName: 'Author', flex: 1 },
    { field: 'pages', headerName: 'Pages', flex: 1 },
    { field: 'isbn', headerName: 'Isbn', flex: 1 },
    { field: 'dewey', headerName: 'Dewey', flex: 1 },
    { field: 'edition', headerName: 'Edition', flex: 2 },
    { field: 'publisher', headerName: 'Publisher', flex: 1 },
    { field: 'cover', headerName: 'Cover', flex: 1, hide:true},
    { field: 'subjects', headerName: 'Subjects', flex: 2 },
    { field: 'description', headerName: 'Description', flex: 1, hide:true},
    { field: 'series', headerName: 'Series', flex: 1 },
];

interface gridData {
    data: {
        id?: string
    }
}

export const DataTable = () => {

    let { bookData, getData } = useGetData()
    let [open, setOpen] = useState(false);
    let [gridData, setData] = useState<gridData>({data:{}});
    const [selectionTitle, setSelectionTitle] = useState<any>([]);

    let handleOpen = () => {
        setOpen(true)
    };
    let handleClose = () => {
        setOpen(false)
    };

    let deleteData = () => {
        server_calls.delete(selectionTitle);
        getData();
        setTimeout( () => { window.location.reload(); }, 1000)
    }

    return (
        <div style={{ height: 400, width: '100%' }}>

        <DataGrid rows={ bookData } columns={ columns } pageSize={ 5 } checkboxSelection={true} 
        onSelectionModelChange={ (item) => {
            setSelectionTitle(item)
        }}/>

        <Button onClick={handleOpen}>Update</Button>
        <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>

        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Update this Book {selectionTitle}</DialogTitle>
            <DialogContent>
                <DialogContentText>Update this Book</DialogContentText>
                    <BookForm id={selectionTitle!}/>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">Cancel</Button>
                <Button onClick={handleClose} color="primary">Done</Button>
            </DialogActions>
        </Dialog>
            
        </div>
    )
}