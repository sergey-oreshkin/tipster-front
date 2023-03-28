import React from 'react';
import { Redirect } from 'react-router-dom';
import getUrlParameter from '../../utils/getUrlParameter';
import { tokenStorageName } from '../../utils/constants';
import { useDispatch } from 'react-redux';
import { getProfile } from '../../store/API/ProfileApi';


const Authorization = () => {

    const dispatcher = useDispatch();

    const token = getUrlParameter('token');

    if (token) {
        localStorage.setItem(tokenStorageName, token);
        dispatcher(getProfile());
    }

    return (
        <Redirect to='/' />
    )
}

export default Authorization;