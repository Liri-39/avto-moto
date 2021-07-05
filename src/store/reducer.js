import {ActionType} from './action';
import {offer} from "../mocks/offer";
import {reviews} from "../mocks/reviews";
import {TabType} from "../const";

const initialState = {
    offer,
    reviews,
    activeTab: TabType.DETAILS,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.ADD_REVIEW:
            return {
                ...state,
                review: action.payload
            };
    }

    return state;
};

export {reducer};
