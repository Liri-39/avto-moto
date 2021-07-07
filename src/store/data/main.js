import {createReducer} from "@reduxjs/toolkit";
import {changeActiveTab, setIsFormOpen} from "../action";
import {offer} from "../../mocks/offer";
import {TabType} from "../../const";

const initialState = {
    offer,
    activeTab: TabType.DETAILS.id,
    isFormOpen: false,
};

const main = createReducer(initialState, (builder) => {
    builder
        .addCase(changeActiveTab, (state, action) => {
            state.activeTab = action.payload;
        })
        .addCase(setIsFormOpen, (state, action) => {
            state.isFormOpen = action.payload;
        })
});

export default main;
