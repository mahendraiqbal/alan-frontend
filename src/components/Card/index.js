import React from 'react';
import './style.css';

export default function Card({ id, food_name, price }) {
    return (
        <>
            <div className='col-3'>
                <div className='activity-card' data-cy="activity-item">
                    <div className='activity-body'>
                        <h2 data-cy="activity-item-title" className='title-data'>{food_name}</h2>
                        <p>{price}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
