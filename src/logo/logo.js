import React from 'react';
import Logo from './logo.png'
import {Link} from "react-router-dom";


function viewLogo(size = '256px', src = Logo) {
    return <img src={src} alt='Logo' width={size}/>;
}

function viewLogoHref(url = '/', size = '256px', src = Logo) {
    return (
        <Link to={url}>
            {viewLogo(size, src)}
        </Link>
    );
}

export {viewLogo, viewLogoHref};