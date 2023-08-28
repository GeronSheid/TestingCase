import React from 'react';
import styles from './style.module.scss'

const Aside = () => {
    return (
        <ul className={styles.flex}>
            <li>
                Пн
            </li>
            <li>
                Ср
            </li>
            <li>
                Пт
            </li>
        </ul>
    );
};

export default Aside;