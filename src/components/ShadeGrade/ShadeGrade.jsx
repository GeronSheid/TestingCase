import React from 'react';
import styles from './style.module.scss';
const ShadeGrade = () => {
    return (
        <div className={styles.mt}>
            <ul className={styles.flexList}>
                <li className={styles.smaller}>Меньше</li>
                <li className={`${styles.zero} ${styles.socket}`}></li>
                <li className={`${styles.small} ${styles.socket}`}></li>
                <li className={`${styles.medium} ${styles.socket}`}></li>
                <li className={`${styles.large} ${styles.socket}`}></li>
                <li className={`${styles.veryLarge} ${styles.socket}`}></li>
                <li className={styles.bigger}>Больше</li>
            </ul>
        </div>
    );
};

export default ShadeGrade;