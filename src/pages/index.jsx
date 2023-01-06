import React from "react";
import Nav from "../components/Nav"
import IntroSwiper from "../components/IntroSwiper";
import Button from "../components/Button"
function index(props){
    return(
    <div>
        <Nav></Nav>
        <IntroSwiper></IntroSwiper>
        <Button></Button>
    </div>     
    );
}

export default index;