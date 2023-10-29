import React from 'react';
import {Link} from 'react-router-dom';

import './garage.css'

import {viewLogo} from "../logo/logo";
import {defaultSelector} from "../header/header";


const defaultHelps = [
    <Link to='/'><h3>Вопросы и ответы</h3></Link>,
    <Link to='/'><h3>Обучение</h3></Link>,
    <Link to='/'><h3>Материалы по охране труда</h3></Link>,
];


function GarageLogo() {
    return (
        <div>
            <div align='center'>{viewLogo('512px')}</div>
            <div align='center'><a href='https://github.com/yazorinp/prof-testium'>Наш GitHub</a></div>
        </div>
    );
}


function GarageTable(header, lst) {
    return (
        <div className='garage_block'>
            <h1>{header}</h1>
            {
                lst.map((elem) => <p>{elem}</p>)
            }
        </div>
    );
}


function GaragePhones() {
    return (
        <div className='garage_block'>
            <h1>Контакты</h1>
            <h2>Почта</h2>
            <p>...</p>
            <h2>Телефон</h2>
            <p>...</p>
            <p><a href='https://ya.ru'>Наш Телеграм</a></p>
            <p><a href='https://ya.ru'>Группа ВК</a></p>
            <p><a href='https://ya.ru'>Что это?</a></p>
        </div>
    )
}


function GarageConfident() {
    return (
        <div className='garage_block'>
            <Link to='/'><h2>Политика конфиденциальности</h2></Link>
        </div>
    )
}


function GarageFeedback() {
    return (
        <form className='garage_feedback'>
            <div className='garage_block'>
                <h3>Имя</h3>
                <input type='text' name='firstname'/>
                <h3>Фамилия</h3>
                <input type='text' name='lastname'/>
                <h3>Почта</h3>
                <input type='email' name='email'/>
                <div className='garage_submit' align='right'><input type='submit' name='Отправить'/></div>
            </div>
            <div>
                <textarea>Напишите отзыв...</textarea>
            </div>
        </form>
    );
}


function GarageTop() {
    return (
        <section className='garage_top'>
            <div>{GarageTable('Разделы', defaultSelector)}</div>
            <div>{GarageTable('Помошь', defaultHelps)}</div>
            <div>
                {GaragePhones()}
                {GarageConfident()}
            </div>
            <div>{GarageFeedback()}</div>
        </section>
    )
}

function viewGarage() {
    return (
        <div className='garage'>
            <div>{GarageTop()}</div>
            <div align='center'>{GarageLogo()}</div>
        </div>
    );
}


export {viewGarage};