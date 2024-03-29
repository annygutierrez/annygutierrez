import React from 'react';
import './styles.css';

const SubMenuItem = ({ title, action, id, activeItem }) => {
    return (
            <span className='SubMenuItem' onClick={() => action(id)} style={{ fontFamily: 'Antonio', fontSize: '25px', color: activeItem === id ? '#7280FA' : '#686666', margin: '0 1em', cursor: 'pointer' }}>{title}</span>
    )
}

export default SubMenuItem;