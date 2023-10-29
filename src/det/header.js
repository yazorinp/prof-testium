import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';
import Logo from '../images/logo.png'


class Header extends React.Component {
    constructor(props) {
        super(props);
    }


    viewLogo() {
        if (this.props['logo'] === undefined)
            return <Link to='/'><img src={Logo} alt='Logo' width='256px'/></Link>;
        else
            return <Link to='/'>{this.props['logo']}</Link>
    }


    viewMems() {
        return <p>Здесь скоро что-то будет</p>;
    }


    viewLogInOut() {
        return (
            <div>
                <Link to='/enter'>Войти</Link> | <Link to='/register'>Зарегистрироваться</Link>
            </div>
        );
    }


    viewSection() {
        let section = this.props['section'];
        if (section === undefined)
            section = [<p>Главная</p>, <p>Возможности</p>];

        return (
            <table className='section'>
                {section.map(elem => <th>{elem}</th>)}
            </table>
        );
    }


    render() {
        return (
            <div>
                <div className='header'>
                    <div>{this.viewLogo()}</div>
                    <div>{this.viewMems()}</div>
                    <div>{this.viewLogInOut()}</div>
                </div>
                <div>{this.viewSection()}</div>
            </div>
        );
    }
}


export default Header;