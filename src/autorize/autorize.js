import React from 'react';
import {Link} from 'react-router-dom';


function viewSignInOut() {
    return (
        <dev>
            <Link to='/enter'>Вход</Link> | <Link to='/register'>Регистрация</Link>
        </dev>
    );
}


export {viewSignInOut};