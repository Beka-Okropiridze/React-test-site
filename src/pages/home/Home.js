import { useState } from "react";

import Welcome from "../../components/header/Welcome"
import HelloWorld from "../../components/header/HelloWorld"

import './home.css'

export const Home = (props) => {
    const [showSomething, setshowSomething] = useState(false);

    const renderContent = () => {
    };

    const handClick = () => {
        console.log('_ _showsomething_ _', showSomething);
        setshowSomething(!showSomething)
    };


    return ( <div className="col-12 my-3">
        <button className="btn btn btn-primary" onClick={handClick}>  
         Do Something
         </button>
        <hr />
        {renderContent()}
    </div>   
    );    
};