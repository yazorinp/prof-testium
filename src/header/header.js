import React from 'react';
import {Link} from 'react-router-dom';

import './header.css';

import {viewLogoHref} from "../logo/logo";


function viewHeader(logo = viewLogoHref(), special_logo = '', autorize = '') {
    return (
        <div className='header'>
            <div>{logo}</div>
            <div>{special_logo}</div>
            <div>{autorize}</div>
        </div>
    );
}


const defaultSelector = [
    <Link to='/'><h3>Главная</h3></Link>,
    <Link to='/'><h3>Личный кабинет</h3></Link>,
    <Link to='/'><h3>Возможности</h3></Link>,
    <Link to='/'><h3>Тарифы</h3></Link>,
    <Link to='/'><h3>Внедрение</h3></Link>,
    <Link to='/'><h3>Отзывы</h3></Link>,
    <Link to='/'><h3>Поддержка</h3></Link>,
    <Link to='/'><h3>Регистрация новой школы</h3></Link>,
    <Link to='/'><h3>О себе</h3></Link>,
];

function viewHeaderBottom(lst = defaultSelector) {
    return (
        <table className='header_bottom'>
            <tr>
                {lst.map((elem) => <th>{elem}</th>)}
            </tr>
        </table>
    );
}

export {viewHeader, viewHeaderBottom, defaultSelector};