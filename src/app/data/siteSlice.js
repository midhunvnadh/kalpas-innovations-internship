import { createSlice } from '@reduxjs/toolkit'

export const siteSlice = createSlice({
    name: 'site-data',
    initialState: {
        view: 'list',
        feedbackModal: false,
    },
    reducers: {
        toggleView: (state) => {
            state.view = state.view === "list" ? "compact" : "list";
        }
    },
})

export const { toggleView } = siteSlice.actions

export default siteSlice.reducer