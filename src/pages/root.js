import React from 'react';
import {viewHeader, viewHeaderBottom} from "../header/header";
import {viewGarage} from "../garage/garage";

import '../style.css';

class Root extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                {viewHeader()}
                {viewHeaderBottom()}
                <div className='body'>
                    <h1>Доброе утро</h1>
                </div>
                {viewGarage()}
            </div>
        );
    }
}


export default Root;