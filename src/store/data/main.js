import {createReducer} from '@reduxjs/toolkit';
import {changeActiveTab} from '../action';
import {offer} from "../../mocks/offer";
import {TabType} from "../../const";

const initialState = {
    offer,
    activeTab: TabType.DETAILS.id,
};

const main = createReducer(initialState, (builder) => {
    builder
        .addCase(changeActiveTab, (state, action) => {
            state.activeTab = action.payload;
        })
});

export default main;
