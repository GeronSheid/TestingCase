import React, {useEffect, useState} from 'react';
import './style.css'
import Tooltip from "../Tooltip/Tooltip";
const DaySocket = ({todayDate, backArr}) => {

    const [contrNum, setContrNum] = useState(0)
    const [style, setStyle] = useState('socket ')
    const [isVisible, setVisible] = useState(false)
    const backTime = Object.keys(backArr);

    const toggleVisibility = () => {
        setVisible(!isVisible)
    }

    let contrNumTmp = 0

    for (let i = 0; i<=backTime.length; i++) {
        const backDate = new Date(backTime[i])
        if (backDate.toDateString() === todayDate.toDateString()) {
            contrNumTmp = backArr[backTime[i]]
        }
    }

    useEffect(() => {
        setContrNum(contrNumTmp)

    }, [contrNumTmp]);

    useEffect(() => {
        if (contrNum < 9) {
            setStyle('socket low')
        } else if(contrNum < 19) {
            setStyle('socket medium')
        } else if(contrNum < 29) {
            setStyle('socket large')
        } else if(contrNum > 30) {
            setStyle('socket veryLarge')
        }
    }, [contrNum])

    return (
        <div onClick={toggleVisibility} className={style}>
            {isVisible === true ? <Tooltip
                count={contrNum}
                date={todayDate}
            /> : ''}
        </div>
    );
};

export default DaySocket;