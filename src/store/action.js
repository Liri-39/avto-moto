import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
    ADD_REVIEW: `addReview`,
    CHANGE_ACTIVE_TAB: `changeActiveTab`
}

export const addReview = createAction(ActionType.ADD_REVIEW, (review) => {
    return {
        payload: review,
    };
});

export const changeActiveTab = createAction(ActionType.CHANGE_ACTIVE_TAB, (activeTab) => {
    return {
        payload: activeTab,
    };
});
