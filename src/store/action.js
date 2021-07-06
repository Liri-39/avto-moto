import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
    ADD_REVIEW: `reviews/addReview`,
    CHANGE_ACTIVE_TAB: `main/changeActiveTab`,
    SET_IS_FORM_OPEN: `main/setIsFormOpen`
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

export const setIsFormOpen = createAction(ActionType.SET_IS_FORM_OPEN, (activeTab) => {
    return {
        payload: activeTab,
    };
});
