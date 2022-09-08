import React from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { 
    chooseTitle, 
    chooseAuthor, 
    choosePages, 
    chooseIsbn, 
    chooseDewey,
    chooseEdition, 
    choosePublisher, 
    chooseCover, 
    chooseSubjects,
    chooseDescription,
    chooseSeries
} from '../../redux/slices/RootSlice';
import { Input } from '../SharedComponents/Input';
import { Button } from '@material-ui/core';
import { server_calls } from '../../api';

interface BookFormProps {
    id?: string;
    data?: {}
};

interface BookState {
    title: string;
    author: string;
    pages: string;
    isbn: string;
    dewey: string;
    edition: string;
    publisher: string;
    cover: string;
    subjects: string;
    description: string;
    series: string;
}

export const BookForm = (props:BookFormProps) => {

    const dispatch = useDispatch();
    const store = useStore();
    const title = useSelector<BookState>(state => state.title);
    const { register, handleSubmit } = useForm({ })

    const onSubmit = (data:any, event:any) => {
        console.log(props.id)
        if(props.id!){
            server_calls.update(props.id!, data);
            console.log(`Updated:${data} ${props.id}`);
            console.log(data);
            setTimeout( () => {window.location.reload()}, 1000);
            event.target.reset();
        } else {
            dispatch(chooseTitle(data.title));
            dispatch(chooseAuthor(data.author));
            dispatch(choosePages(data.pages));
            dispatch(chooseIsbn(data.isbn));
            dispatch(chooseDewey(data.dewey));
            dispatch(chooseEdition(data.edition));
            dispatch(choosePublisher(data.publisher));
            dispatch(chooseCover(data.cover));
            dispatch(chooseSubjects(data.subjects));
            dispatch(chooseDescription(data.description));
            dispatch(chooseSeries(data.series));
            server_calls.create(store.getState());
            setTimeout( () => {window.location.reload()}, 1000)
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="title">Title</label>
                    <Input {...register('title')} name="title" placeholder='Title'/>
                </div>
                <div>
                    <label htmlFor="author">Author</label>
                    <Input {...register('author')} name="author" placeholder='Author'/>
                </div>
                <div>
                    <label htmlFor="pages">Pages</label>
                    <Input {...register('pages')} name="pages" placeholder='Pages'/>
                </div>
                <div>
                    <label htmlFor="isbn">Isbn</label>
                    <Input {...register('isbn')} name="isbn" placeholder='Isbn'/>
                </div>
                <div>
                    <label htmlFor="dewey">Dewey</label>
                    <Input {...register('dewey')} name="dewey" placeholder='Dewey'/>
                </div>
                <div>
                    <label htmlFor="edition">Edition</label>
                    <Input {...register('edition')} name="edition" placeholder='Edition'/>
                </div>
                <div>
                    <label htmlFor="publisher">Publisher</label>
                    <Input {...register('publisher')} name="publisher" placeholder='Publisher'/>
                </div>
                <div>
                    <label htmlFor="cover">Cover</label>
                    <Input {...register('cover')} name="cover" placeholder='Cover'/>
                </div>
                <div>
                    <label htmlFor="subjects">Subjects</label>
                    <Input {...register('subjects')} name="subjects" placeholder='Subjects'/>
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <Input {...register('description')} name="description" placeholder='Description'/>
                </div>
                <div>
                    <label htmlFor="series">Series</label>
                    <Input {...register('series')} name="series" placeholder='Series'/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}
