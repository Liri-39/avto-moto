import {createReducer} from '@reduxjs/toolkit';
import {addReview} from '../action';
import {reviews} from "../../mocks/reviews";

const initialState = {
    reviews
};

const reviewsData = createReducer(initialState, (builder) => {
    builder
        .addCase(addReview, (state, action) => {
            state.reviews = [
                ...state.reviews,
                action.payload
            ];
        })
});

export default reviewsData;
