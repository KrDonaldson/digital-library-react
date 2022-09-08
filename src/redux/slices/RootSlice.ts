import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        title: 'Title',
        author: 'Author',
        pages: 'Pages',
        isbn: 'Isbn',
        dewey: 'Dewey',
        edition: 'Edition',
        publisher: 'Publisher',
        cover: 'Cover',
        subjects: 'Subjects',
        description: 'Description',
        series: 'Series',
    },
    reducers: {
        chooseTitle: (state, action) => { state.title = action.payload},
        chooseAuthor: (state, action) => { state.author = action.payload},
        choosePages: (state, action) => { state.pages = action.payload},
        chooseIsbn: (state, action) => { state.isbn = action.payload},
        chooseDewey: (state, action) => { state.dewey = action.payload},
        chooseEdition: (state, action) => { state.edition = action.payload},
        choosePublisher: (state, action) => { state.publisher = action.payload},
        chooseCover: (state, action) => { state.cover = action.payload},
        chooseSubjects: (state, action) => { state.subjects = action.payload},
        chooseDescription: (state, action) => { state.description = action.payload},
        chooseSeries: (state, action) => { state.series = action.payload},
    },
})

export const reducer = rootSlice.reducer;
export const { 
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
    chooseSeries,
} = rootSlice.actions;