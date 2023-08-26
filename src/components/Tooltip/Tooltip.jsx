import React from 'react';
import './style.css'
import '../../index.css'
const Tooltip = ({count, date}) => {

    const days = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
    ];

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
        <div className='tooltip'>
            <b className='tooltip__heading'>{count} contributions</b>
            <p className='tooltip__text'>
                <span>{days[new Date(date).getDay()]}, </span>
                <span>{months[new Date(date).getMonth()]} </span>
                <span>{new Date(date).getDate()}, </span>
                <span>{new Date(date).getFullYear()}</span>
            </p>
        </div>
    );
};

export default Tooltip;