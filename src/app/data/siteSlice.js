import { createSlice } from '@reduxjs/toolkit'

export const siteSlice = createSlice({
    name: 'site-data',
    initialState: {
        view: 'list',
        feedbackModal: false,
    },
    reducers: {
        toggleView: (state, action) => {
            state.view = action.payload;
        },
        toggleFeedbackModal: (state) => {
            state.feedbackModal = !state.feedbackModal;
        }
    },
})

export const { toggleView, toggleFeedbackModal } = siteSlice.actions

export default siteSlice.reducer