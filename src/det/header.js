import React from 'react';
import {Link} from 'react-router-dom';


class Header extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <table>
                <tr>
                    <th>
                        <Link to="/">Root</Link>
                    </th>
                    <th>
                        <Link to="/about">About</Link>
                    </th>
                </tr>
            </table>
        );
    }
}


export default Header;