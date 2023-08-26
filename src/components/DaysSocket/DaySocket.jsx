import React, {useEffect, useState} from 'react';
import './style.css'
const DaySocket = ({contributionNumber, backArr}) => {

    const [contrNum, setContrNum] = useState(0)
    const [style, setStyle] = useState('socket ')
    const day = contributionNumber;
    const backTime = Object.keys(backArr);

    let contrNumTmp = 0

    for (let i = 0; i<=backTime.length; i++) {
        const backDate = new Date(backTime[i])
        if (backDate.toDateString() === contributionNumber) {
            contrNumTmp = backArr[backTime[i]]
        }
    }

    useEffect(() => {
        setContrNum(contrNumTmp)

    }, [contrNumTmp]);
    console.log(contrNum)

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

    console.log(style)
    return (
        <div className={style}></div>
    );
};

export default DaySocket;