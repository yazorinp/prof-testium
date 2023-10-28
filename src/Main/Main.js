import React from 'react';
import Header from '../Header/Header.js'


class Main extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <dev>
                <Header/>
                <iframe src='./Main.html'/>
            </dev>
        );
    }
}


export default Main;