import {createReducer} from '@reduxjs/toolkit';
import {offer} from "../mocks/offer";
import {reviews} from "../mocks/reviews";
import {TabType} from "../const";

const initialState = {
    offer: offer,
    reviews: reviews,
    activeTab: TabType.DETAILS,
};

const data = createReducer(initialState, (builder) => {
    builder
        .addCase(changeTab, (state, action) => {
            state.activeTab = action.payload;
        })
        .addCase(addReview, (state, action) => {
            state.reviews = [
                ...state.reviews,
                action.payload
            ];
        });
});

export {data};
