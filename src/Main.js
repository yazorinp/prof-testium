import React from 'react';
import ReactDOM from 'react-dom/client';



class MainApp extends React.Component {
    constructor(props) {
        super(props);

        this.addNum = this.addNum.bind(this);
        this.state = {num: 0};
    }

    addNum(){
        this.setState({num: this.state.num + 1});
    }

    render() {
        return (
            <dev>
                <button onClick={this.addNum}>
                    {this.state.num}
                </button>
            </dev>
        );
    }
}

export default MainApp;