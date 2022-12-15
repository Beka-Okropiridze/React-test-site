import { useState } from "react";

import Welcome from "../../components/header/Welcome"
import HelloWorld from "../../components/header/HelloWorld"

import './home.css'

export const Home = (props) => {
    let showSomething = useState(false);

    const renderContent = () => {
        let content;

        if ( showSomething ) {
            content = <HelloWorld title="28" subTitle="subbTTitle" />
        } else {
            content = <Welcome user=" Mister" />
        }
        return content;
    };

    return  <div className="col-12 my-3">
        <button className="btn btn btn-primary" onClick={(event) => {
            showSomething = !showSomething;
            console.log('_ _showsomething_ _', showSomething);
        }}> Do Something</button>
        <hr />
        {renderContent()}
    </div>       
}