import React from 'react';
import './styles.css';

const ItemIcon = ({ image, alt, hover }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img className={`${hover ? 'ItemIconImg' : ''}`} style={{ width: '129px', height: 'auto' }} src={image} alt={alt} />
        </div>
    )
}

export default ItemIcon;