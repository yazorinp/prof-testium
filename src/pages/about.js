import React from 'react';
import {viewHeader, viewHeaderBottom} from "../header/header";
import {viewGarage} from "../garage/garage";


class About extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                {viewHeader()}
                {viewHeaderBottom()}
                <div className='body'>
                    <h1>О нас</h1>
                    <p>Пусто</p>
                </div>
                {viewGarage()}
            </div>
        );
    }
}


export default About;