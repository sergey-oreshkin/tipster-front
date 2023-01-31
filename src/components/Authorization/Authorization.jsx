import React from 'react';
import { Redirect } from 'react-router-dom';
import getUrlParameter from '../../utils/getUrlParameter';


const Authorization = () => {

    const token = getUrlParameter('token');

    localStorage.setItem('token', token);

    return (
        <Redirect to='/' />
    )
}

export default Authorization;