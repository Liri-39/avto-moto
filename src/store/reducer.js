import {combineReducers} from '@reduxjs/toolkit';
import main from './data/main';
import reviewsData from "./data/reviews";

export const NameSpace = {
    MAIN: `MAIN`,
    REVIEWS: `REVIEWS`,
};

export default combineReducers({
    [NameSpace.MAIN]: main,
    [NameSpace.REVIEWS]: reviewsData
});
