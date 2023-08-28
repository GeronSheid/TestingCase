import React, {useEffect, useState} from 'react';
import styles from  './style.module.scss';
import '../../index.module.scss'
import DaySocket from "../DaysSocket/DaySocket";

const Layout = () => {

    const url = 'https://dpg.gg/test/calendar.json'
    const [data, setData] = useState({})

    useEffect(() => {
        fetch(url)
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
                throw res;
            })
            .then(data => {
                setData(data)
            })
            .catch(error => {
                console.warn(error)
            })
    }, [])

    const currentDate = new Date();
    let dayOfWeek = currentDate.getDay();
    const step = 1000 * 60 * 60 * 24;
    const iterations = 357 - (7 - dayOfWeek);
    const days = [];
    const daysReversed = [];
    if (dayOfWeek === 0) {
        dayOfWeek = 7;
        for (let i = 1; i <= (7-dayOfWeek); i++) {
            const day = new Date(currentDate.getTime() + i * step);
            days.push(day)
        }
    } else {
        for (let i = 1; i <= (7-dayOfWeek); i++) {
            const day = new Date(currentDate.getTime() + i * step);
            daysReversed.push(day)
        }
        days.push(...daysReversed.reverse())
    }
    for (let i= 0; i <= iterations-1; i++ ) {
        const day = new Date(currentDate.getTime() - i * step);
        days.push(day)
    }
    return (
        <div className={styles.daysGrid}>
            {days.reverse().map(el => <DaySocket
                key={el}
                todayDate={el}
                backArr={data}
            />)}
        </div>
    );
};

export default Layout;