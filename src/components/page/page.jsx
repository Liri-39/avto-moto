import React from "react";
import {useSelector} from "react-redux";
import Header from "../header/header";
import Card from "../card/card";
import Footer from "../footer/footer";
import ReviewForm from "../review-form/review-form";
import {getIsFormOpen} from "../../store/selectors";

const Page = () => {
    const isFormOpen = useSelector(getIsFormOpen);

    return <>
        {<Header/>}
        {<Card/>}
        {<Footer/>}
        {isFormOpen && <ReviewForm/>}
    </>
};

export default Page;
