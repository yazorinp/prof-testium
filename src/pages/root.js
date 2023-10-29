import React from 'react';
import {viewHeader, viewHeaderBottom} from "../header/header";
import {viewGarage} from "../garage/garage";

class Root extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                {viewHeader()}
                {viewHeaderBottom()}
                <h1>Доброе утро!</h1>
                {viewGarage()}
            </div>
        );
    }
}


export default Root;