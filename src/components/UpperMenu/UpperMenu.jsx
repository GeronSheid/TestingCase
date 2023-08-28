import React from 'react';
import styles from './style.module.scss'
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
    const monthsList = [];
    const todayDate = new Date().getDate()
    const monthStep = 31 * 60 * 60 * 24 * 1000;
    let startMonth = new Date().getMonth();
    if (todayDate < 14) {
        startMonth = new Date(new Date().getTime() - monthStep).getMonth()
    }
    monthsList.push(startMonth)
    for (let i = 0; i < 10; i++) {
        let newMonthNumber = (startMonth - 1);
        startMonth = startMonth - 1;
        if (newMonthNumber < 0) {
            newMonthNumber = 12 + newMonthNumber;
        }
        monthsList.push(newMonthNumber)
        console.log(monthsList)
    }



    return (
        <ul className={styles.list}>
            {monthsList.map(el => <li className={styles.li}>{months[el]}</li>)}
        </ul>
    );
};

export default UpperMenu;