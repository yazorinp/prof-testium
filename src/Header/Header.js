import React from 'react';
import './Header.css';
import Logo from '../Images/logo.png'


class Header extends React.Component {
    constructor(props) {
        super(props);
    }


    viewLogo() {
        return (
            <dev>
                <img src={Logo} alt='Logo' width='32px'/>
            </dev>
        );
    }


    viewSign() {
        return (
            <p>Sign in</p>
        );
    }

    render() {
        return (
            <table>
                <tr>
                    <th width='10%' align='left'>{this.viewLogo()}</th>
                    <th width='60%' align='left'>Logo Company</th>
                    <th width='10%'>FAQ</th>
                    <th width='10%'>Razdels</th>
                    <th width='10%' align='right'>{this.viewSign()}</th>
                </tr>
            </table>
        );
    }
}


export default Header;