import React from 'react';

import { hostUrl, githubLoginUri, googleLoginUri, } from '../../utils/constants';
import googleIcon from '../../images/google_icon.svg';
import githubIcon from '../../images/github_icon.svg';
import LoginButton from '../UI/LoginButton/LoginButton';


const LoginPage = () => {
    return (
        <div className='login-page'>
            <div className='login-page_container'>
                <h1>Добро пожаловать</h1>
                <h3>Выберите как вы хотите войти</h3>
                <LoginButton href={hostUrl + googleLoginUri} icon={googleIcon} text={'Войти с Google'} />
                <LoginButton href={hostUrl + githubLoginUri} icon={githubIcon} text={'Войти с Github'} />
            </div>

        </div>
    );
}

export default LoginPage;