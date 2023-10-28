import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../det/header'


class Root extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <Header/>
                <h1>Help</h1>
            </div>
        );
    }
}


export default Root;