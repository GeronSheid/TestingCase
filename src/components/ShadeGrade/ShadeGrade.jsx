import React from 'react';
import './ShadeGreade.css'
const ShadeGrade = () => {
    return (
        <div className='mt'>
            <ul className='flex-list'>
                <li className='smaller'>Меньше</li>
                <li className='zero'></li>
                <li className='small'></li>
                <li className='medium'></li>
                <li className='large'></li>
                <li className='veryLarge'></li>
                <li className='bigger'>Больше</li>
            </ul>
        </div>
    );
};

export default ShadeGrade;