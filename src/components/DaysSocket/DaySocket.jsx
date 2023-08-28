import React, {useEffect, useState} from 'react';
import styles from './style.module.scss'
import Tooltip from "../Tooltip/Tooltip";
const DaySocket = ({todayDate, backArr}) => {

    const [contrNum, setContrNum] = useState(0)
    const [style, setStyle] = useState('')
    const [isVisible, setVisible] = useState(false)
    const backTime = Object.keys(backArr);
    let contrNumTmp = 0;
    const toggleVisibility = () => {
        setVisible(!isVisible)
    }
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
            setStyle(`${styles.socket} + ${styles.small}`)
            console.log(styles.socket)
        } else if(contrNum < 19) {
            setStyle(`${styles.socket} + ${styles.medium}`)
        } else if(contrNum < 29) {
            setStyle(`${styles.socket} + ${styles.large}`)
        } else if(contrNum > 30) {
            setStyle(`${styles.socket} + ${styles.veryLarge}`)
        }
        if (contrNum === 0) {
            setStyle(styles.socket)
        }
    }, [contrNum])

    return (
        <div onClick={toggleVisibility}
             className={style}
             style={isVisible ? {border: '1px solid black'} : {border: 'none'}}>
            {isVisible === true ? <Tooltip
                count={contrNum}
                date={todayDate}
            /> : null}
        </div>
    );
};

export default DaySocket;