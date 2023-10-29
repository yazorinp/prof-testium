import React from 'react';
import Header from '../det/header'

class Root extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <Header/>
            </div>
        );
    }
}


export default Root;