import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    title: 'Выберите новость по которой хотите получить информацию во вкладке News',
    author: '',
    description: '',
    url: '',
    publishedAt: '',
    content: '',
}

export const newsSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setNewsState(state, action) {
           state.title = action.payload.title
           state.author = action.payload.author
           state.description = action.payload.description
           state.url = action.payload.url
           state.publishedAt = action.payload.publishedAt
           state.content = action.payload.content 
        }
    }
})

export const { setNewsState } = newsSlice.actions;
export default newsSlice.reducer;
