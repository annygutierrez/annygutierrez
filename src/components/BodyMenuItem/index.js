import React from 'react';
import './styles.css';

const BodyMenuItem = ({ title, action, id, activeItem }) => {
    return (
            <span className='BodyMenuItemText' onClick={() => action(id)} style={{ fontFamily: 'Antonio', color: activeItem === id ? '#07AC7B' : 'black', margin: '0 1em', cursor: 'pointer' }}>{title}</span>
    )
}

export default BodyMenuItem;