import React from 'react';
import './style.css'
const UpperMenu = () => {

    const months = [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь'
    ]

    return (
        <ul className='list-flex'>
            <li>
                Август
            </li>
            <li>
                Июль
            </li>
            <li>
                Июнь
            </li>
            <li>
                Май
            </li>
            <li>
                Апр.
            </li>
            <li>
                Март
            </li>
            <li>
                Фев.
            </li>
            <li>
                Янв.
            </li>
            <li>
                Дек.
            </li>
            <li>
                Нояб.
            </li>
            <li>
                Окт.
            </li>
            <li>
                Сент.
            </li>
        </ul>
    );
};

export default UpperMenu;