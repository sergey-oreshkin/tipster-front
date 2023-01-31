import React from 'react';

const LoginButton = ({ href, icon, text }) => {
    return (
        <a href={href}>
            <button className='login-button'>
                <img alt="кнопка входа" src={icon} />
                <span>{text}</span>
            </button>
        </a>
    )
}

export default LoginButton;