import {NameSpace} from './reducer';

export const getActiveTab = (state) => state[NameSpace.MAIN].activeTab;
export const getOffer = (state) => state[NameSpace.MAIN].offer;
export const getReviews = (state) => state[NameSpace.REVIEWS].reviews;
export const getIsFormOpen = (state) => state[NameSpace.MAIN].isFormOpen;
