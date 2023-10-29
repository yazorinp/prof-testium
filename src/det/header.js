import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';
import Logo from '../images/logo.png'


const defaultSection = [
    <Link to='/'><h3>Главная</h3></Link>,
    <Link to='/bugs'><h3>Возможности</h3></Link>,
    <Link to='/bugs'><h3>Тарифы</h3></Link>,
    <Link to='/bugs'><h3>Внедрение</h3></Link>,
    <Link to='/bugs'><h3>Отзывы</h3></Link>,
    <Link to='/bugs'><h3>Поддержка</h3></Link>,
    <Link to='/bugs'><h3>Зарегистрировать новую школу</h3></Link>,
    <Link to='/bugs'><h3>О себе</h3></Link>,
];


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
        if (section === undefined || section == 'default') {
            section = defaultSection;
        }

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