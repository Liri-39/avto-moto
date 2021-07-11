import React from "react";
import {useSelector} from "react-redux";
import Header from "../header/header";
import Card from "../card/card";
import Footer from "../footer/footer";
import ReviewForm from "../review-form/review-form";
import {getIsFormOpen} from "../../store/selectors";

const Page = () => {

    const isFormOpen = useSelector(getIsFormOpen);

    if (isFormOpen) {
        document.body.style.overflow = 'hidden';
        document.querySelector('html').scrollTop = window.scrollY;
    } else  {
        document.body.style.overflow = null;
    }

    return <>
        {isFormOpen && <ReviewForm/>}
        {<Header/>}
        {<Card/>}
        {<Footer/>}
    </>
};

export default Page;
