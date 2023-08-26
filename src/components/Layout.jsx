import React, {useEffect, useState} from 'react';
import './DaysLayout.css';
import '../index.css'
import DaySocket from "./DaysSocket/DaySocket";

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
    const dayOfWeek = currentDate.getDay();
    const step = 1000 * 60 * 60 * 24;
    const iterations = 357 - (7 - dayOfWeek);
    const days = [];
    for (let i= 0; i <= iterations-1; i++ ) {
        const day = new Date(currentDate.getTime() - i * step);
        const string = day.toDateString()
        days.push(string)
    }

    return (
        <div className='daysGrid'>
            {days.reverse().map(el => <DaySocket key={el} contributionNumber={el} backArr={data}  />)}
        </div>
    );
};

export default Layout;