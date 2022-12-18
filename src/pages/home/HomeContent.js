
import { useState } from "react";

import Welcome from "../../components/header/Welcome"
import HelloWorld from "../../components/header/HelloWorld"

const HomeContent = () => {
    const [showSomething, setshowSomething] = useState(false);

    const renderContent = () => { 
        let content;
        if (showSomething) {
            content = <Welcome user="James" />;
        } else {
            content = <HelloWorld title="24" />;
        }

        return content;
    };

    const handClick = () => {
        console.log('_ _showsomething_ _', showSomething);
        setshowSomething(!showSomething)
    };


    return ( 
    <>
        <button className="btn btn btn-primary" onClick={handClick}>  
         Do Something
         </button>
        <hr />
        {renderContent()}
    </>   
    );  

};

export default HomeContent;